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
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen overflow-hidden w-full">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <Header />
        <div className="px-7 w-full mt-6"> {children}</div>
      </div>
    </div>
  );
}
