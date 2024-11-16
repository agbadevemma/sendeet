"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { boolean } from "yup";
import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
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
        <div className="h-screen overflow-auto w-full px-4 md:px-8 lg:px-7 pt-6 pb-20">
          <div className=" w-full"> {children}</div>
        </div>
      </div>
    </div>
  );
}
