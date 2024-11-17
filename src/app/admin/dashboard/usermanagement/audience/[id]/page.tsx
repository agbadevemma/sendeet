"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import SelectField from "@/components/SelectField";

import pngfile from "../../../../../../images/filetypes/png.svg";
import FileDownload from "@/icons/file-download";
import ChevronLeft from "@/icons/chevron-left";
import Building5 from "@/icons/building-5";
import CalendarAlt from "@/icons/calender-alt";
import Call from "@/icons/call";
import SendAlt from "@/icons/send-alt";
import UserGroup from "@/icons/user-group";

interface Option {
  value: string;
  label: string;
}

const AudienceId = ({ params }: { params: { id: string } }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState("Active");
  const [subscriptionStatus, setSubscriptionStatus] = useState("opted-in");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"activity" | "insights">(
    "activity"
  );

  const options: Option[] = [
    { value: "opted-in", label: "Opted In" },
    { value: "opted-out", label: "Opted Out" },
  ];

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleTabSwitch = (tab: "activity" | "insights") => setActiveTab(tab);

  const activities = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col mb-32 lg:pb-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center">
        <div className="flex items-center gap-4">
          <div className="p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <UserGroup color="#383E49" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">
              Audience <span className="text-[#D0D5DD] mx-2">/</span>
              <span className="text-primary-600 text-xs">Eve Thompson</span>
            </p>
            <p className="text-sm text-grey-500">
              Manage end user profiles and subscriptions
            </p>
          </div>
        </div>
        <Button
          size="sm"
          iconComponent={<FileDownload color="#383E49" />}
          icon_style="leading-icon"
          text="Export"
        />
      </div>

      <div className="w-full flex-1 flex flex-col lg:flex-row mt-4 gap-4">
        {/* Profile Info */}
        <div className="w-full lg:w-[40%] border border-[#E4E7EC] rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Button
              iconComponent={<ChevronLeft color="black" />}
              className="!p-2"
              icon_style="icon-only"
            />
            <p className="text-[18px] font-bold text-[#101928]">Eve Thompson</p>
            <div
              className={`p-1 px-2 rounded-2xl text-sm font-medium ${
                isChecked
                  ? "bg-[#F2F4F7] text-grey-700"
                  : "bg-success-50 text-success-700"
              }`}
            >
              Opted In
            </div>
          </div>
          <div className="px-10 mt-10">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CalendarAlt color="#667085" />
                <span>Opted in 22 October, 2023</span>
              </div>
              <div className="flex gap-2">
                <Building5 color="#667085" />
                <span>FutureFit Gym</span>
              </div>
            </div>
            <div className="mt-10">
              <label className="!text-grey-800 !font-medium !text-[13px]">
                Contact Information
              </label>
              <div className="max-w-[281px] mt-[11px] px-6 py-4 bg-[#F9FAFB] flex items-center rounded-md">
                <Call color="#667085" />
                <span className="text-[#667085] text-sm">+234 8143 21 9109</span>
              </div>
            </div>
            <div className="mt-10">
              <SelectField
                label="Update Subscription Status"
                labelClassName="!text-grey-800 !font-medium !text-[13px]"
                isOpen={isDropdownOpen}
                onToggle={handleDropdownToggle}
                options={options}
                onSelect={(value) => setSubscriptionStatus(value)}
                value={subscriptionStatus}
                className="!max-w-[281px]"
                name="opt-in-status"
              />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex-1 h-full border border-[#E4E7EC] rounded-xl">
          <div className="flex px-6 mt-4 border-b">
            {["activity", "insights"].map((tab) => (
              <div
                key={tab}
                className={`pb-4 w-[74px] text-center cursor-pointer text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-b-primary-400 text-primary-400"
                    : "text-grey-500"
                }`}
                onClick={() => handleTabSwitch(tab as "activity" | "insights")}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>
          <div className="px-10 mt-8 gap-2 flex flex-col overflow-y-auto h-[32rem]">
            {activeTab === "activity" ? (
              activities.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-5 w-5 p-4 rounded-lg flex items-center justify-center border ${
                        status === "Active"
                          ? "bg-primary-50 border-[#00AAF780]/[0.5]"
                          : "bg-success-50 border-success-500"
                      }`}
                    >
                      <SendAlt color={status === "Active" ? "black" : "#0F973D"} />
                    </div>
                    {index < activities.length - 1 && (
                      <div className="h-24 w-px bg-grey-50"></div>
                    )}
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="text-grey-700 text-sm">12 October, 2024</p>
                      <span className="text-xs text-grey-500">Just now</span>
                    </div>
                    <p className="mt-2 text-grey-500 text-sm">
                      Opened
                      <span className="font-medium mx-2 text-grey-900">
                        Promo Summer Class
                      </span>
                      message
                    </p>
                    <div className="mt-3 flex gap-3 items-start">
                      <Image src={pngfile} alt="file type" />
                      <div>
                        <p className="font-medium text-sm text-grey-700">
                          Summer School.png
                        </p>
                        <p className="text-xs text-grey-500">720 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid lg:grid-cols-2 gap-4 pb-10">
                {/* Insight Cards */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceId;
