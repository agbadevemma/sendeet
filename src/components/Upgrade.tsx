"use client";
import React, { useState } from "react";
import Button from "./buttons/Button";
import Stack from "@/icons/stack";
import Multiply from "@/icons/multiply";
import RadioButton from "./RadioButton";
import TextButton from "./buttons/TextButton";

type Billing = {
  planName: string;
  planDescription: string;
};
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  selectedBilling: Billing;
  setIsSubscriptionSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Upgrade = ({
  setIsOpen,
  isOpen,
  selectedBilling,
  setIsSubscriptionSuccessModal,
}: Props) => {
  type TabType = "monthly" | "annually";
  const [tab, setTab] = useState<TabType>("monthly");
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`pt-[6%] top-0 left-0 z-50 h-screen overflow-auto p-4 w-full flex md:items-center md:justify-center bg-gray-500/20 backdrop-blur-sm fixed overflow   ${
        isOpen ? "visible" : "invisible"
      } `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col w-full max-w-xl rounded-lg shadow-md h-full  md:h-fit  p-4 bg-white ease-in-out transition-all duration-700  ${
          isOpen ? "opacity-[100%] " : " opacity-0"
        }`}
      >
        <div className="flex items-center justify-between w-full border-b border-b-grey-50 py-4">
          <div className="flex gap-1.5">
            <div className=" flex items-center  bg-white  justify-center p-2 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <Stack color="black" height={24} width={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium">
                Upgrade to {selectedBilling.planName}
              </p>
              <p className="text-grey-600 text-xs">
                {selectedBilling.planDescription}
              </p>
            </div>
          </div>
          <Button
            text="Cancel"
            icon_style="icon-only"
            onClick={() => setIsOpen(false)}
            className="!h-8 !w-8"
            size="sm"
            iconComponent={<Multiply color="#101928" height={16} width={16} />}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium mt-4">Billing period</span>
          <div className="flex w-full gap-3 mt-4">
            <div
              onClick={() => setTab("annually")}
              className={`border ${
                tab === "annually" && "border-primary-500 bg-primary-50"
              }  rounded-md w-full p-4 flex flex-col gap-4 cursor-pointer`}
            >
              <div className="flex gap-1 ">
                <RadioButton checked={tab === "annually"} />
                <span className="text-sm">Annually</span>
                <div className="rounded-xl px-1 flex items-center justify-center w-fit text-white text-xs bg-primary-900">
                  Save 15%
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-medium">N63,750</span>
                <span className="text-sm font-normal text-grey-500">
                  per month
                </span>
              </div>
            </div>
            <div
              onClick={() => setTab("monthly")}
              className={`border ${
                tab === "monthly" && "border-primary-500 bg-primary-50"
              }  rounded-md w-full p-4 flex flex-col gap-4 cursor-pointer`}
            >
              <div className="flex gap-1 ">
                <RadioButton checked={tab === "monthly"} />
                <span className="text-sm">Monthly</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-medium">N75,000</span>
                <span className="text-sm font-normal text-grey-500">
                  per month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 mt-10">
          <TextButton
            text="Cancel"
            size="sm"
            className="font-semibold text-md"
          />
          <Button
            text="Checkout"
            type="primary"
            size="sm"
            onClick={() => {
              setIsOpen(false);
              setIsSubscriptionSuccessModal(true);
            }}
            className="font-semibold text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
