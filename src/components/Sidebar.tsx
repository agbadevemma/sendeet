import React from "react";
import logo from "../images/Logo.png";
import Image from "next/image";
import dashlogo from "../images/dashlogo.svg";
import ChevronSelectorVertical from "@/icons/chevron-selector-vertical";
import Elements from "@/icons/elements";
import LoudSpeaker from "@/icons/loudspeaker";
import UserGroup from "@/icons/user-group";
import Money1 from "@/icons/money-1";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="h-screen bg-white border-grey-100 border lg:flex flex-col w-[272px] hidden ">
        <div className="px-[24px] py-3.5">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        <div className="max-w-[240px]  h-px bg-[#F0F1F3] mx-auto  w-full"></div>
        <div className="w-full px-4 mt-5">
          <div className=" mx-auto rounded-lg  border-grey-50 bg-[#F9FAFB]  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.10)] border border-solid p-3 flex items-center justify-between">
            {" "}
            <div className="flex items-center">
              <Image src={dashlogo} alt="logo" />
              <div className="flex flex-col ml-3">
                <p className="text-xs font-semibold">Testing Company</p>
                <p className="text-xs font-semibold text-grey-600">
                  Team - 1 Member
                </p>
              </div>
            </div>
            <div className="justify-self-end ml-4">
              <ChevronSelectorVertical color="#475367" />
            </div>
          </div>
          <div className="mt-7">
            <p className="text-gray-400 text-sm font-medium w-full px-1 mt-1">
              MAIN MENU
            </p>
            <div className="mt-3 flex flex-col gap gap-1">
              <div className="w-full cursor-pointer rounded-lg gap-3 py-3  hover:bg-grey-50 px-4 flex items-center">
                <Elements color="#858D9D" />{" "}
                <span className="text-gray-500 text-sm">Dashboard</span>
              </div>
              <div className="w-full cursor-pointer rounded-lg gap-3 py-3  hover:bg-grey-50 px-4 flex items-center">
                <LoudSpeaker color="#858D9D" />{" "}
                <span className="text-gray-500 text-sm">Campaigns</span>
              </div>{" "}
              <div className="w-full cursor-pointer rounded-lg gap-3 py-3  hover:bg-grey-50 px-4 flex items-center">
                <UserGroup color="#858D9D" />{" "}
                <span className="text-gray-500 text-sm">Audience</span>
              </div>
              <div className="w-full cursor-pointer rounded-lg gap-3 py-3  hover:bg-grey-50 px-4 flex items-center">
                <Money1 color="#858D9D" />{" "}
                <span className="text-gray-500 text-sm">Audience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
