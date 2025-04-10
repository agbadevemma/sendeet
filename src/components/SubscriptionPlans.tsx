import Settings from "@/icons/settings";
import Stack from "@/icons/stack";
import React, { useState } from "react";
import Button from "./buttons/Button";
import Multiply from "@/icons/multiply";
import currencyData from "../utils/currencies.json";
import SelectField from "./SelectField";
import SendAlt from "@/icons/send-alt";
import BillingCard from "./BillingCard";

type Billing = {
  planName: string;
  planDescription: string;
};
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setSelectedBilling: React.Dispatch<React.SetStateAction<Billing>>;
  setIsOpenUpgradeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubscriptionPlans = ({
  setIsOpen,
  isOpen,
  setSelectedBilling,
  setIsOpenUpgradeModal,
}: Props) => {
  type TabType = "monthly" | "anually";
  const [tab, setTab] = useState<TabType>("monthly");
  const currencies: CurrencyMap = currencyData;
  type Currency = {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
  };

  type CurrencyMap = {
    [code: string]: Currency;
  };
  const currencyOptions = Object.keys(currencies).map((key) => ({
    option: currencies[key].code,
    value: currencies[key].code,
  }));
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`pt-[6%] top-0 left-0 z-50 h-screen overflow-auto p-4 w-full flex md:items-center md:justify-center bg-gray-500/20 backdrop-blur-sm fixed overflow   ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col w-full max-w-5xl rounded-lg shadow-md h-full  md:h-fit  p-4 bg-white ease-in-out transition-all duration-700  ${
            isOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="flex items-center justify-between w-full border-b border-b-grey-50 py-4">
            <div className="flex gap-1.5">
              <div className=" flex items-center  bg-white  justify-center p-2 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
                <Stack color="black" height={24} width={24} />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Subscription Plans</p>
                <p className="text-grey-600 text-xs">
                  Pick an account plan that fits your workflow
                </p>
              </div>
            </div>
            <Button
              text="Cancel"
              icon_style="icon-only"
              onClick={() => setIsOpen(false)}
              className="!h-8 !w-8"
              size="sm"
              iconComponent={
                <Multiply color="#101928" height={16} width={16} />
              }
            />
          </div>

          <div className="mt-10 flex items-center justify-between ">
            <div className="w-full max-w-[330px] h-[44px] gap-1 rounded-lg p-1 flex bg-gray-50 border-[0.98px] border-[#F2F4F7]">
              <div
                onClick={() => setTab("monthly")}
                className={` text-grey-600 text-sm cursor-pointer ${
                  tab === "monthly"
                    ? "shadow-[0px_0.95px_2.85px_rgba(16,24,40,0.10),_0px_0.95px_1.9px_rgba(16,24,40,0.06)] bg-white "
                    : ""
                } flex items-center justify-center rounded-lg w-full  `}
              >
                Monthly Billing
              </div>
              <div
                onClick={() => setTab("anually")}
                className={`w-full  text-grey-600  
                 ${
                   tab === "anually"
                     ? "shadow-[0px_0.95px_2.85px_rgba(16,24,40,0.10),_0px_0.95px_1.9px_rgba(16,24,40,0.06)] bg-white "
                     : ""
                 } text-sm flex items-center justify-center gap-1 cursor-pointer  rounded-lg w-full`}
              >
                Annual Billing{" "}
                <div className="3 w-fit text-xs px-1 rounded-lg text-white bg-primary-600">
                  15% off
                </div>
              </div>
            </div>

            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className=" border  rounded-md w-[60px] py-1 focus:outline-none text-sm text-grey-500"
            >
              {currencyOptions.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.option}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4  gap-3 mt-4">
            <BillingCard
              planName="Free plan"
              planDescription="No free monthly credits, pay-as-you-go"
              price="N0"
              pricePrefix=""
              selected={true}
              btntext="Current Plan"
              priceFrequency="per month"
              onClick={() => {
                setIsOpen(false);
                setIsOpenUpgradeModal(true);
                setSelectedBilling({
                  planName: "Free",
                  planDescription: "No free monthly credits, pay-as-you-go",
                });
              }}
            />
            <BillingCard
              planName="Sapphire plan"
              planDescription="Up to 20 free monthly credits"
              price="N25,500"
              priceFrequency="per month"
              onClick={() => {
                setIsOpen(false);
                setIsOpenUpgradeModal(true);
                setSelectedBilling({
                  planName: "Sapphire plan",
                  planDescription: "Up to 20 free monthly credits",
                });
              }}
            />
            <BillingCard
              planName="Emerald plan"
              planDescription="Up to 100 free monthly credits"
              price="N75,000"
              priceFrequency="per month"
              onClick={() => {
                setIsOpen(false);
                setIsOpenUpgradeModal(true);
                setSelectedBilling({
                  planName: "Emerald",
                  planDescription: "Up to 100 free monthly credits",
                });
              }}
            />
            <BillingCard
              planName="Diamond plan"
              planDescription="Up to 250 free monthly credits"
              price="N25,500"
              priceFrequency="per month"
              onClick={() => {
                setIsOpen(false);
                setIsOpenUpgradeModal(true);
                setSelectedBilling({
                  planName: "Diamond plan",
                  planDescription: "Up to 250 free monthly credits",
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
