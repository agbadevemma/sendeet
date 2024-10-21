import React from "react";
import logo from "../images/Logo.png";
import Image from "next/image";
import dashlogo from "../images/dashlogo.svg";
import ChevronSelectorVertical from "@/icons/chevron-selector-vertical";
import Elements from "@/icons/elements";
import LoudSpeaker from "@/icons/loudspeaker";
import UserGroup from "@/icons/user-group";
import Money1 from "@/icons/money-1";
import BarChartv from "@/icons/bar-chart-v";
import Settings from "@/icons/settings";
import Messages from "@/icons/messages";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <div className="h-screen pb-20 hover:overflow-y-auto sidebar bg-white border-grey-100 border lg:flex flex-col w-[272px] hidden ">
        <div className="px-[24px] py-3.5">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        <div className="max-w-[240px]  h-px bg-[#F0F1F3] mx-auto  w-full"></div>
        <div className="w-full px-4 mt-5">
          <div className=" mx-auto rounded-lg  border-grey-50 bg-[#F9FAFB]  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.10)] border border-solid p-3 flex items-center justify-between cursor-pointer ">
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
              <Link
                href={"/dashboard"}
                className={`w-full ${
                  pathName == "/dashboard"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard" ? (
                  <Elements color="#00AAF7" />
                ) : (
                  <Elements color="#858D9D" />
                )}
                <span className=" text-sm">Dashboard</span>
              </Link>
              <Link
                href={"/dashboard"}
                className={`w-full ${
                  pathName == "/dashboard/campaigns"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/campaigns" ? (
                  <LoudSpeaker color="#00AAF7" />
                ) : (
                  <LoudSpeaker color="#858D9D" />
                )}
                <span className=" text-sm">Campaigns</span>
              </Link>
              <Link
                href={"/dashboard/audience"}
                className={`w-full ${
                  pathName == "/dashboard/audience"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/audience" ? (
                  <UserGroup color="#00AAF7" />
                ) : (
                  <UserGroup color="#858D9D" />
                )}

                <span className=" text-sm">Audience</span>
              </Link>
              <Link
                href={"/dashboard/credits"}
                className={`w-full ${
                  pathName == "/dashboard/credits"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/credits" ? (
                  <Money1 color="#00AAF7" />
                ) : (
                  <Money1 color="#858D9D" />
                )}
                <span className=" text-sm">Credits</span>
              </Link>
              <Link
               href={"/dashboard/analytics"}
                className={`w-full ${
                  pathName == "/dashboard/analytics"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/analytics" ? (
                  <BarChartv color="#00AAF7" />
                ) : (
                  <BarChartv color="#858D9D" />
                )}
                <span className=" text-sm">Analytics</span>
              </Link>
            </div>
          </div>

          <div className="border-t pt-7  border-t-grey-50 mt-3">
            <p className="text-grey-400 text-sm mb-3 pl-3 pr-4">SUPPORT</p>
            <div className="flex flex-col gap-1">
              {" "}
              <div
                className={`w-full ${
                  pathName == "/dashboard/settings"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/settings" ? (
                  <Settings color="#00AAF7" />
                ) : (
                  <Settings color="#858D9D" />
                )}

                <span className=" text-sm">Settings</span>
              </div>{" "}
              <div
                className={`w-full ${
                  pathName == "/dashboard/analytics"
                    ? "border border-solid border-primary-600 text-primary-600  bg-blue-50"
                    : "hover:bg-grey-50  text-gray-500"
                } cursor-pointer rounded-lg gap-3 py-3   px-4 flex items-center `}
              >
                {pathName == "/dashboard/analytics" ? (
                  <Messages color="#00AAF7" />
                ) : (
                  <Messages color="#858D9D" />
                )}

                <span className=" text-sm">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
