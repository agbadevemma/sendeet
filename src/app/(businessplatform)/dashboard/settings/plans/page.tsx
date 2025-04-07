"use client";
import Button from "@/components/buttons/Button";
import SearchInput from "@/components/SearchInput";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Upgrade from "@/components/Upgrade";
import ArrowUpRight from "@/icons/arrow-up-right";
import FilterAlt from "@/icons/filter-alt";
import SearchIcon from "@/icons/search-icon";
import React, { useState } from "react";

type Props = {};

const Plans = (props: Props) => {
  type Billing = {
    planName: string;
    planDescription: string;
  };
  const [isOpenSubscription, setIsOpenSubscription] = useState(false);
  const [isOpenUpgradeModal, setIsOpenUpgradeModal] = useState(false);
  const [selectedBilling, setSelectedBilling] = useState<Billing>({
    planName: "",
    planDescription: "",
  });

  return (
    <div>
      {/* modal */}
      <SubscriptionPlans
        isOpen={isOpenSubscription}
        setIsOpen={setIsOpenSubscription}
        setIsOpenUpgradeModal={setIsOpenUpgradeModal}
        setSelectedBilling={setSelectedBilling}
      />
      <Upgrade
        isOpen={isOpenUpgradeModal}
        setIsOpen={setIsOpenUpgradeModal}
        selectedBilling={selectedBilling}
      />
      {/* body */}
      <div className="w-full flex flex-col gap-1  rounded-xl py-2  shadow-md bg-white  pt-4">
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <span className="text-sm font-medium">Free plan</span>
                <div className="bg-primary-50 rounded-full p-2 py-0.5 text-xs text-primary-500">
                  current plan
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Buy credits and pay-as-you-go to send messages
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl">₦ 0</span>
              <span className="text-sm font-medium text-gray-500">
                per month
              </span>
            </div>
          </div>
          <p className="text-xs font-medium mt-8">No free credits</p>

          <div className="w-full bg-grey-50 rounded-2xl h-2.5 mt-4">
            <div
              className=" bg-primary-500 w-full h-full rounded-l-2xl mt-4"
              style={{ width: `${80}%` }}
            ></div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full border-t border-t-gray-200 mt-4 pt-2 px-4 pb-2">
          <button
            onClick={() => setIsOpenSubscription(true)}
            className="flex items-center gap-1 w-fit ml-auto cursor-pointer"
          >
            <span className="text-primary-500 text-sm font-medium">
              Upgrade
            </span>{" "}
            <ArrowUpRight color="#00AAF7" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 lg:flex-row lg:gap-0 mt-10 lg:items-center justify-between">
        {" "}
        <div className="flex flex-col w-full">
          <div className="text-base font-medium flex items-center gap-2">
            Recent Campaign Performance
          </div>
          <p className="text-sm text-grey-500">
            Download past invoices and track your subscriptions with ease
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-[18px] w-full">
          <SearchInput
            placeholder="Search"
            className=""
            icon={<SearchIcon color={"#858D9D"} />}
          />
          <Button
            size="sm"
            text="Filters"
            icon_style="leading-icon"
            iconComponent={<FilterAlt color="#383E49" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;
