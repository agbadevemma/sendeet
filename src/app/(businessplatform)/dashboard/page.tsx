import Button from "@/components/buttons/Button";
import SearchInput from "@/components/SearchInput";
import Calendar from "@/icons/calendar";
import ChevronRight from "@/icons/chevron-right";
import Elements from "@/icons/elements";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import LoudSpeaker from "@/icons/loudspeaker";
import Message from "@/icons/message";
import Plus from "@/icons/plus";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import UserAdd from "@/icons/user-add";
import React from "react";
import img from "../../../images/illustration.svg";
import Image from "next/image";
import illustration from "../../../images/illustration2.svg";
import Graph from "@/components/Graph";
import DotV from "@/icons/dot-v";
import Campaign from "@/components/Campaign";
import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const available: boolean = true;
  return (
    <div className="w-full pb-32">
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Elements color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Dashboard</p>
            <p className="text-sm text-grey-500">
              Welcome back, Testing Company
            </p>
          </div>
        </div>

        <div className="flex  gap-3">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
        </div>
      </div>

      <div className="mt-[27px]  w-full">
        <div className="flex  flex-col-reverse  lg:flex-row gap-6 w-full">
          <div className="flex flex-col  gap-5 w-full lg:max-w-[361px]  ">
            <div className="p-4 hidden   w-full lg:flex items-center justify-between border-solid bg-white border border-[#E4E7EC] rounded-xl ">
              <div className="flex flex-col gap-2">
                <span className="text text-sm">Total Messages Sent</span>
                <span className="text-[#344054] text-xl font-semibold">0</span>
                <div className="flex items-center gap-[6px]">
                  <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                    -%
                  </div>
                  <span className="text-grey-400 text-xs">No data</span>
                </div>
              </div>
              <div className="rounded-full p-[10px] border border-solid border-[#E4E7EC]">
                <Message color="#667085" />
              </div>
            </div>
            <div className="px-4 py-[22px]  w-full  border rounded-xl">
              <span className="text-lg font-medium">Quick Actions</span>
              <div className="flex  flex-col mt-[39.5px]">
                <div className="w-full">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center rounded-full border p-3 border-[#E4E7EC]">
                        <LoudSpeaker color="black" />
                      </div>
                      <Link href={"/dashboard/campaigns"} className="flex flex-col gap-1">
                        <span className="text-md font-medium">
                          Create Campaign
                        </span>
                        <span className="text-sm">Start a new campaign</span>
                      </Link >
                    </div>
                    <ChevronRight color="#667185" />
                  </div>
                </div>
                <div className="border -ml-2 -mr-2 border-solid border-[#F0F2F5] mt-9 mb-9"></div>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center rounded-full border p-3 border-[#E4E7EC]">
                      <UserAdd color="black" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-md font-medium">
                        Import Contacts
                      </span>
                      <span className="text-sm">
                        Add or import CSV or XLS files
                      </span>
                    </div>
                  </div>
                  <ChevronRight color="#667185" />
                </div>
                <div className="border -ml-2 -mr-2 border-solid border-[#F0F2F5] mt-9 mb-9"></div>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center rounded-full border p-3 border-[#E4E7EC]">
                      <Plus color="black" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-md font-medium">
                        Top up Credits
                      </span>
                      <span className="text-sm">Get more Sendeet credits</span>
                    </div>
                  </div>
                  <ChevronRight color="#667185" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
              <div className="p-4 lg:hidden    w-full flex items-center justify-between border-solid bg-white border border-[#E4E7EC] rounded-xl ">
                <div className="flex flex-col gap-2">
                  <span className="text text-sm">Total Messages Sent</span>
                  <span className="text-[#344054] text-xl font-semibold">
                    0
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                      -%
                    </div>
                    <span className="text-grey-400 text-xs">No data</span>
                  </div>
                </div>
                <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC]">
                  <Message color="#667085" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
                <div className="flex flex-col gap-2">
                  <span className="text text-sm">Delivered</span>
                  <span className="text-[#344054] text-xl font-semibold">
                    0
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                      -%
                    </div>
                    <span className="text-grey-400 text-xs">No data</span>
                  </div>
                </div>
                <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC]">
                  <SendAlt color="#667085" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
                {" "}
                <div className="flex flex-col gap-2">
                  <span className="text text-sm">Open Rate</span>
                  <span className="text-[#344054] text-xl font-semibold">
                    0%
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                      -%
                    </div>
                    <span className="text-grey-400 text-xs">No data</span>
                  </div>
                </div>
                <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC]">
                  <SendAlt color="#667085" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid   ">
                {" "}
                <div className="flex flex-col gap-2">
                  <span className="text text-sm">Click Rate</span>
                  <span className="text-[#344054] text-xl font-semibold">
                    0%
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                      -%
                    </div>
                    <span className="text-grey-400 text-xs">No data</span>
                  </div>
                </div>
                <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC]">
                  <SendAlt color="#667085" />
                </div>
              </div>
            </div>
            <div className="p-6  w-full border rounded-xl h-full">
              <div className="flex  items-center gap-4">
                <p className="text-lg font-medium w-full">Audience Growth</p>
                <Button icon_style="txt" size="md" text="View Report" />
              </div>
              <p className="text-grey-500 text-base">Total Subscribers</p>
              <div className="flex item-center  justify-between mt-1 ">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">0</span>
                  <div className="py-[2px] pl-[10px] pr-[8px] bg-[#F2F4F7] text-[#344054] rounded-2xl">
                    -%
                  </div>
                </div>
                <div className="flex self-end items-center gap-[13px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span className="text-gray-500 text-sm">Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00D4B2] rounded-full"></span>
                    <span className="text-gray-500 text-sm">Unsubscribers</span>
                  </div>
                </div>
              </div>
              <Graph />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  h-32 mb-32   mt-5 ">
        <div className="w-full flex flex-col gap-2 lg:flex-row lg:gap-0 lg:items-center justify-between">
          {" "}
          <div className="flex flex-col w-full">
            <p className="text-lg font-medium">Recent Campaign Performance</p>
            <p className="text-sm text-grey-500">
              Keep track of recent campaigns and their statistics
            </p>
          </div>
          <div className="flex items-center gap-[18px] w-full">
            <Button
              size="sm"
              text="Filters"
              icon_style="leading-icon"
              iconComponent={<FilterAlt color="#383E49" />}
            />
            <SearchInput
              placeholder="Search"
              className=""
              icon={<SearchIcon color={"#858D9D"} />}
            />
          </div>
        </div>
        {!available ? (
          <div className="mt-6">
            <div className="w-full flex flex-col gap-4">
              <Campaign />
              <Campaign /> <Campaign /> <Campaign /> <Campaign />
            </div>
          </div>
        ) : (
          <div className="mt-[74px] flex flex-col items-center ">
            <Image src={illustration} alt="images" className="mx-auto" />
            <p className="text-lg font-semibold mt-1">
              Ready to start your first campaign ?
            </p>
            <p className=" text-[#475367] mt-1 text-sm">
              Tap the button below to start and <br /> share content with your
              contacts
            </p>
            <Button
              size="sm"
              type="primary"
              className="mt-7 "
              icon_style="leading-icon"
              text="New Campaign"
              iconComponent={<Plus color="#fff" />}
            />
          </div>
        )}
        {!available && (
          <div className=" flex items-center justify-between mt-8 rounded rounded-t-lg px-[24px] py-[11px]">
            <Button
              text="Previous"
              icon_style="leading-icon"
              iconComponent={<ArrowLeft color="#48505E" />}
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center bg-[#E6F7FE] h-10 w-10 text-primary-500 rounded-lg">
                1
              </div>
              <div className="flex items-center justify-center  h-10 w-10  rounded-lg">
                2
              </div>{" "}
              <div className="flex items-center justify-center  h-10 w-10  rounded-lg">
                3
              </div>
              .....
              <div className="flex items-center justify-center  h-10 w-10  rounded-lg">
                6
              </div>{" "}
              <div className="flex items-center justify-center  h-10 w-10  rounded-lg">
                7
              </div>
              <div className="flex items-center justify-center  h-10 w-10  rounded-lg">
                8
              </div>
            </div>
            <Button
              text="Next"
              icon_style="trailing icon"
              iconComponent={<ArrowRight color="#48505E" />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
