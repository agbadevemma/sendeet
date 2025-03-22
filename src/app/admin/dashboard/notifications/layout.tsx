"use client";
import React, { useState } from "react";
import AdminDashboard from "../page";
import NotificationModal from "@/components/admin/NotificationModal";
import { useAppSelector } from "@/lib/hooks";
import Bell from "@/icons/bell";
import Button from "@/components/buttons/Button";
import FileDownload from "@/icons/file-download";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TabItem = {
  id: number;
  title: string;
  isActive: boolean;
  href: string;
};
type Props = {};

const Notifications = ({ children }: { children: React.ReactNode }) => {
  const { notificationModal } = useAppSelector((state) => state.miscellaneous);

  return (
    <div>
      {/* <NotificationModal /> */}
      
        <div className=" flex flex-col ">
          <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
            <div className="flex items-center gap-4">
              <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
                <Bell color="#383E49" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">Notifications</p>
                <p className="text-sm text-grey-500">
                  Manage end user profiles and subscriptions
                </p>
              </div>
            </div>

            <div className="flex  gap-3">
              <Button
                size="sm"
                iconComponent={<FileDownload color="#383E49" />}
                icon_style="leading-icon"
                text="Export"
              />
            </div>
          </div>

          <div className="flex flex-1  h-full mt-4 w-full bg-white border border-[#E4E7EC] rounded-xl flex-col  ">
            {children}
          </div>
        </div>
    
    </div>
  );
};

export default Notifications;
