"use client";
import CampaignSelectField from "@/components/CampaignSelectField";
import Clock from "@/icons/clock";
import SendAlt from "@/icons/send-alt";
import { deliveryWindows, timeZones } from "@/utils/data";
import React, { useState } from "react";

type Props = {};

const Schedule = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState<string>("utc");
  const [selectedWindow, setSelectedWindow] = useState('09:00 AM - 12:00 PM');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleSelect2 = (value: string) => {
    setSelectedWindow(value);
    setIsOpen2(false);
  };

  const handleSelect = (value: string) => {
    setSelectedTimezone(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div className=" px-4">
        <p className="text-lg font-semibold  border-b borer-[#D0D3D9]  pb-6">
          3. Schedule Campaign
        </p>

        <div className="flex flex-col mt-8">
          <p className="text-grey-700 text-sm mb-">
            When do you want to send it ?
          </p>
          <div className="flex mt-3 gap-2 items-start ">
            <input
              type="radio"
              name=""
              id=""
              className=" bg-primary-50 border-[#00AAF7] mt-[2px]"
            />
            <div className="flex flex-col">
              <span className="text-grey-800 font-medium  text-sm">
                Send Now
              </span>
              <span className="text-grey-500 text-sm">
                Your campaign would be sent right now
              </span>
            </div>
          </div>
        </div>

        <div className="flex mt-6 gap-2 items-start ">
          <input
            type="radio"
            name=""
            id=""
            className=" bg-primary-50 border-[#00AAF7] mt-[2px]"
          />
          <div className="flex flex-col">
            <span className="text-grey-800 font-medium  text-sm">
              Schedule for a specific time
            </span>
            <span className="text-grey-500 text-sm">
              Select future dates to send out your campaign
            </span>
          </div>
        </div>
        <div className="flex w-full gap-4 items-center mt-8">
          <CampaignSelectField
            icon={<Clock color="#858D9D" />}
            isOpen={isOpen}
            onToggle={handleToggle}
            options={timeZones}
            onSelect={handleSelect}
            value={selectedTimezone}
            className="text-sn"
            name="timezone"
            label="Time Zone"
          />
           <CampaignSelectField
            icon={<SendAlt color="#858D9D" />}
            isOpen={isOpen2}
            onToggle={handleToggle2}
            options={deliveryWindows}
            onSelect={handleSelect2}
            value={selectedWindow}
            label="Delivery Window (optional)"
            className="text-sn"
            name="timezone"
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
