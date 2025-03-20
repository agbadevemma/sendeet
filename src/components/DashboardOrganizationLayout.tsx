"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";
// import WithAuth from "@/hoc/organizationWithAuth";
import organizationWithAuth from "@/hoc/organizationWithAuth";
const DashboardOrganizationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen overflow-hidden w-full bg-[#FCFCFD]s ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <Header setIsOpen={setIsOpen} />
        <div
          className={`h-screen overflow-auto w-full px-4 md:px-8  lg:px-0 xl:px-7 pt-6 ${
            pathname == "/dashboard/help-center" ? "pb-4" : "pb-20"
          }`}
        >
          <div className=" w-full px-4 md:px-2 lg:px-4"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default organizationWithAuth(DashboardOrganizationLayout);
