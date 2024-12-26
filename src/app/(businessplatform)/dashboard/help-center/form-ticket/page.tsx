import Button from "@/components/buttons/Button";
import InputField from "@/components/InputField";
import Messages from "@/icons/messages";
import Link from "next/link";
import React from "react";

type Props = {};

const FromTicket = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="w-full">
        <div className="text-lg font-semibold flex items-end  gap-3">
          <Link href={"/dashboard/campaigns"}> Home</Link>{" "}
          <span className="text-2xl text-[#D0D5DD]">/</span>{" "}
          <p className="max-w-20 w-full truncate text-nowrap text-sm text-primary-600">
            Submit a Ticket
          </p>
        </div>
        <span className="mt-2 text-[#667085] text-xs">
          Submit a detailed inquiry, and we’ll follow up with you.
        </span>
      </div>
      <form action="" className="max-w-[512px] w-full mx-auto mt-10  gap-4 flex flex-col">
        <InputField placeholder="Your name" inputType="txt" label="Name" />
        <InputField placeholder="you@company.com" inputType="txt" label="Email" />
        <InputField placeholder="+1 (555) 000-0000" inputType="txt" label="Phone number" />
        <InputField placeholder="Select the type of issue" inputType="txt" label="Issue Type" />
        <div className="flex flex-col">
            <label htmlFor="help">How can we help?</label>
            <textarea name="" id="help" className="h-[128px] border border-[#B9BDC7] rounded-lg"></textarea>
        </div>
        <Button
          className="!w-fit mt-4 mb-8  float-end"
          type="primary"
          size="md"
          text="Submit Ticket"
        />
      </form>
    </div>
  );
};

export default FromTicket;
