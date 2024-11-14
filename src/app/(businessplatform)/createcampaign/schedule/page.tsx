"use client";
import Button from "@/components/buttons/Button";
import CampaignSelectField from "@/components/CampaignSelectField";
import RadioButton from "@/components/RadioButton";
import Calendar from "@/icons/calendar";
import CheckCircle from "@/icons/check-circle";
import CheckCircleBg from "@/icons/check-circle-bg";
import ChevronDown from "@/icons/cheveron-down";
import Clock from "@/icons/clock";
import Plus from "@/icons/plus";
import SendAlt from "@/icons/send-alt";
import { deliveryWindows, timeZones } from "@/utils/data";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Schedule = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState<string>("utc");
  const [selectedWindow, setSelectedWindow] = useState("09:00 AM - 12:00 PM");
  const [sendOption, setSendOption] = useState<string>("sendNow");

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

  type DocumentItem = {
    title: string;
    date: string;
    time: string;
    size: string;
    buttonDate: string;
  };
  const documents: DocumentItem[] = [
    {
      title: "October Issue 321.pdf",
      date: "11 Oct, 2024",
      time: "12:24pm",
      size: "4MB",
      buttonDate: "Oct 13, 2024",
    },
    {
      title: "September Edition 220.pdf",
      date: "10 Sep, 2024",
      time: "10:15am",
      size: "3.5MB",
      buttonDate: "Sep 12, 2024",
    },
    {
      title: "August Monthly Review.pdf",
      date: "08 Aug, 2024",
      time: "9:30am",
      size: "4.2MB",
      buttonDate: "Aug 10, 2024",
    },
    {
      title: "July Mid-Year Report.pdf",
      date: "12 Jul, 2024",
      time: "1:00pm",
      size: "5MB",
      buttonDate: "Jul 14, 2024",
    },
    {
      title: "June Special Issue.pdf",
      date: "15 Jun, 2024",
      time: "11:45am",
      size: "3MB",
      buttonDate: "Jun 17, 2024",
    },
  ];

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
          <div className="flex mt-3 gap-2 items-start cursor-pointer " onClick={() => setSendOption("sendNow")}>
          <RadioButton checked={sendOption === "sendNow"} />
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

        <div className="flex mt-6 gap-2 items-start cursor-pointer " onClick={() => setSendOption("schedule")}>
        <RadioButton checked={sendOption === "schedule"} />
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

        <div className="flex flex-col mt-8">
          <p className="text-grey-700 font-medium">Message Content</p>
          <div className="w-full mt-3 rounded-lg  px-[16px] py-[11px] shadow-xs border flex items-center justify-between border-[#D0D5DD] ">
            <p className="text-grey-700 line-clamp-1 text-sm">
              Welcome onboard , here's an exclusive copy of our recent
              newsletter.
            </p>
            <button className="p-[6px] border border-solid border-[#E4E7EC] rounded-[6px] ">
              <ChevronDown color="#000" />
            </button>
          </div>

          <div className="flex cursor-pointer  items-center justify-center px-[14px] py-[10px] border border-[#D0D5DD] shadow-xs rounded-lg border-dashed mt-3">
            <Plus color="#989FAD" />
          </div>

          <div className="flex mt-8 items-center gap-2">
            <p className="text-grey-700 text-sm">Schedule Uploaded Files</p>
            <div className="h-[24px] w-[24px] text-xs rounded-xl bg-primary-500 text-white flex items-center justify-center">
              {documents.length}
            </div>
          </div>

          <div className="flex flex-col">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="pb-6 border-b border-b-[#F0F2F5] w-full mt-6 flex justify-between items-center"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center h-12 w-12 bg-success-50 rounded-full">
                    <CheckCircleBg color="#0F973D" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">{doc.title}</p>
                    <div className="flex items-center gap-[6px] text-sm text-grey-300">
                      <span>{`${doc.date} | ${doc.time}`}</span>
                      <div className="h-1 w-1 bg-grey-300 rounded-full"></div>
                      <span className="text-sm">{doc.size}</span>
                    </div>
                  </div>
                </div>
                <Button
                  className=""
                  text={doc.buttonDate}
                  icon_style="leading-icon"
                  size="sm"
                  iconComponent={<Calendar color="#383E49" />}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-t-[#D0D3D9] mb-8">
            <Button
              text="Save to drafts"
              type="secondary"
              size="sm"
              className="font-semibold text-md"
            />
            <Link href={"/createcampaign/review"}>
            <Button
              text="Next: Review Campaign"
              type="primary"
              size="sm"
              className="font-semibold text-md"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
