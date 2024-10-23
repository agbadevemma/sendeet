import DotV from "@/icons/dot-v";
import SendAlt from "@/icons/send-alt";
import React from "react";

type Props = {};

const Campaign = (props: Props) => {
  return (
    <div>
      <div className="py-6 pl-12 pr-6 w-full flex flex-col rounded-xl border-solid border border-[#E4E7EC]">
        <div className="flex  items-center justify-between">
          <div className="flex gap-5 pr-6">
            <div className="rounded-lg h-[40px] w-[40px]  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)] flex items-center justify-center border border-solid  border-[#00E9C4] bg-[#00D4B2]">
              <SendAlt color="#fff" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">
                Latest Church Newsletter Issue 32
              </p>
              <p className="text-[#667085] text-sm">
                Here’s an exclusive copy of the latest issue
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[5px]">
            <div className="flex items-center gap-[13px]">
              {" "}
              <div className="pl-2 py-[2px] gap-[6px] bg- pr-[10px] flex items-center rounded-2xl bg-[#F2F4F7]">
                <div className="w-2 h-2 rounded-full bg-[#667085]"></div>{" "}
                <p className="text-[#344054] text-sm font-medium">Draft</p>
              </div>
              <div className="h-8 w-8 p-2 flex items-center rounded-lg border border-[#E4E7EC] ">
                <DotV color="#101928" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm ">
              <span className="text-sm font-normal text-[#98A2B3]">
                Created 12th June, 2023
              </span>
              <div className="w-1 h-1 rounded-full bg-[#98A2B3]"></div>{" "}
              <span className="text-sm  font-normal text-[#98A2B3]">
                Last edited 19 minutes ago
              </span>
            </div>
          </div>
        </div>
        <div className="px-8  mt-5 mb-[21px]">
          <div className="w-full bg-[#F0F1F3]  h-[0.8px] mx-auto"></div>
        </div>
        <div className="mx-auto flex w-full gap-x-[92px] max-w-[823px] ">
          <div className="flex flex-col items-center gap-y-[9px]">
            <span className="text-md font-medium">1,287</span>
            <span className="text-grey-600 text-sm font-medium">Delivered</span>
          </div>
          <div className="bg- h-6 w-[0.8px] bg-[#D0D5DD]"></div>
          <div className="flex flex-col items-center gap-[9px]">
            <span className="text-md font-medium">1,109</span>
            <span className="text-grey-600 text-sm font-medium ">Opened</span>
          </div>
          <div className="bg- h-6 w-[0.8px] bg-[#D0D5DD]"></div>
          <div className="flex flex-col items-center gap-[9px]">
            <span className="text-md font-medium">568</span>
            <span className="text-grey-600 text-sm font-medium ">Clicked</span>
          </div>
          <div className="bg- h-6 w-[0.8px] bg-[#D0D5DD]"></div>
          <div className="flex flex-col items-center gap-[9px]">
            <span className="text-md font-medium">2.6%</span>
            <span className="text-grey-600 text-sm font-medium ">
              Converted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
