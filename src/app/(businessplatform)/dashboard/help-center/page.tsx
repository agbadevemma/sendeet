"use client";
import Button from "@/components/buttons/Button";
import InputField from "@/components/InputField";
import SearchInput from "@/components/SearchInput";
import ArrowRight from "@/icons/arrow-right";
import CalendarAlt from "@/icons/calender-alt";
import Chat from "@/icons/chat";
import ChevronDown from "@/icons/cheveron-down";
import Code from "@/icons/code";
import Coinstack from "@/icons/coinstack";
import Home from "@/icons/home";
import LoudSpeaker from "@/icons/loudspeaker";
import Mail from "@/icons/mail";
import Messages from "@/icons/messages";

import Verified from "@/icons/verified";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const HelpCenter = (props: Props) => {
  return (
    <div>
      <div className="grid  lg:grid-cols-2 gap-6">
        <div className="w-full p-6 border bg-white border-[#E4E7EC] rounded-lg max-h-[240px] h-full ">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-50 border  border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)]">
            <Verified color={"#004768"} />
          </div>
          <p className="text-[#101928] text-base font-medium mt-6">
            WhatsApp API Authentication
          </p>
          <p className="mt-2 text-[#667085] text-xs">
            Learn how to set up and manage WhatsApp API for seamless messaging.
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
            Detailed breakdown of credit pricing for different message types.
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
            Contact our support team if you have any problems and we would get
            back to you .
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
  );
};

export default HelpCenter;
