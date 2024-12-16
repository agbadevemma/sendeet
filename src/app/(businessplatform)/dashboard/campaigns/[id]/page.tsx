"use client";
import AdminBarChart from "@/components/admin/AdminBarChart";
import Button from "@/components/buttons/Button";
import CampaignPerformanceChart from "@/components/CampaignPerformanceChart";
import ExploreCard from "@/components/onboarding/ExploreCard";
import ArrowUp from "@/icons/arrow-up";
import Bin from "@/icons/bin";
import CalendarAlt from "@/icons/calender-alt";
import CheckboxChecked from "@/icons/checkbox-checked";
import ChevronDown from "@/icons/cheveron-down";
import ChevronLeft from "@/icons/chevron-left";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FileIcon from "@/icons/file-icon";
import HelpCircle from "@/icons/help-circle";
import LoudSpeaker from "@/icons/loudspeaker";
import Message from "@/icons/message";
import Multiply from "@/icons/multiply";
import PencilEdit from "@/icons/pencil-edit";
import Plus from "@/icons/plus";
import ShareAlt from "@/icons/share-alt";
import TickDouble from "@/icons/tick-double";
import UserGroup from "@/icons/user-group";
import { useAppDispatch } from "@/lib/hooks";
import { setExplore, toggleModal } from "@/lib/slices/miscellaneousSlice";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const CampaignId = (props: Props) => {
  const dispatch = useAppDispatch();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] =
    useState<boolean>(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] =
    useState<boolean>(false);
  const firstDropdownRef = useRef<HTMLDivElement | null>(null);
  const secondDropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        firstDropdownRef.current &&
        !firstDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFirstDropdownOpen(false);
      }
      if (
        secondDropdownRef.current &&
        !secondDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSecondDropdownOpen(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <LoudSpeaker color="black" />
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-lg font-semibold flex items-end  gap-3">
              Campaigns <span className="text-xl text-[#D0D5DD]">/</span>{" "}
              <p className="max-w-32 w-full truncate text-nowrap text-sm text-primary-600">
                Tech Requirements About Desktops
              </p>
            </p>
            <p className="text-sm text-grey-800">
              Create and manage campaigns for your business
            </p>
          </div>
        </div>
        <div className=" flex  gap-3 mt-4 lg:mt-0">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />

          <div ref={dropdownRef} className="relative">
            <Button
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              iconComponent={
                <ChevronDown color="#fff" height={15} width={15} />
              }
              icon_style="trailing icon"
              type="primary"
              text="Campaign Actions"
            />
            <div
              className={`w-[176px]  ${
                isOpen ? "block" : "hidden"
              } text-sm px-4 py-[7px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] absolute mt-2 p-[6px] flex flex-col gap-4 bg-white border-[0.9px] rounded-[10px] border-[#F0F1F3]`}
            >
              <div
                className="flex cursor-pointer items-center gap-1 text-xs hover:text-primary-600"
                onMouseEnter={() => setHoveredItem("completed")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CheckboxChecked
                  color={hoveredItem === "completed" ? "#009be1" : "#383E49"}
                  height={16}
                  width={16}
                />
                Mark as Completed
              </div>
              <div
                onMouseEnter={() => setHoveredItem("edit")}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex cursor-pointer items-center gap-1 text-xs hover:text-primary-600"
              >
                <PencilEdit
                  color={hoveredItem === "edit" ? "#009be1" : "#383E49"}
                  height={16}
                  width={16}
                />
                Edit Scheduled Date
              </div>
              <div
                onMouseEnter={() => setHoveredItem("delete")}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex cursor-pointer items-center gap-1 text-xs hover:text-primary-600"
              >
                <Bin
                  color={hoveredItem === "delete" ? "#009be1" : "#383E49"}
                  height={16}
                  width={16}
                />
                Delete Campaign
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 p-4  pb-10 w-full border border-[#E4E7EC] rounded-xl flex-col">
        <div className="flex gap-4 items-center">
          <Link href="/dashboard/campaigns">
            <Button
              icon_style="icon-only"
              iconComponent={
                <ChevronLeft color="#000000" height={16} width={16} />
              }
            />
          </Link>
          <p className="font-bold text-[18px] ">
            Tech Requirements About Desktops
          </p>
          <div className="flex bg-success-50 rounded-xl px-3 py-1 gap-[6px] items-center ">
            <div className="h-2 w-2 bg-success-500 rounded-full "> </div>
            <div className="text-success-500">Completed</div>
          </div>
        </div>
        <div className="px-14 flex mt-8  justify-between items-center">
          <div className="flex flex-col  gap-2 s[0.8px] pr-8 border-[#D0D5DD]">
            <p className="text-md text-[#667085]">Send Date</p>
            <div className="flex gap-2 items-center">
              {" "}
              <CalendarAlt color="#667085" height={20} width={20} />{" "}
              <span className="font-medium text-[#101928] text-[18px] mt-1">
                22 October, 2023
              </span>
            </div>
          </div>
          <hr className="w-[0.8px] h-[56px] bg-[#D0D5DD] " />
          <div className="flex flex-col  gap-2 s[0.8px] pr-8 border-[#D0D5DD]">
            <p className="text-md text-[#667085]">Audience</p>
            <div className="flex gap-2 items-center">
              {" "}
              <UserGroup color="#667085" height={20} width={20} />{" "}
              <span className="font-medium text-[#101928] text-[18px] mt-1">
                1024
              </span>
            </div>
          </div>
          <hr className="w-[0.8px] h-[56px] bg-[#D0D5DD] " />{" "}
          <div className="flex flex-col  gap-2 s[0.8px] pr-8 border-[#D0D5DD]">
            <p className="text-md text-[#667085]">Total Messages</p>
            <div className="flex gap-2 items-center">
              {" "}
              <Message color="#667085" height={20} width={20} />{" "}
              <span className="font-medium text-[#101928] text-[18px] mt-1">
                6
              </span>
            </div>
          </div>
          <hr className="w-[0.8px] h-[56px] bg-[#D0D5DD] " />{" "}
          <div className="flex flex-col  gap-2 s[0.8px] pr-8 border-[#D0D5DD]">
            <p className="text-md text-[#667085]">Files</p>
            <div className="flex gap-2 items-center">
              {" "}
              <FileIcon color="#667085" height={20} width={20} />{" "}
              <span className="font-medium text-[#101928] text-[18px] mt-1">
                9
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-full border border-[#E4E7EC] rounded-lg flex-col mt-4">
        <div className="flex gap-1 items-center">
          <span className="text-[18px] font-medium">Description</span>
          <PencilEdit height={20} width={20} color="#00AAF7" />
        </div>
        <span className="text-[#667085] text-md">
          Add a campaign description to provide more context
        </span>
      </div>
      <div className="mt-4 border border-[#E4E7EC] rounded-lg flex-col">
        <div className=" p-4 lg:p-6  w-full  flex lg:flex-row flex-col gap-8 lg:gap-4  h-full">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="flex items-center gap-1">
                {" "}
                <p className="text-md font-medium ">
                  Campaign Performance
                </p>{" "}
                <HelpCircle color="#98A2B3" height={16} width={16} />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-grey-500 text-sm font-medium">
                  Metric:
                </span>

                {/* First Dropdown */}
                <div className="relative" ref={firstDropdownRef}>
                  <Button
                    onClick={() => setIsFirstDropdownOpen((prev) => !prev)}
                    className="!px-4 !py-[10px] !text-sm"
                    size="md"
                    icon_style="trailing icon"
                    iconComponent={
                      <ChevronDown color="#344054" height={20} width={20} />
                    }
                    text="Open Rate"
                  />
                  {isFirstDropdownOpen && (
                    <div className="w-[132px] mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] right-0 rounded-[10px] p-2 flex flex-col gap-2 z-50">
                      {[
                        "Total Messages",
                        "Delivered",
                        "Total Sends",
                        "Open Rate",
                        "Click Rate",
                        "Delivery Rate",
                      ].map((item) => (
                        <div
                          key={item}
                          className="text-[#383E49] font-normal text-[13px] rounded-lg cursor-pointer whitespace-nowrap px-[10px] py-2 hover:bg-[#F9FAFB]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Second Dropdown */}
                <div ref={secondDropdownRef} className="relative">
                  <Button
                    onClick={() => setIsSecondDropdownOpen((prev) => !prev)}
                    className="!px-4 !py-[10px] !text-sm"
                    size="md"
                    text="7 Days"
                  />
                  {isSecondDropdownOpen && (
                    <div className="w-32 mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] rounded-[10px] p-2 flex flex-col gap-2 z-50">
                      {["7 Days", "30 Days", "6 Months", "12 Months"].map(
                        (item) => (
                          <div
                            key={item}
                            className="text-[#383E49] font-normal text-[13px]  rounded-lg cursor-pointer px-[10px] py-2 hover:bg-[#F9FAFB]"
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
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
          <div className="h-96  hidden lg:block bg-[#F0F1F3] w-px "></div>
          <div className="w-full lg:w-[40%]  flex flex-col">
            <p className="font-medium text-md  mt-0">Campaign Summary</p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  {" "}
                  <TickDouble color="#667085" height={20} width={20} />{" "}
                  <span className="text-grey-400 text-sm">Delivered</span>
                </div>
                <span className="font-medium text-sm">987</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  {" "}
                  <Eye color="#667085" height={20} width={20} />{" "}
                  <span className="text-grey-400 text-sm">Opened</span>
                </div>
                <span className="font-medium text-sm">823</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  {" "}
                  <ShareAlt color="#667085" height={20} width={20} />{" "}
                  <span className="text-grey-400 text-sm">Forwarded</span>
                </div>
                <span className="font-medium text-sm">6</span>
              </div>
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  {" "}
                  <Multiply color="#667085" height={20} width={20} />{" "}
                  <span className="text-grey-400 text-sm">Opted Out</span>
                </div>
                <span className="font-medium text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full gap-2 flex ">
        <div className="mt-4 border border-[#E4E7EC] w-full rounded-lg flex-col p-6">
          <div className="w-full">
            <div className="flex gap-24 items-center ">
              <div className="flex items-center gap-2">
                {" "}
                <p className="text-[16px] font-medium w-full">
                  Engagement Details
                </p>
                <HelpCircle color="#98A2B3" />
              </div>
              <Button size="md" text="12 Months" className="!px-4 !py-[10px]" />
            </div>

            <div className="flex item-center  justify-between mt-1 w-full ">
              <div className="flex justify-between lg:justify-normal  items-center lg:gap-4 w-full mt-2 ">
                <span className="text-xl lg:text-3xl font-medium">987</span>
                <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="text-success-700 font-medium">7.2%</span>
                </div>
              </div>
            </div>
            <div className="flex  w-full justify-end  items-center gap-[13px] mt-2 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-100 rounded-full"></span>
                <span className="text-gray-500 text-[13px]">Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-800 rounded-full"></span>
                <span className="text-gray-500 text-[13px]">Opened</span>
              </div>
            </div>
            <AdminBarChart />
          </div>
        </div>
        <div className="mt-4 border border-[#E4E7EC] w-full rounded-lg flex-col p-6"></div>
      </div>
    </div>
  );
};

export default CampaignId;
