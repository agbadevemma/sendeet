import React, { Dispatch, SetStateAction } from "react";
import logo from "../images/Logo.png";
import dashlogo from "../images/dashlogo.svg";
import Image from "next/image";
import ChevronSelectorVertical from "@/icons/chevron-selector-vertical";
import Elements from "@/icons/elements";
import LoudSpeaker from "@/icons/loudspeaker";
import UserGroup from "@/icons/user-group";
import Money1 from "@/icons/money-1";
import BarChartv from "@/icons/bar-chart-v";
import Settings from "@/icons/settings";
import Messages from "@/icons/messages";
import IconLink from "./IconLink";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-black/20 z-50 fixed  xl:static  transition-all duration-500  ${
          isOpen ? "visible " : "invisible  xl:visible xl:opacity-100"
        } `}
      >
        <div
          className={`h-screen  overflow-y-auto sidebar  bg-white border-grey-100 border lg:flex flex-col w-[60%] md:w-[40%] lg:w-full  lg:max-w-[272px] transition-all duration-500    ${
            isOpen ? "-translate-x-0" : "-translate-x-full xl:translate-x-0"
          } `}
        >
          <div className="px-[24px] py-3.5">
            <Image src={logo} alt="logo" className="w-32" />
          </div>
          <div className="max-w-[240px] h-px bg-[#F0F1F3] mx-auto w-full"></div>

          <div className="w-full px-4 mt-5">
            <div className="mx-auto rounded-lg gap-4 border-grey-50 bg-[#F9FAFB] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.10)] border border-solid p-3 flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <Image src={dashlogo} alt="logo" />
                <div className="flex flex-col ml-3">
                  <p className="text-xs font-semibold">Testing Company</p>
                  <p className="text-xs font-semibold text-grey-600">
                    Team - 1 Member
                  </p>
                </div>
              </div>
              <ChevronSelectorVertical color="#475367" />
            </div>

            <div className="mt-7">
              <p className="text-gray-400 text-sm font-medium w-full px-1 mt-1">
                MAIN MENU
              </p>
              <div className="mt-3 flex flex-col gap-1">
                <IconLink
                  href="/dashboard"
                  IconComponent={Elements}
                  label="Dashboard"
                />
                <IconLink
                  href="/dashboard/analytics"
                  IconComponent={BarChartv}
                  label="Analytics"
                />
                <IconLink
                  href="/dashboard/campaigns"
                  IconComponent={LoudSpeaker}
                  label="Campaigns"
                />

                <IconLink
                  href="/dashboard/audience"
                  IconComponent={UserGroup}
                  label="Audience"
                />
                <IconLink
                  href="/dashboard/credits"
                  IconComponent={Money1}
                  label="Credits"
                />
              </div>
            </div>

            <div className="border-t pt-7 border-t-grey-50 mt-3">
              <p className="text-grey-400 text-sm mb-3 pl-3 pr-4">SUPPORT</p>
              <div className="flex flex-col gap-1">
                <IconLink
                  href="/dashboard/settings"
                  IconComponent={Settings}
                  label="Settings"
                />
                <IconLink
                  href="/dashboard/help-center"
                  IconComponent={Messages}
                  label="Help Center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
