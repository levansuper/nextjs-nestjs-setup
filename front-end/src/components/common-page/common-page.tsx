import React from "react";
import Link from "next/link";

type CommonPageProps = {
  children: React.ReactNode;
};

export const CommonPage = ({ children }: CommonPageProps) => {
  return (
    <div className="bg-slate-200 flex-1 border border-gray-500 rounded-md	h-10 ">
      {children}
    </div>
  );
};
