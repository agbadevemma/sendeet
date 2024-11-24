import ArrowDown from "@/icons/arrow-down";
import ArrowUp from "@/icons/arrow-up";
import React from "react";

type Props = {
  title: string; // Card title, e.g., "Active Users"
  value: string; // Card value, e.g., "1,452"
  percentage: string; // Percentage change, e.g., "2%"
  comparisonText?: string; // Comparison text, e.g., "vs last week"
  mainIcon: JSX.Element; // Icon displayed in the circle
  oppositeFlow?: boolean;
};

const Card = ({
  title,
  value,
  percentage,
  comparisonText = "vs last week",
  mainIcon,


  oppositeFlow = false,
}: Props) => {
  return (
    <div>
      <div className="p-4 flex items-center justify-between w-full border gap-4 rounded-xl border-[#E4E7EC] border-solid">
        <div className="flex flex-col gap-2">
          <span className="text text-sm">{title}</span>
          <span className="text-[#344054] text-xl font-semibold">{value}</span>
          <div
            className={`flex ${
              oppositeFlow ? "text-error-600" : "text-success-600"
            } items-center gap-[6px]`}
          >
            <div
              className={`px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] ${
                oppositeFlow
                  ? "text-error-600 bg-error-50"
                  : "text-success-600 bg-success-50"
              }`}
            >
              {oppositeFlow ? (
                <ArrowDown color="#971B17" height={12} width={12} />
              ) : (
                <ArrowUp color="#12B76A" height={12} width={12} />
              )}
              <span className="font-medium">{percentage}</span>
            </div>
            <span className="text-xs">{comparisonText}</span>
          </div>
        </div>
        <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
          {mainIcon}
        </div>
      </div>
    </div>
  );
};

export default Card;
