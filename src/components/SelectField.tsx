import Image from "next/image";
import React from "react";
import arrowdown from "../images/icons/chevron-down.svg";

type Props = {
  label?: string;
  placeholder?: string;
  className?: string;

  onClick?: () => void;
};

const SelectField = ({
  label = "Label", 
  placeholder = "Select an option", 
  className = "", 
  onClick, 
}: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-[6px] cursor-pointer">
        <p className="text-[#344054]  text-sm lg:text-base">{label}</p>
        <div
          className={` flex justify-between shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center gap-[8px]  rounded-lg px-[14px] py-[10px] border border-[#D0D3D9]`}
        >
          <div className="text-base text-[#B9BDC7] w-full">
          {placeholder}
          </div>  
          <Image src={arrowdown} alt="" />
        </div>
      </div>
      {/* <div className="h-[320px] absolute z-50 w-full border mt-4 overflow-y-auto p-[4px] rounded-lg border-[#F2F4F7] shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)]
"></div> */}
    </div>
  );
};

export default SelectField;
