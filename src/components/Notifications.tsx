import React, { useState, useEffect, useRef } from "react";
import Button from "./buttons/Button";
import BellBorder from "@/icons/bell-border";
import PencilEdit from "@/icons/pencil-edit";
import Multiply from "@/icons/multiply";
import TickDouble from "@/icons/tick-double";
import illustration from "../images/illustration.svg";
import Image from "next/image";
import Notification from "./Notification";

type Props = {};

const Notifications = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<string>("unread");
  const [data, setData] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <Button
        icon_style="icon-only"
        size="lg"
        iconComponent={<BellBorder color="black" />}
        onClick={toggleDropdown}
      />
      <div className="w-full lg:w-fit z-[50] px-1 lg:px-0 absolute right-0 lg:right-10">
        {isOpen && (
          <div className="border-[#E4E7EC] border-solid border lg:max-w-[440px] w-full max-h-[516px] rounded-2xl flex flex-col items-center bg-white pt-8 mt-6">
            <div className="px-4 flex w-full items-start justify-between">
              <div className="flex items-center justify-center rounded-lg shadow-[0px_1px_1px_0px_rgba(16,24,40,0.10)] border border-grey-50 h-12 w-12">
                <PencilEdit height={24} width={24} color="#383E49" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Notifications</p>
                <p className="text-sm text-grey-600">
                  Stay updated with your latest notifications
                </p>
              </div>
              <div
                onClick={toggleDropdown}
                className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 border-[#E4E7EC] border"
              >
                <Multiply height={20} width={20} color="#101928" />
              </div>
            </div>
            <div className="px-2 w-full">
              <div className="p-2 pb-0 border-b border-[#E4E7EC] w-full mt-6 flex items-center justify-between">
                <div className="flex gap-2 px-4 gap-x-8">
                  <span
                    onClick={() => setTab("all")}
                    className={`text-sm pb-4 cursor-pointer ${
                      tab == "all" &&
                      " text-primary-500 border-b-2 border-b-primary-500"
                    }`}
                  >
                    All
                  </span>
                  <span
                    onClick={() => setTab("unread")}
                    className={`text-sm pb-4 cursor-pointer ${
                      tab == "unread" &&
                      " text-primary-500 border-b-2 border-b-primary-500"
                    }`}
                  >
                    Unread (2)
                  </span>
                </div>
                <button className="flex gap-2 pb-4 pr-4">
                  <TickDouble color="#667085" height={20} width={20} />
                  <button>Mark all as read</button>
                </button>
              </div>
            </div>

            {!data ? (
              <div className="flex-1 mt-4 px-4 overflow-auto gap-6 flex-col flex pt-1 pb-2">
                <Notification setIsOpen={setIsOpen} isOpen={isOpen}/>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                <Image src={illustration} alt="illustration" />
                <p className="text-[18px] font-semibold mt-10">
                  You’re all caught up
                </p>
                <p className="text-[#475367] text-sm mt-1">
                  New updates would appear here
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
