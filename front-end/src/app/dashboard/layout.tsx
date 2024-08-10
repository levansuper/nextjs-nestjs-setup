"use client";
import { CustomButton } from "@/components/button/custom-button";
import { AuthenticationContext } from "@/components/context/authentication-context";
import { useContext } from "react";
import { redirect } from 'next/navigation'
import { CommonPage } from "@/components/common-page/common-page";

function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading, user } = useContext(AuthenticationContext);
  if (isLoading) {
    return (
      <CommonPage>
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      </CommonPage>
    );
  }
  if(!user){
    return redirect("/")
  }

  return <>{ children }</>
}

export default Layout;
