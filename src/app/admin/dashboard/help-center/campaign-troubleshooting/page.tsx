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
          <Link href={"/dashboard/campaigns"}> Campaign Troubleshooting</Link>{" "}
          <span className="text-2xl text-[#D0D5DD]">/</span>{" "}
          <p className="max-w-20 w-full truncate text-nowrap text-sm text-primary-600">
            Steps to identify and fix common delivery issues.
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
            <h2 className="text-[16px]  font-medium">
              1. Check the campaign’s status in the Campaign tab.
            </h2>
            <p className="text-sm text-grey-500 mt-2">
              The dashboard is your central hub for managing all activities on
              Sendeet. Here's a guide to help you understand the layout and
              quickly access essential features.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-[16px]  font-medium">
              2.Ensure recipient contact numbers follow WhatsApp guidelines.
            </h2>
            <p className="text-sm text-grey-500 mt-2">
              The dashboard is your central hub for managing all activities on
              Sendeet. Here's a guide to help you understand the layout and
              quickly access essential features.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-[16px]  font-medium">
              3.Verify sufficient credits are available.
            </h2>
            <p className="text-sm text-grey-500 mt-2">
              The dashboard is your central hub for managing all activities on
              Sendeet. Here's a guide to help you understand the layout and
              quickly access essential features.
            </p>
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

            <p className="text-xs text-grey-500">Campaign Status</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                2
              </div>
              <div className="h-[25px] w-[1px] bg-[#F0F1F3] mt-1 mb-1 "></div>
            </div>

            <p className="text-xs text-grey-500">WhatsApp Guidelines</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex items-center justify-center">
              <div className=" rounded-full flex items-center text-xs justify-center h-6 w-6 bg-grey-50 text-grey-300">
                3
              </div>
              
            </div>

            <p className="text-xs text-grey-500">Credits Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateDashboard;
