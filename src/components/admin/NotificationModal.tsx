"use client";
import React, { useState } from "react";
import Button from "../buttons/Button";
import Multiply from "@/icons/multiply";
import UserAdd from "@/icons/user-add";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setNotification } from "@/lib/slices/miscellaneousSlice";
import PencilEdit from "@/icons/pencil-edit";
import Maximise2 from "@/icons/maximise-2";
import TickDouble from "@/icons/tick-double";
import empty from "../../images/empty.svg";
import Image from "next/image";
import illustration from "../../images/illustration.svg";
import Notification from "../Notification";

const NotificationModal = () => {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<string>("unread");
  const [data, setData] = useState<string>("");
  const { notificationModal: isOpen } = useAppSelector(
    (state) => state.miscellaneous
  );
  return (
    <div>
      <div
        className={`pt-[2%] top-0 left-0 z-50 pb-10 h-screen w-full bg-black/20 fixed overflow-y-auto   ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div
          className={`max-w-[523px] ml-64 w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${
            isOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <PencilEdit color="black" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[18px]">
                Notifications
              </p>
              <p className="text-[#5D6679] text-[14px] ">
                Stay updated with your latest notifications
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                icon_style="icon-only"
                btntype="button"
                onClick={() => {
                  dispatch(setNotification(false));
                }}
                className="!h-8 !w-8"
                size="sm"
                iconComponent={
                  <Maximise2 color="#101928" height={16} width={16} />
                }
              />

              <Button
                icon_style="icon-only"
                btntype="button"
                onClick={() => {
                  dispatch(setNotification(false));
                  
                  // dispatch(setNotification(false));
                }}
                className="!h-8 !w-8"
                size="sm"
                iconComponent={
                  <Multiply color="#101928" height={16} width={16} />
                }
              />
            </div>
          </div>

          <div className="px-2 w-full">
            <div className="p-2 pb-0 border-b border-[#E4E7EC] w-full mt-6 flex items-center justify-between">
              <div className="flex gap-2 px-4 gap-x-8">
                <span
                  onClick={() => setTab("all")}
                  className={`text-sm pb-2 cursor-pointer ${
                    tab == "all" &&
                    " text-primary-500 border-b-2 border-b-primary-500"
                  }`}
                >
                  All
                </span>
                <span
                  onClick={() => setTab("unread")}
                  className={`text-sm pb-2 cursor-pointer ${
                    tab == "unread" &&
                    " text-primary-500 border-b-2 border-b-primary-500"
                  }`}
                >
                  Unread (2)
                </span>
              </div>
              <button className="flex gap-2 pb-4 pr-4">
                <TickDouble color="#667085" height={20} width={20} />
                <button className="text-sm text-grey-500">
                  Mark all as read
                </button>
              </button>
            </div>
          </div>

          <div className="w-full h-72 flex ">
            {data ? (
              <div className="flex-1 mt-4 px-4 overflow-auto gap-6 flex-col flex pt-1 pb-2">
                <Notification isOpen={isOpen} />
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center w-full -mt-10">
                <Image src={empty} alt="illustration" />
                <p className="text-[18px] font-semibold mt-3">
                  You’re all caught up
                </p>
                <p className="text-[#475367] text-sm mt-1">
                  New updates would appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
