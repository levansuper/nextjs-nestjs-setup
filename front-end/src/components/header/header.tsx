'use client'
import React, { useContext } from "react";
import { LoginButton } from "@/components/button/login-button";
import { NavigationButton } from "@/components/button/navigation-button";
import { NextAvailableTicketButton } from "@/components/button/next-available-ticket-button";
import { AuthenticationContext } from "@/components/context/authentication-context";

export const Header = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <div className="bg-slate-200 border border-gray-500 rounded-md p-2 flex justify-center items-center gap-2	flex-col md:flex-row">
      <div className="flex justify-start items-center gap-2 flex-1 flex-col md:flex-row">
        <NavigationButton href="/">Home</NavigationButton>
        {user ? (
          <>
            <NavigationButton href="/dashboard" requiresAuthentication>
              Dashboard
            </NavigationButton>
            <NavigationButton href="/dashboard/tickets" requiresAuthentication>
              All Tickets
            </NavigationButton>
            <NavigationButton
              href="/dashboard/tickets/locked-by-me"
              requiresAuthentication
            >
              Locked By Me
            </NavigationButton>
            <NavigationButton
              href="/dashboard/tickets/open"
              requiresAuthentication
            >
              Open
            </NavigationButton>
            <NavigationButton
              href="/dashboard/tickets/locked"
              requiresAuthentication
            >
              Locked
            </NavigationButton>
            <NavigationButton
              href="/dashboard/tickets/done"
              requiresAuthentication
            >
              Done
            </NavigationButton>
            <NextAvailableTicketButton />
          </>
        ) : null}
      </div>
      <LoginButton />
    </div>
  );
};
