'use client'
import { CustomButton } from "@/components/button/custom-button";
import { AuthenticationContext } from "@/components/context/authentication-context";
import { use, useContext } from "react";

type NavigationButtonProps = {
  requiresAuthentication?: boolean;
  href: string;
  children: React.ReactNode;
}

export const NavigationButton = ({children, href, requiresAuthentication}: NavigationButtonProps) => {
  const { user } = useContext(AuthenticationContext);
  return <CustomButton href={href} className="w-full md:w-fit">{children}</CustomButton>;
};