"use client";
import Image from "next/image";
import React from "react";
import phone from "../../../../images/phone.svg";
import InputField from "@/components/InputField";
import CampaignSelectField from "@/components/CampaignSelectField";
import UserGroup from "@/icons/user-group";
import LoudSpeaker from "@/icons/loudspeaker";
import CheckCircleBg from "@/icons/check-circle-bg";
import Button from "@/components/buttons/Button";
import Calendar from "@/icons/calendar";
import { documents } from "@/utils/data";
import Link from "next/link";
import ReorderAlt from "@/icons/reorder-alt";
import Multiply from "@/icons/multiply";
import { useAppDispatch } from "@/lib/hooks";
import { closeModal } from "@/lib/slices/miscellaneousSlice";
import { toast } from "react-toastify";
import CheckCircle from "@/icons/check-circle";

type Props = {};

const Review = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {" "}
      <div className=" px-4 max-w-[1000px] mx-auto w-full flex  items-start gap-20 mb-10">
        <div className="flex gap-10 w-full items-start">
          <div className="w-full gap-x-2">
            <p className="text-lg w-full mb-8 font-semibold  border-b borer-[#D0D3D9] pb-6 ">
              4. Review Campaign
            </p>
            <InputField
              label="Campaign Name"
              placeholder="Welcome Back to the Space"
              inputType="text"
              size="sm"
            />
            <div className="flex items-center  gap-4 mt-4">
              <div className="flex w-full shadow-xs px-3 py-[10px] border border-solid border-[#D0D3D9] gap-2 rounded-lg">
                <LoudSpeaker color="#858D9D" />
                <span className="text-xs text-[#344054]">
                  Authentication - $0.0287/message
                </span>
              </div>
              <div className="flex  w-full shadow-xs px-3 py-[10px] border border-solid border-[#D0D3D9] gap-2 rounded-lg">
                <UserGroup color="#858D9D" />
                <span className="text-xs text-[#344054]">All Contacts</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <p className="text-[#344054] text-base">Message Content</p>
              <div className="rounded-lg border py-[18px] px-[16px] shadow-xs text-sm leading-[20px]">
                Welcome onboard FirstName {"{firstname}"}, here's an exclusive
                copy of our recent newsletter. You'll now receive exclusive
                offers, news, and updates directly on WhatsApp. Reply
                unsubscribe to opt out.
              </div>
            </div>
            <div className="flex mt-8 items-center gap-2">
              <p className="text-grey-700 text-sm">Schedule Uploaded Files</p>
              <div className="h-[24px] w-[24px] text-xs rounded-xl bg-primary-500 text-white flex items-center justify-center">
                {documents.length}
              </div>
            </div>
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

            <div className="mt-6 mb-6">
              <p className="s">Action button </p>
              <div className="flex flex-col">
                {" "}
                <div className="flex items-center gap-2 mt-4 ">
                  <ReorderAlt color="#B9BDC7" />
                  <div className="flex items-center justify-center  w-full border border-dashed rounded-lg shadow-xs border-[#D0D5DD] py-[10px] px-[14px]">
                    <input
                      type="text"
                      value={""}
                      // onChange={(e) => handleInputChange(index, e.target.value)}
                      className="focus:outline-none w-full bg-transparent placeholder:text-sm placeholder:text-grey-300 text-grey-700"
                      placeholder="Enter button text"
                    />
                  </div>
                  <button>
                    <Multiply color="#475367" height={24} width={24} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-4 ">
                  <ReorderAlt color="#B9BDC7" />
                  <div className="flex items-center justify-center  w-full border border-dashed rounded-lg shadow-xs border-[#D0D5DD] py-[10px] px-[14px]">
                    <input
                      type="text"
                      value={""}
                      // onChange={(e) => handleInputChange(index, e.target.value)}
                      className="focus:outline-none w-full bg-transparent placeholder:text-sm placeholder:text-grey-300 text-grey-700"
                      placeholder="Enter button text"
                    />
                  </div>
                  <button>
                    <Multiply color="#475367" height={24} width={24} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-t-[#D0D3D9] mb-8">
              <Button
                text="Save to drafts"
                type="secondary"
                size="sm"
                className="font-semibold text-md"
              />
              <Link
                onClick={() => {
                  toast.success(
                    <div className="flex items-start justify-between w-full px-4 py-8">
                      <div className="rounded-lg flex items-center mr-5 justify-center p-4  h-[40px] w-[40px] bg-success-50 border border-success-500">
                        {" "}
                        <CheckCircle color="#0F973D" />
                      </div>
                      <div className="gap-1 flex flex-col mr-4 text-[#667085]">
                        <p className="] text-sm !font-bold">Payment successful</p>
                        <p className=" !text-[14px] whitespace-nowrap">500 credits have been added to your account</p>
                      </div>
                    </div>,
                    {
                      className: " text-white rounded-lg p-4 shadow-lg w-full", // Tailwind classes
                      bodyClassName:
                        "text-sm  flex flex-col w-full  !w-full !p-12",
                      progressClassName: "bg-red-200",
                      icon: false,
                   
                      closeButton:false
                    }
                  );

                  dispatch(closeModal());
                }}
                href={""}
                // href={"/dashboard/campaigns"}
              >
                <Button
                  text="Confirm & Schedule"
                  type="primary"
                  size="sm"
                  className="font-semibold text-md"
                />
              </Link>
            </div>
          </div>
          <div className="h-[592px] bg-grey-100 w-px mt-32"></div>
        </div>
        <Image src={phone} alt="" />
      </div>
    </div>
  );
};

export default Review;
