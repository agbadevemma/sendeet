"use client";
import logo from "../../../images/Logo.png";
import bg from "../../../images/signup/bg.png";
import Image from "next/image";
import arrowactive from "../../../images/icons/chevron-right-active.svg";
import arrowinactive from "../../../images/icons/chevron-right-inactive.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { boolean } from "yup";
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
        <div className="h-screen overflow-auto w-full px-4 md:px-8 lg:px-7 pt-6 pb-20">
          <div className=" w-full"> {children}</div>
        </div>
      </div>
    </div>
  );
}
