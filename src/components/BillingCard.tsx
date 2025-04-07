import Stack from "@/icons/stack";
import React from "react";
import Button from "./buttons/Button";

type Props = {
  planName: string;
  planDescription: string;
  price: string;
  priceFrequency: string;
  pricePrefix?: string;
  btntext?: string;
  selected?: boolean;
  onClick:()=>void
};

const BillingCard = ({
  planName,
  planDescription,
  price,
  priceFrequency,
  pricePrefix = "from",
  btntext = "Upgrade",
  selected = false,
  onClick
}: Props) => {
  return (
    <div className="w-full h-full">
      <div
        className={`{
          ${
            selected ? "bg-grey-50 border-grey-100" : "bg-white border-grey-50"
          } shadow-sm border w-full flex flex-col justify-between  min-h-[250px]  rounded-lg p-3 mt-8}`}
      >
        <div className="flex gap-2">
          <div
            className={`rounded-full size-10 flex items-center justify-center ${
              selected ? "bg-grey-100" : "bg-primary-50"
            }`}
          >
            <Stack
              color={selected ? "#5D6679" : "#00AAF7"}
              height={20}
              width={20}
            />
          </div>

          <div className="flex flex-col mt-1">
            <span className="text-lg font-medium">{planName}</span>
            <p className="text-xs text-wrap text-grey-500 max-w-[120px]">
              {planDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full  text-center flex gap-1 items-center">
            <span className="text-sm font-normal text-grey-500">
              {pricePrefix}
            </span>
            <span className="text-xl font-semibold">{price}</span>
            <span className="text-sm font-normal text-grey-500">
              {priceFrequency}
            </span>
          </div>
          <Button
            text={btntext}
            onClick={onClick}
            className={`mt-2.5 ${selected ? "!bg-grey-100  !border-none " : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingCard;
