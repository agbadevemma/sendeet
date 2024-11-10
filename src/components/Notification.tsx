import React from "react";
import TextButton from "./buttons/TextButton";
import Button from "./buttons/Button";
import SendAlt from "@/icons/send-alt";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-start gap-5">
        <div className="flex border border-success-500 p-3 shadow-[0px_1px_2px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,189,199,0.20)] rounded-lg bg-success-50 ">
          <SendAlt color="#0F973D" />
        </div>
        <div className="flex flex-col">
          <p className="text-[#667085] text-sm">
            Your campaign
            <span className="text-grey-900 font-medium mx-1">Summer School</span> was
            successfully sent to
            <span className="text-primary-500 mx-1">245 contacts</span>
          </p>
          <div className="flex items-center text-[#98A2B3] gap-2 text-sm mt-1">
            <p className="">3 hrs ago </p>{" "}
            <div className="bg-[#98A2B3] p-0.5 rounded-full"></div>
            <span className="">Content Delivery </span>
          </div>
          <div className="flex mt-4 w-full gap-4 items-center">
            <TextButton
              className="py-2 px-4 text-sm lg:text-md"
              icon_style=""
              size="lg"
              text="New Campaign"
              type="primary"
              
              
            />
            <Button
              size="sm"
              text="View Report"
              type="primary"
              className="!px-4 !py-2 !text-sm "
            />
          </div>
        </div>
        <div className="bg-primary-500 p-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Notification;
