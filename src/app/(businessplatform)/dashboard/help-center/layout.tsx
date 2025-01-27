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
import Money1 from "@/icons/money-1";
import Multiply from "@/icons/multiply";
import RocketAlt from "@/icons/rocket-alt";
import SearchIcon from "@/icons/search-icon";
import Star from "@/icons/star";
import Ticket from "@/icons/ticket";
import User from "@/icons/user";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import Verified from "@/icons/verified";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
type Props = {};

const HelpCenterRootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  const [isOpen, setIsOpen] = useState<boolean>(false); // Manage visibility statex
  const [gettingStartedDropdown, setGettingStartedDropdown] = useState(
    pathName === "/dashboard/help-center/navigate-dashboard"
  );
  const [rating, setRating] = useState(0);
  const [isSendFeedbackOpen, setIsSendFeedbackOpen] = useState<boolean>(false); // Manage visibility state
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown/modal

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <div>
      <div className="flex flex-col  gap-4">
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
        <div className="w-full flex items-stretch gap-8 mt-10 min-h-screen">
          <div className="w-full max-w-[281px]">
            <SearchInput
              icon={<SearchIcon color="#858D9D" />}
              placeholder="Search for FAQs or guides"
              className="!shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] !bg-white"
            />

            <div className="mt-8 flex flex-col gap-3">
              <Link
                onClick={() => {
                  setGettingStartedDropdown(false);
                }}
                href={"/dashboard/help-center"}
                className={`flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer ${
                  (pathName === "/dashboard/help-center/form-ticket" ||
                    pathName === "/dashboard/help-center") &&
                  "bg-[#F2F4F7]"
                } text-[#667085]`}
              >
                <Home color="#667085" height={20} width={20} />{" "}
                <span>Home</span>
              </Link>
              <Link
                href={"/dashboard/help-center/navigate-dashboard"}
                onClick={() => {
                  setGettingStartedDropdown(true);
                }}
                className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]"
              >
                <RocketAlt color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Getting Started</p>
                <div
                  className={`transition-transform duration-300 ${
                    gettingStartedDropdown ? "transform rotate-180" : ""
                  }`}
                >
                  <ChevronDown color="#667085" height={16} width={16} />
                </div>
              </Link>
              {/* subgetting started */}
              <div
                className={`flex flex-col gap-3  ${
                  gettingStartedDropdown ? "block" : "hidden"
                } `}
              >
                <Link
                  href={"/dashboard/help-center/navigate-dashboard"}
                  className={`flex items-center px-3 gap-3 py-2 ${
                    pathName === "/dashboard/help-center/navigate-dashboard"
                      ? "bg-[#F2F4F7]"
                      : ""
                  } rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]`}
                >
                  <LoudSpeaker color="" />{" "}
                  <p className="w-full text-sm">Navigating the Dashboard</p>
                  <ChevronDown color="" />
                </Link>{" "}
                <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                  <LoudSpeaker color="" />{" "}
                  <p className="w-full text-sm">WhatsApp API Status</p>
                  <ChevronDown color="" height={16} width={16} />
                </div>
                <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                  <LoudSpeaker color="" />{" "}
                  <p className="w-full text-sm">Importing Contacts</p>
                  <ChevronDown color="" height={16} width={16} />
                </div>
                <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                  <LoudSpeaker color="" />{" "}
                  <p className="w-full text-sm">Upload Guidelines</p>
                  <ChevronDown color="" height={16} width={16} />
                </div>
                <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                  <LoudSpeaker color="#667085" height={20} width={20} />{" "}
                  <p className="w-full text-sm">Campaign Management</p>
                  <ChevronDown color="#667085" height={16} width={16} />
                </div>
              </div>
              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <User color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Account Management</p>
                <ChevronDown color="#667085" height={16} width={16} />
              </div>
              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <Money1 color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Credits & Billing</p>
                <ChevronDown color="#667085" height={16} width={16} />
              </div>
              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <Code color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Troubleshooting</p>
                <ChevronDown color="#667085" height={16} width={16} />
              </div>
            </div>
          </div>
          <div className="w-full  border border-[#E4E7EC] bg-white rounded-[12px] p-6 flex flex-col ">
            {children}
            <div
              ref={dropdownRef}
              className=" flex flex-col items-end  fixed right-[4%] gap-2 bottom-[4%]"
            >
              {isOpen && (
                <div className="w-[311px] min-h-64 border flex flex-col border-[#E4E7EC] bg-white  shadow-sm rounded-[16px]">
                  <div className=" flex  items-center justify-between  p-4 border-b border-b-grey-[#E4E7EC]">
                    <p className=" font-semibold">Contact Support</p>
                    <Button
                      iconComponent={<Multiply color="#101928" />}
                      className=""
                      onClick={() => setIsOpen(false)}
                      icon_style="icon-only"
                    />
                  </div>
                  <div className="flex-1 px-4 rounded-b-[16px] p-2">
                    <p className="text-[#667085] text-sm">
                      Contact our support team for additional assistance.
                    </p>
                    <div className="flex mt-4 flex-col gap-4">
                      <Link
                        href={"/dashboard/help-center/form-ticket"}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex  items-center gap-2 w-full px-3"
                      >
                        <Mail color="#667085" height={20} width={20} />
                        <span className="text-grey-700 text-sm">Email Us</span>
                      </Link>
                      <button
                        onClick={() => {
                          setIsSendFeedbackOpen((prev) => !prev);
                          setIsOpen((prev) => !prev);
                        }}
                        className="flex  items-center gap-2 w-full px-3"
                      >
                        <Star color="#667085" height={20} width={20} />
                        <span className="text-grey-700 text-sm">
                          Send Feedback
                        </span>
                      </button>
                      <Link
                        onClick={() => setIsOpen((prev) => !prev)}
                        href={"/dashboard/help-center/ticket"}
                        className="flex  items-center gap-2 w-full px-3"
                      >
                        <Ticket color="#667085" height={20} width={20} />
                        <span className="text-grey-700 text-sm">
                          Submit a ticket
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {isSendFeedbackOpen && (
                <div className="w-[311px] min-h-64 border flex flex-col border-[#E4E7EC] bg-white  shadow-sm rounded-[16px]">
                  <div className=" flex  items-center justify-between  p-4 border-b border-b-grey-[#E4E7EC]">
                    <p className=" font-semibold">Send Feedback</p>
                    <Button
                      iconComponent={<Multiply color="#101928" />}
                      className=""
                      onClick={() => setIsSendFeedbackOpen(false)}
                      icon_style="icon-only"
                    />
                  </div>
                  <div className="flex-1 px-4 rounded-b-[16px] p-2">
                    <p className="text-[#667085] text-sm mt-4">
                      Please rate your experience with Sendeet or a feature you
                      are currently using
                    </p>

                    <div className="flex items-center justify-between gap-6  mt-6 ">
                      <Rating
                        onClick={handleRating}
                        className="flex items-center gap-4 justify-between"
                        SVGstrokeColor={"#48505E"}
                        emptyClassName={"text-[#48505E] !bg-white"}
                        SVGstorkeWidth={1}
                        fillColor={"#fff"}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        // onPointerMove={onPointerMove}
                      />
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="h-14 w-14   bg-primary-500 rounded-full flex items-center justify-center"
              >
                <Messages color="#fff" height={32} width={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterRootLayout;
