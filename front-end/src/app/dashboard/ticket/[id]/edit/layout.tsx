"use client";

import { CommonPage } from "@/components/common-page/common-page";

function Layout({ children }: { children: React.ReactNode }) {
  return <CommonPage>{children}</CommonPage>;
}

export default Layout;
