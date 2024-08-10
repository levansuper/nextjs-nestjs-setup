"use client";
import { CustomButton } from "@/components/button/custom-button";
import { ApolloContext } from "@/components/context/apollo-context";
import { AuthenticationContext } from "@/components/context/authentication-context";
import {
  GetNextAvailableTicketDocument,
  GetNextAvailableTicketQueryResult,
  useGetNextAvailableTicketLazyQuery,
  useGetNextAvailableTicketQuery,
} from "@/graphql/graphql";
import { useRouter } from "next/navigation";
import { use, useContext, useEffect } from "react";

export const NextAvailableTicketButton = () => {
  const [getNextAvailableTicket,{ data, loading, error }] = useGetNextAvailableTicketLazyQuery({
    fetchPolicy: 'network-only'
  });
  const router = useRouter();

  return (
    <CustomButton disabled={loading} onClick={async () => {
      const nextTicket =  await getNextAvailableTicket();
      if(nextTicket.data?.getNextAvailableTicket.id){
        router.push(`/dashboard/ticket/${nextTicket.data.getNextAvailableTicket.id}/edit`);
      }
      
      
    }}>
      {loading ? "Loading" : "Get Next Available Ticket"}
    </CustomButton>
  );
};
