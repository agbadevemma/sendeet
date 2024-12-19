import InputField from "@/components/InputField";
import SearchInput from "@/components/SearchInput";
import ArrowRight from "@/icons/arrow-right";
import CalendarAlt from "@/icons/calender-alt";
import Chat from "@/icons/chat";
import Coinstack from "@/icons/coinstack";
import Messages from "@/icons/messages";
import SearchIcon from "@/icons/search-icon";
import UserGroup from "@/icons/user-group";
import Verified from "@/icons/verified";
import Link from "next/link";
import React from "react";

type Props = {};

const HelpCenter = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col  gap-4 min-h-screen">
        <div className="flex items-center gap-4">
          <div className=" flex items-center bg-white justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Messages color="#383E49" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Help Center</p>
            <p className="text-sm text-grey-500">
              Find answers, tutorials, and resources to make the most of
              Sendeet.
            </p>
          </div>
        </div>{" "}
        <div className="w-full flex items-stretch gap-8 mt-10 h-screen">
          <div className="w-full max-w-[281px]">
            <SearchInput
              icon={<SearchIcon color="#858D9D" />}
              placeholder="Search for FAQs or guides"
              className="!shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] !bg-white"
            />
          </div>
          <div className="w-full border border-[#E4E7EC] bg-white rounded-[12px] p-6 flex flex-col  flex-1">
            <div className="grid  lg:grid-cols-2 gap-6">
              <div className="w-full p-6 border bg-white border-[#E4E7EC] rounded-lg max-h-[240px] h-full ">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-50 border  border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)]">
                  <Verified color={"#004768"} />
                </div>
                <p className="text-[#101928] text-base font-medium mt-6">
                  WhatsApp API Authentication
                </p>
                <p className="mt-2 text-[#667085] text-xs">
                  Learn how to set up and manage WhatsApp API for seamless
                  messaging.
                </p>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-[#00AAF7] mt-2"
                >
                  <p className="text-[15.3px]">Learn more</p>
                  <ArrowRight color="#00AAF7" />
                </Link>
              </div>
              <div className="w-full p-6 bg-white border border-[#E4E7EC] rounded-lg max-h-[240px] h-full ">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-50 border  border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)]">
                  <CalendarAlt color={"#004768"} />
                </div>
                <p className="text-[#101928] text-base font-medium mt-6">
                  Scheduling and Editing Campaigns
                </p>
                <p className="mt-2 text-[#667085] text-xs">
                  Step-by-step guidance on creating, scheduling, and modifying
                  campaigns.
                </p>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-[#00AAF7] mt-2"
                >
                  <p className="text-[15.3px]">Learn more</p>
                  <ArrowRight color="#00AAF7" />
                </Link>
              </div>
          
          
              <div className="w-full p-6 border bg-white border-[#E4E7EC] rounded-lg max-h-[240px] h-full ">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-50 border  border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)]">
                  <Coinstack color={"#004768"} />
                </div>
                <p className="text-[#101928] text-base font-medium mt-6">
                  Understanding Credit Costs
                </p>
                <p className="mt-2 text-[#667085] text-xs">
                  Detailed breakdown of credit pricing for different message
                  types.
                </p>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-[#00AAF7] mt-2"
                >
                  <p className="text-[15.3px]">Learn more</p>
                  <ArrowRight color="#00AAF7" />
                </Link>
              </div>{" "}
              <div className="w-full p-6 bg-white border border-[#E4E7EC] rounded-lg max-h-[240px] h-full ">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-50 border  border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)]">
                  <Chat color={"#004768"} />
                </div>
                <p className="text-[#101928] text-base font-medium mt-6">
                  Resolving Message Delivery Issues
                </p>
                <p className="mt-2 text-[#667085] text-xs">
                  Contact our support team if you have any problems and we would
                  get back to you .
                </p>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-[#00AAF7] mt-2"
                >
                  <p className="text-[15.3px]">Learn more</p>
                  <ArrowRight color="#00AAF7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
