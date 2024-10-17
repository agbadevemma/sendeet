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
    <div>
      <div className="flex flex-col gap-[6px]">
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
    </div>
  );
};

export default SelectField;
