"use client";
import { CommonPage } from "@/components/common-page/common-page";
import TicketList from "@/components/ticket-list/ticket-list";
import { TicketStatusEnum } from "@/graphql/graphql";
import { useParams } from "next/navigation";

export default function Page() {

  const { ticketStatus } = useParams<{ ticketStatus: string }>();
  
  const ticketStatusEnumValue = Object.values(TicketStatusEnum).find((status) => status ==ticketStatus?.toUpperCase())
  

  return (
    <CommonPage>
      <TicketList ticketStatus={ticketStatusEnumValue} />
    </CommonPage>
  );
}
