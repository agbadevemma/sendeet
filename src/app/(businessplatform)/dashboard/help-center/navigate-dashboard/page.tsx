import Link from "next/link";
import React from "react";
import home from "../../../../../images/helpcenter/home.svg";
import analytics from "../../../../../images/helpcenter/analytics.svg";
import Image from "next/image";

type Props = {};

const NavigateDashboard = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <div className="text-lg font-semibold flex items-end  gap-3">
          <Link href={"/dashboard/campaigns"}> Getting Started</Link>{" "}
          <span className="text-2xl text-[#D0D5DD]">/</span>{" "}
          <p className="max-w-20 w-full truncate text-nowrap text-sm text-primary-600">
            Navigating the Dashboard
          </p>
        </div>
        <div className="text-[#667085]  text-sm mt-2">
          Navigating the Dashboard
        </div>
      </div>
      <div className="flex gap-2">
        {" "}
        <div className="flex mt-10 flex-col">
          <p className="text-xl font-medium">Overview</p>
          <p className="text-sm text-grey-500">
            The dashboard is your central hub for managing all activities on
            Sendeet. Here's a guide to help you understand the layout and
            quickly access essential features.
          </p>

          <div className="mt-8">
            <h2 className="text-[18px]  font-medium">
              1. Dashboard Overview (Home)
            </h2>
            <p className="text-sm text-grey-500">
              The dashboard is your central hub for managing all activities on
              Sendeet. Here's a guide to help you understand the layout and
              quickly access essential features.
            </p>
            <Image src={home} alt="home"  className="mt-5"/>
          </div>
          <div className="mt-10">
            <h2 className="text-[18px]  font-medium">2. Analytics</h2>
            <p className="text-sm text-grey-500">
              The dashboard is your central hub for managing all activities on
              Sendeet. Here's a guide to help you understand the layout and
              quickly access essential features.
            </p>
            <Image src={analytics} alt="home" className="mt-5" />
          </div>
        </div>
        <div className="max-w-[250px] w-full  mt-10 ">
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-[#E6F7FE] text-[#00AAF7]">
                1
              </div>
              <div className="h-[25px] w-[1px] bg-[#F0F1F3] mt-1 mb-1 "></div>
            </div>

            <p className="text-xs text-grey-500">Dashboard Overview (Home)</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                2
              </div>
              <div className="h-[25px] w-[1px] bg-[#F0F1F3] mt-1 mb-1 "></div>
            </div>

            <p className="text-xs text-grey-500">Analytics</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                3
              </div>
              <div className="h-[25px] w-[1px] bg-[#F0F1F3] mt-1 mb-1 "></div>
            </div>

            <p className="text-xs text-grey-500">Campaigns</p>
          </div>

          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                4
              </div>
              <div className="h-[25px] w-[1px] bg-[#F0F1F3] mt-1 mb-1 "></div>
            </div>

            <p className="text-xs text-grey-500">Audience</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                5
              </div>
            </div>

            <p className="text-xs text-grey-500">Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateDashboard;
