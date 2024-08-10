"use client";
import { TicketStatusEnum, useSearchTicketsQuery } from "@/graphql/graphql";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

type TicketListProps = {
  lockedByMe?: boolean;
  ticketStatus?: TicketStatusEnum;
};

export default function TicketList({
  lockedByMe,
  ticketStatus,
}: TicketListProps) {
  const searchParams = useSearchParams();

  const take = searchParams.get("take") || "10";
  const skip = searchParams.get("skip") || "0";

  const { data, loading, error } = useSearchTicketsQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      searchTicketDto: {
        status: ticketStatus,
        lockedByMe,
      },
      pagination: {
        skip: parseInt(skip) || 0,
        take: parseInt(take) || 20,
      },
    },
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        Error during fetch
      </div>
    );
  }
  const itemClass = "flex-1 text-center";

  return (
    <div className="flex flex-col items-center justify-start h-full gap-2 w-full p-2">
      {data?.searchTickets.data.map(ticket => {
        return (
          <Link
            key={ticket.id}
            className="flex border border-gray-500 rounded-md w-full cursor-pointer"
            href={`/dashboard/ticket/${ticket.id}/edit`}
          >
            <div className={itemClass}>{ticket.id}</div>
            <div className={itemClass}>{ticket.title}</div>
            <div className={itemClass}>{ticket.status}</div>
            <div className={itemClass}>{ticket.createdAt}</div>
          </Link>
        );
      })}
      <div>Total: {data?.searchTickets.totalCount}</div>
    </div>
  );
}
