import React from "react";

import Image from "next/image";


type Props = {
    label: string;
    inputType: string;
    placeholder: string;
    iconSrc: string;
    id?: string;
  };

const InputField = ({ label, inputType, placeholder, iconSrc, id = '' }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className=" text-sm lg:text-base">
      {label}
      </label>
      <div className="flex rounded-lg gap-3 items-center justify-between border border-solid  border-[#D0D5DD] p-4" >
        <input
          type={inputType}
          id={id}
          className="w-full focus:outline-none text-sm lg:text-base"
          placeholder={placeholder}
        />
        <Image 
          src={iconSrc} 
          alt={`${label} icon`} 
          width={20} 
          height={20}
        />

      </div>
    </div>
  );
};

export default InputField;
