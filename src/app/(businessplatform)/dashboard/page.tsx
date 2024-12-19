"use client";
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
import React, { useEffect } from "react";
import img from "../../../images/illustration.svg";
import Image from "next/image";
import illustration from "../../../images/illustration2.svg";
import Graph from "@/components/Graph";
import Campaign from "@/components/Campaign";
import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  openModal,
  setOnboarding,
  setExplore,
} from "@/lib/slices/miscellaneousSlice";
import Pagination from "@/components/Pagination";
import { toast } from "react-toastify";
import TickDouble from "@/icons/tick-double";
import Eye from "@/icons/eye";
import HandClick from "@/icons/hand-click";
import Welcome from "@/components/onboarding/Welcome";
import TextButton from "@/components/buttons/TextButton";
import OnboardCard from "@/components/onboarding/OnboardCard";
import HelpCircle from "@/icons/help-circle";
import CompletedTour from "@/components/onboarding/CompletedTour";
import ExploreCard from "@/components/onboarding/ExploreCard";

type Props = {};

const page = (props: Props) => {
  const available: boolean = true;
  const dispatch = useAppDispatch();
  const { onboarding, explore } = useAppSelector(
    (state) => state.miscellaneous
  );
  const stepsArray = ["step1", "step2", "step3"];
  
  useEffect(() => {
    dispatch(setExplore("credit"));
  }, []);

  return (
    <div className="w-full pb-32">
      <Welcome />
      <CompletedTour />
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50 bg-white">
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
              <div className="flex gap-4 items-center">
                {onboarding == "step1" && (
                  <div className="animate-pinging duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                )}
                <div className="rounded-full p-[10px] border border-solid border-[#E4E7EC]">
                  <Message color="#667085" />
                </div>
              </div>
            </div>
            <div className="relative w-full z-[50]">
              <div className="px-4 py-[22px] bg-white  w-full  border rounded-xl">
                <div className="text-lg font-medium flex items-center gap-2">
                  Quick Actions
                  <span className="cursor-pointer">
                    <HelpCircle color="" />
                  </span>
                  {onboarding === "step2" && (
                    <div className="animate-pinging ml-4 duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                  )}
                </div>
                <div
                  className={` flex     mt-[39.5px] ${
                    explore == "credit" ? "flex-col-reverse" : "flex-col"
                  }`}
                >
                  <Link
                    onClick={() => dispatch(openModal())}
                    href={"/dashboard/campaigns"}
                    className="w-full"
                  >
                    <div className="flex justify-between items-center ">
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center rounded-full border p-3 border-[#E4E7EC]">
                          <LoudSpeaker color="black" />
                        </div>
                        <p className="flex flex-col gap-1">
                          <span className="text-md font-medium">
                            Create Campaign
                          </span>
                          <span className="text-sm">Start a new campaign</span>
                        </p>
                      </div>
                      <ChevronRight color="#667185" />
                    </div>
                  </Link>
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
                  <div className="relative w-full">
                    {" "}
                    <ExploreCard
                      arrowClassName="-translate-x-1/2  top-1/2 !left-0 "
                      currentStep="credit"
                      bodyClassName="-right-[22rem] -top-[2rem]"
                      description="Click here to purchase credits to send out campaigns!"
                      onNext={() => dispatch(setExplore("startcampaign"))}
                      title="Get credits to send campaigns"
                    />
                    <Link
                      href={"/dashboard/credits"}
                      className="flex justify-between items-center  relative"
                    >
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center rounded-full border p-3 border-[#E4E7EC]">
                          <Plus color="black" />
                        </div>
                        <p className="flex flex-col gap-1">
                          <div className="flex items-center justify-between w-full">
                            {" "}
                            <span className="text-md font-medium">
                              Top up Credits
                            </span>
                            {explore === "credit" && (
                              <div className="animate-pinging ml-4 duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                            )}
                          </div>
                          <span className="text-sm">
                            Get more Sendeet credits
                          </span>
                        </p>
                      </div>
                      <ChevronRight color="#667185" />
                    </Link>
                  </div>
                </div>
              </div>
              <OnboardCard
                step="Step 2 of 4"
                title="Quick Actions"
                bodyClassName="top-20 delay-200 -right-[20.7rem] top-0"
                description="Use these Quick Actions to get started quickly. Create a new campaign, import contacts, or top up credits."
                arrowClassName="-translate-x-1/2 !left-0 !top-1/2 "
                currentStep="step2"
                onNext={() => dispatch(setOnboarding("step3"))}
              />
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
              <div className="relative w-full group inline-block">
                <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white  border-[#E4E7EC]  border-solid  ">
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
                  <div className="flex items-center gap-4">
                    {onboarding == "step1" && (
                      <div className="animate-pinging duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                    )}
                    <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
                      <TickDouble color="#667085" />
                    </div>
                  </div>
                </div>
                <OnboardCard
                  step="Step 1 of 4"
                  title="Key Metrics Panel"
                  bodyClassName="mt-0 delay-500 top-[8rem]  left-4"
                  description="Here, you can monitor key metrics like messages sent, delivery rates, and audience growth at a glance."
                  arrowClassName="-translate-x-1/2 -top-1.5 left-1/2  "
                  currentStep="step1"
                  onNext={() => dispatch(setOnboarding("step2"))}
                />
              </div>
              <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid  ">
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
                <div className="flex items-center gap-4">
                  {onboarding == "step1" && (
                    <div className="animate-pinging duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                  )}
                  <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
                    <Eye color="#667085" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid   ">
                {" "}
                <div className="flex flex-col gap-2">
                  <span className="text text-sm">Click Rate</span>
                  <span className="text-[#344054] text-xl font-semibold ">
                    0%
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054] flex items-center justify-center flex-shrink-0">
                      -%
                    </div>
                    <span className="text-grey-400 text-xs">No data</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {onboarding == "step1" && (
                    <div className="animate-pinging duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                  )}
                  <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC]  flex items-center justify-center flex-shrink-0">
                    <HandClick color="#667085" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6  w-full border rounded-xl h-full bg-white">
              <div className="flex  justify-between items-center gap-4">
                <div className="text-lg font-medium flex items-center gap-2 relative">
                  Audience Growth
                  <span className="cursor-pointer">
                    <HelpCircle color="" />
                  </span>
                  {onboarding === "step3" && (
                    <div className="animate-pinging ml-4 duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
                  )}
                  <OnboardCard
                    step="Step 3 of 4"
                    title="Audience Growth"
                    bodyClassName="mt-4 delay-500  left-[15rem]  -top-[9rem]"
                    description="Track your opt-in and opt-out trends here. Adjust the time period to see monthly or yearly stats."
                    arrowClassName="-translate-x-1/2 !left-0 top-1/2 "
                    currentStep="step3"
                    onNext={() => dispatch(setOnboarding("step4"))}
                  />
                </div>
                <Link href={"/dashboard/audience"}>
                  <Button icon_style="txt" size="md" text="View Report" />
                </Link>
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
      <div className=" w-full  h-32 mb-32 relative  mt-6 ">
        <OnboardCard
          step="Step 4 of 4"
          title="Recent Campaign Performance"
          bodyClassName="mt-0  delay-500  !-top-[15rem] left-[4rem]"
          description="Review the performance of your recent campaigns here, including key stats like open and click rates."
          arrowClassName="-translate-x-1/2   !-bottom-1 "
          currentStep="step4"
          onNext={() => dispatch(setOnboarding("completed"))}
        />
        <div className="w-full flex flex-col gap-2 lg:flex-row lg:gap-0 lg:items-center justify-between">
          {" "}
          <div className="flex flex-col w-full">
            <div className="text-lg font-medium flex items-center gap-2">
              Recent Campaign Performance
              <span className="cursor-pointer">
                <HelpCircle color="" />
              </span>
              {onboarding === "step4" && (
                <div className="animate-pinging ml-4 duration-500 block h-2.5  w-2.5 rounded-full ring-2 ring-[#E6F7FE] bg-[#B0E5FD]"></div>
              )}
            </div>
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
        {available ? (
          <div className="mt-6 ">
            <div className="w-full flex flex-col sidebar gap-4 ">
              <Campaign status="draft" />
              <Campaign status="active" />
              <Campaign status="draft" />
              <Campaign status="active" />
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
            <Link
              onClick={() => {
                toast.success("");
                dispatch(openModal());
              }}
              href={"/dashboard/campaigns"}
            >
              <Button
                size="sm"
                type="primary"
                className="mt-7 "
                icon_style="leading-icon"
                text="New Campaign"
                iconComponent={<Plus color="#fff" />}
              />
            </Link>
          </div>
        )}

        {available && (
          <div className="w-full mt-8 pt-[11px] pb-[16px] px-6 border rounded-lg border-[#E4E7EC]">
            <Pagination />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
