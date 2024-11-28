"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Building5 from "@/icons/building-5";
import Check from "@/icons/check";
import Coinstack from "@/icons/coinstack";
import FileDownload from "@/icons/file-download";
import LoudSpeaker from "@/icons/loudspeaker";
import Messages from "@/icons/messages";
import Multiply from "@/icons/multiply";
import NewsPaper from "@/icons/newspaper";
import React, { useState } from "react";

type Props = {};

interface TabItem {
  id: number;
  title: string;
  isActive: boolean;
}
const Content = (props: Props) => {
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Campaigns", isActive: true },
    { id: 2, title: "Uploads", isActive: false },
  ]);
  const handleTabClick = (selectedId: number) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id == selectedId,
      }))
    );
  };
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
        <div className="flex overflow-auto px-1 ] gap-2 lg:gap-6 h-12 items-end">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex text-sm w-[84px]  gap-[7px]  justify-center cursor-pointer items-center pb-3  ${
                tab.isActive
                  ? "border-b-2  border-b-primary-400"
                  : " border-b-2 border-b-transparent"
              }`}
            >
              <span
                className={tab.isActive ? "text-primary-400" : "text-grey-500"}
              >
                {tab.title}
                {tab.title === "Draft" && "s"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mt-10">
        {/* Insight Cards */}
        <Card
          title="Total Campaigns"
          value="349"
          className="py-6"
          mainIcon={<LoudSpeaker height={20} width={20} color="#667085" />}
        />

        <Card
          title="Active Campaigns"
          value="23,853"
          className="py-6"
          mainIcon={<Messages height={20} width={20} color="#667085" />}
        />

        <Card
          title="Successful Campaigns"
          value="1,234"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Check height={20} width={20} color="#667085" />}
        />

        <Card
          title="Failed Campaigns"
          value="21"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Multiply height={20} width={20} color="#667085" />}
        />
      </div>
    </div>
  );
};

export default Content;
