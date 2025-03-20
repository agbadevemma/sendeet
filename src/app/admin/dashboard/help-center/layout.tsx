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
import Building5 from "@/icons/building-5";
type Props = {};

const HelpCenterRootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  const [isOpen, setIsOpen] = useState<boolean>(false); // Manage visibility statex
  const [gettingStartedDropdown, setGettingStartedDropdown] = useState(
    pathName === "/admin/dashboard/help-center/navigate-dashboard"
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
              Resources and tools to assist admins in resolving issues
              efficiently.
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
                href={"/admin/dashboard/help-center"}
                className={`flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer ${
                  (pathName === "/admin/dashboard/help-center/form-ticket" ||
                    pathName === "/admin/dashboard/help-center") &&
                  "bg-[#F2F4F7]"
                } text-[#667085]`}
              >
                <Home color="#667085" height={20} width={20} />{" "}
                <span>Home</span>
              </Link>
              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <Building5 color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Organization Management</p>
                <div className={`transition-transform duration-300 `}>
                  <ChevronDown color="#667085" height={16} width={16} />
                </div>
              </div>

              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <User color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">User Subscription Issues</p>
                <ChevronDown color="#667085" height={16} width={16} />
              </div>

              <Link
                href={"/admin/dashboard/help-center/campaign-troubleshooting"}
                onClick={() => {
                  setGettingStartedDropdown(true);
                }}
                className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]"
              >
                <Money1 color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Campaign Troubleshooting</p>
                <div
                  className={`transition-transform duration-300 ${
                    gettingStartedDropdown ? "transform rotate-180" : ""
                  }`}
                >
                  <ChevronDown color="#667085" height={16} width={16} />
                </div>
              </Link>

              <div
                className={`flex flex-col gap-3  ${
                  gettingStartedDropdown ? "block" : "hidden"
                } `}
              >
                <Link
                  href={"/admin/dashboard/help-center/campaign-troubleshooting"}
                  className={`flex items-center px-3 gap-3 py-2 ${
                    pathName ===
                    "/admin/dashboard/help-center/campaign-troubleshooting"
                      ? "bg-[#F2F4F7]"
                      : ""
                  } rounded-lg cursor-pointer pl-10 hover:bg-[#F2F4F7] text-[#667085]`}
                >
                  <p className="w-full text-sm">Resolving Delivery Failures</p>
                </Link>{" "}
              </div>
              <div className="flex items-center px-3 gap-3 py-2 rounded-lg cursor-pointer hover:bg-[#F2F4F7] text-[#667085]">
                <Code color="#667085" height={20} width={20} />{" "}
                <p className="w-full text-sm">Credits & Billing Support</p>
                <ChevronDown color="#667085" height={16} width={16} />
              </div>
            </div>
          </div>
          <div className="w-full  border border-[#E4E7EC] bg-white rounded-[12px] p-6 flex flex-col ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterRootLayout;
