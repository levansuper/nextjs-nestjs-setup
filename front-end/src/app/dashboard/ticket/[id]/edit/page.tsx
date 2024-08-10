"use client";
import { CustomButton } from "@/components/button/custom-button";
import { CommonPage } from "@/components/common-page/common-page";
import { AuthenticationContext } from "@/components/context/authentication-context";
import TicketList from "@/components/ticket-list/ticket-list";
import {
  TicketStatusEnum,
  useAddTicketCommentMutation,
  useGetTicketQuery,
  useHandleTicketMutation,
  useLockTicketMutation,
  useSkipTicketMutation,
} from "@/graphql/graphql";
import { useParams } from "next/navigation";
import { use, useContext, useEffect, useMemo, useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(AuthenticationContext);

  const { data, error, loading } = useGetTicketQuery({
    variables: {
      id,
    },
  });
  const [lockTicketMutation] = useLockTicketMutation({
    variables: {
      id,
    },
  });

  const [skipTicketMutation] = useSkipTicketMutation({
    variables: {
      id,
    },
  });

  const [handleTicketMutation] = useHandleTicketMutation({
    variables: {
      id,
    },
  });
  const [addTicketComment] = useAddTicketCommentMutation();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [newComment, setNewComment] = useState<string>();
  useEffect(() => {
    setTitle(data?.ticket.title);
    setDescription(data?.ticket.description);
  }, [data?.ticket.title, data?.ticket.description]);

  const columnNameClass = "w-40";
  const lockedByUser = useMemo(() => {
    return (
      data?.ticket.lockedByUserId == user?.sub &&
      data?.ticket.status == TicketStatusEnum.Locked
    );
  }, [data?.ticket.lockedByUserId, data?.ticket.status, user?.sub]);
  return (
    <div className="p-6 flex-col gap-6">
      <div className="flex gap-4">
        <CustomButton
          onClick={lockTicketMutation}
          disabled={!!data?.ticket.lockedByUserId}
        >
          Lock
        </CustomButton>
        <CustomButton onClick={handleTicketMutation} disabled={!lockedByUser}>
          Handle
        </CustomButton>
        <CustomButton onClick={skipTicketMutation} disabled={!lockedByUser}>
          Release
        </CustomButton>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row">
          <div className={columnNameClass}>ID:</div>
          <div>{data?.ticket.id}</div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={columnNameClass}>Status:</div>
          <div>{data?.ticket.status}</div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={columnNameClass}>Title:</div>
          {lockedByUser ? (
            <input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={columnNameClass}>Description:</div>
          {lockedByUser ? (
            <input
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          ) : (
            <div>{description}</div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div>Comments:</div>
          {data?.ticket.comment.map((comment, id) => {
            return <div key={id}>{comment}</div>;
          })}
          {lockedByUser ? (
            <>
              <input
                value={newComment}
                onChange={e => {
                  setNewComment(e.target.value);
                }}
              />
              <CustomButton
                disabled={!lockedByUser || !newComment}
                onClick={() => {
                  addTicketComment({
                    variables: {
                      addTicketCommentDto: {
                        id,
                        comment: newComment!,
                      },
                    },
                  });
                }}
              >
                Add Comment
              </CustomButton>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
