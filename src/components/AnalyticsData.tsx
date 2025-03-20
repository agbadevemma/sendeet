import React from "react";

type Props = {};

const AnalyticsData = (props: Props) => {
  return (
    <div>
          {/* <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="text-success-700 font-medium">7.2%</span>
                </div> */}
      <div className="flex items-center gap-[6px]">
        <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
          -%
        </div>
        <span className="text-grey-400 text-xs">No data</span>
      </div>
    </div>
  );
};

export default AnalyticsData;
