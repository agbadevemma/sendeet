"use client";
import AdminBarChart from "@/components/admin/AdminBarChart";
import AnalyticsModal from "@/components/AnalyticsModal";
import Button from "@/components/buttons/Button";
import CampaignPerformanceChart from "@/components/CampaignPerformanceChart";
import ArrowUp from "@/icons/arrow-up";
import BarChartv from "@/icons/bar-chart-v";
import Calendar from "@/icons/calendar";
import Elements from "@/icons/elements";
import Engagement from "@/icons/engagement";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import Money1 from "@/icons/money-1";
import Multiply from "@/icons/multiply";
import PencilEdit from "@/icons/pencil-edit";
import TickDouble from "@/icons/tick-double";
import UserTick from "@/icons/user-tick";
import React, { useState } from "react";

type Props = {};

const Analytics = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      {isOpen && <AnalyticsModal setIsOpen={setIsOpen} />}
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <BarChartv color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Analytics</p>
            <p className="text-sm text-grey-500">
              Welcome back, Testing Company
            </p>
          </div>
        </div>

        <div className="flex  gap-3">
          <Button size="sm" icon_style="txt" text="12 Months" />
          <Button
            size="sm"
            iconComponent={<Calendar color="#383E49" />}
            icon_style="leading-icon"
            text="Select dates"
          />
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
        </div>
      </div>
      <div className="w-full mt-4 py-8 px-6 flex flex-col gap-[10px] border borde-[#E4E7EC] rounded-lg">
        <div className="flex gap-4 items-center">
          <p className="text-[16px]  font-medium">Engagement Performance</p>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <PencilEdit color="#00AAF7" height={24} width={24} />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Total Opens</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,943,219
              </span>
              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <Eye height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Opt Ins</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,751,369
              </span>
              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <TickDouble height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Opt Outs</span>
              <span className="text-[#344054] text-xl font-semibold">
                89.9%
              </span>
              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <Multiply height={20} width={20} color="#667085" />
            </div>
          </div>{" "}
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Average Engagement Rate</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,751,369
              </span>
              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <Engagement height={20} width={20} color="#667085" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className=" p-4 lg:p-6  w-full border rounded-xl flex lg:flex-row flex-col gap-10 h-full">
          <div className="w-full">
            <div className="flex  items-start justify-between gap-4">
              <p className="text-md font-medium ">Campaign Performance</p>
              <div className="flex items-center gap-3">
                <span className="text-grey-500 text-sm font-medium">
                  Metric:
                </span>
                <Button
                  size="md"
                  text="Open Rate"
                  className="!px-4 !py-[10px]"
                />
                <Button size="md" text="7 Days" className="!px-4 !py-[10px]" />
              </div>
            </div>

            <div className="flex flex-col item-center  justify-between mt-1 w-full ">
              <span className="text-md text-grey-500">Open Rate</span>
              <div className="flex justify-between lg:justify-normal  items-center lg:gap-4 w-full mt-2 ">
                <span className="text-xl lg:text-[1.4rem] font-medium">
                  78.2%
                </span>
                <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="text-success-700 font-medium">7.2%</span>
                </div>
              </div>
            </div>

            <CampaignPerformanceChart />
          </div>
          <div className="h-96 hidden lg:block bg-[#F0F1F3] w-px mt-6"></div>
          <div className="w-full lg:w-1/2  flex flex-col">
            <p className="font-medium text-md  mt-0">Campaign Summary</p>
            <div className="flex flex-col mt-6 gap-10 justify-between  flex-1">
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Total Campaigns</span>
                <span className="font-medium text-sm">25</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Active Campaigns</span>
                <span className="font-medium text-sm">5</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Failed Campaigns</span>
                <span className="font-medium text-sm">14</span>
              </div>
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">
                  Successful Campaigns
                </span>
                <span className="font-medium text-sm">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
