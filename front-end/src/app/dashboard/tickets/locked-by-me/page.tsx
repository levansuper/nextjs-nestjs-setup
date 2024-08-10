"use client";
import { CommonPage } from "@/components/common-page/common-page";
import TicketList from "@/components/ticket-list/ticket-list";
import { TicketStatusEnum } from "@/graphql/graphql";
import { useParams } from "next/navigation";

export default function Page() {
  return (
    <CommonPage>
      <TicketList ticketStatus={TicketStatusEnum.Locked} lockedByMe />
    </CommonPage>
  );
}
