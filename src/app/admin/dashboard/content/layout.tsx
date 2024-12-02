"use client";
import Button from "@/components/buttons/Button";
import FileDownload from "@/icons/file-download";
import NewsPaper from "@/icons/newspaper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

interface TabItem {
  id: number;
  title: string;
  isActive: boolean;
  pathname: string;
}
const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  const [tabs, setTabs] = useState<Array<TabItem>>([
    {
      id: 1,
      title: "Campaigns",
      isActive: true,
      pathname: "/admin/dashboard/content",
    },
    {
      id: 2,
      title: "Uploads",
      isActive: false,
      pathname: "/admin/dashboard/content/uploads",
    },
  ]);
  const handleTabClick = (selectedId: number) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id == selectedId,
      }))
    );
  };
  const pathName = usePathname();
 
  return (
    <div>
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <NewsPaper color="#383E49" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Content</p>
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
      <div className="border rounded-xl w-full mt-10 px-[36px] h-12">
        <div className="flex overflow-auto px-1  gap-8 lg:gap-6 h-12 items-end">
          {tabs.map((tab, index) => (
            <div className="" key={tab.id}>
              <Link
                href={tab.pathname}
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex text-sm   gap-[7px]  justify-center cursor-pointer items-center pb-3  ${
                  pathName === tab.pathname
                    ? "border-b-2  border-b-primary-400"
                    : " border-b-2 border-b-transparent"
                }`}
              >
                <span
                  className={
                    pathName === tab.pathname
                      ? "text-primary-400"
                      : "text-grey-500"
                  }
                >
                  {tab.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
