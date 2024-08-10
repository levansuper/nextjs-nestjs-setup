'use client'
import { CustomButton } from "@/components/button/custom-button";
import { AuthenticationContext } from "@/components/context/authentication-context";
import { useContext } from "react";

export const LoginButton = () => {
  const { isLoading, user } = useContext(AuthenticationContext);
  const className = "bg-cyan-900";
  
  if (isLoading) {
    return <CustomButton useA className={className}>Loading...</CustomButton>;
  }

  if (user) {
    return <CustomButton useA className={className} href="/api/auth/logout">Logout</CustomButton>;
  }
  return <CustomButton useA className={className} href="/api/auth/login">Login</CustomButton>;
};