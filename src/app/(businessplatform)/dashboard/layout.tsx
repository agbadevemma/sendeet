"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { useState } from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen overflow-hidden w-full bg-[#FCFCFD]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <Header setIsOpen={setIsOpen} />
        <div
          className={`h-screen overflow-auto w-full px-4 md:px-8 lg:px-7 pt-6 ${
            pathname == "/dashboard/help-center" ? "pb-0" : "pb-20"
          }`}
        >
          <div className=" w-full"> {children}</div>
        </div>
      </div>
    </div>
  );
}
