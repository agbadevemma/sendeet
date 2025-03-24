import HelpCircle from "@/icons/help-circle";
import React from "react";
import { Tooltip } from "react-tooltip";

type Props = {
  tooltipcontent: string;
};

const InfoTooltip = ({ tooltipcontent }: Props) => {
  return (
    <div className="flex items-center ">
      <button
        data-tooltip-id="the-tooltip"
        data-tooltip-content={tooltipcontent}
        className="px-1 py-2  text-white rounded-md"
      >
        <HelpCircle color="" />
      </button>
      <Tooltip
        id="the-tooltip"
        place="bottom"
        className=" !px-1.5 !py-1.5 !z-[100] !absolute !text-[13px] !bg-[#101828] !rounded-lg"
      />
    </div>
  );
};

export default InfoTooltip;
