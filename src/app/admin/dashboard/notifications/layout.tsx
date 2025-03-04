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
  const handleTabClick = (selectedId: number) => {
    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: tab.id == selectedId }))
    );
  };
  const pathName = usePathname();
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Overview", isActive: true, href: "/admin/dashboard/notifications" },
    {
      id: 2,
      title: "History",
      isActive: false,
      href: "/admin/dashboard/notifications/history",
    },
    {
      id: 3,
      title: "Settings",
      isActive: false,
      href: "/admin/dashboard/notifications/settings",
    },
  ]);
  return (
    <div>
      <NotificationModal />
      {notificationModal ? (
        <AdminDashboard />
      ) : (
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

          <div className="w-full flex gap-3">
            <div className="flex  mt-[25px] w-full bg-white border border-[#E4E7EC] rounded-xl flex-col">
              <div className="flex overflow-auto px-1 lg:px-11 gap-8 lg:gap-12  h-[62px] items-end">
                {tabs.map((tab, index) => (
                  <Link
                    href={tab.href}
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex  gap-[7px]  justify-center cursor-pointer items-center pb-4  ${
                      tab.href === pathName
                        ? "border-b-2  border-b-primary-400"
                        : "border-b-2 border-b-transparent"
                    }`}
                  >
                    <span
                      className={`
                  text-sm 
                    ${
                      tab.href === pathName
                        ? "text-primary-400"
                        : "text-grey-800"
                    }`}
                    >
                      {tab.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1  h-full mt-4 w-full bg-white border border-[#E4E7EC] rounded-xl flex-col  ">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
