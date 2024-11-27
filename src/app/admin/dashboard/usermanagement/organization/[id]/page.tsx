"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import Building5 from "@/icons/building-5";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import UserTick from "@/icons/user-tick";
import { organizations } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../../../../images/illustration3.svg";
import React, { useState } from "react";
import ChevronDown from "@/icons/cheveron-down";
import ChevronLeft from "@/icons/chevron-left";
import CalendarAlt from "@/icons/calender-alt";
import Mail from "@/icons/mail";
import Call from "@/icons/call";
import MapMarker from "@/icons/map-marker";

type Props = {};

const OrganizationId = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div>
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Building5 color="#383E49" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">
              Organization{" "}
              <span className="text-[#D0D5DD] mx-1 text-xl font-normal">/</span>
              <span className="text-primary-600 text-sm font-medium text-[14px]  ml-2">
                BrightMinds Education
              </span>
            </p>
            <p className="text-sm text-grey-500">
              Manage Organization profiles, track activity, and oversee their
              campaigns
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
          <Button
            className=""
            iconComponent={<ChevronDown color="#ffffff" />}
            type="primary"
            text="Organization Actions"
            icon_style="trailing icon"
          />
        </div>
      </div>
      <div className="w-full mt-8 rounded-[12px] p-4 border border-[#E6F7FE]">
        <div className="w-full flex max-w-[810px]">
            <Link href={"/admin/dashboard/usermanagement/audience"}>
              <Button
                iconComponent={<ChevronLeft color="black" />}
                className="!p-2 !w-8 !h-8"
                icon_style="icon-only"
              />
            </Link>
          <div className="w-full   px-4">
            <div className="flex  flex-col gap-2">
              <div className="flex items-center gap-1">
                {" "}
                <p className="text-[20px] font-bold text-[#101928]">
                  BrightMinds Education
                </p>
                <p className="px-4 text-sm bg-[#E0F2FE] rounded-xl text-[#065986] font-medium">
                  Education
                </p>
                <p className="px-4 text-sm bg-success-50 rounded-xl text-success-500 font-medium">
                  Connected
                </p>
              </div>
              <div className="   mt-3 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <CalendarAlt color="#667085" />
                  <span className="text-xs">Joined 22 October, 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserGroup color="#667085" />
                  <span className="text-xs">50-150</span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center  gap-10 w-full">
              <div className="flex items-start flex-col w-full max-w-[345px] ">
                <span className="text-[13.8px] text-grey-800 font-medium ">
                  Contact Information
                </span>
                <div className="py-4 px-6 flex gap-4 flex-col w-full mt-4 bg-[#F9FAFB] rounded-lg ">
                  <div className="flex items-center gap-2 ">
                    <Mail color="#667085" height={20} width={20} />{" "}
                    <span className="text-grey-500 text-[13px]">
                      hello@brightmindsedu.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2  ">
                    <Call color="#667085" height={20} width={20} />{" "}
                    <span className="text-grey-500 text-[13px]">
                      +234 8143 21 9109
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col w-full max-w-[345px] ">
                <span className="text-[13.8px] text-grey-800 font-medium ">
                  Location
                </span>
                <div className="py-4 px-6 flex  w-full bg-[#F9FAFB] mt-4 rounded-lg ">
                  <div className="flex items-start gap-2 ">
                    <MapMarker color="#667085" height={20} width={20} />{" "}
                    <p className="text-grey-500 text-[13px]">
                      Off Ladi Kwali Way before the mango tree at the junction
                      with a yellow gate beside the house{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="w-fulll"></div>
        </div>
      </div>
    </div>
  );
};
export default OrganizationId;
