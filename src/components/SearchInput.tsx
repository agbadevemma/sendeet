import React from "react";

import Image from "next/image";

type Props = {
  placeholder: string;
  icon?: React.ReactNode;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  className1?:string
};

const SearchInput = ({
  placeholder,
  icon,
  id = "",
  value,
  name,
  onChange,
  onBlur,
  className,
  className1,
}: Props) => {
  return (
    <div className={` ${className} w-full  lg:max-w-[487px] group bg-white`}>
      {" "}
      <div
        className={`flex c  ${"border-[#D0D5DD] bg-white group-focus-within:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#E6F7FE]  group-focus-within:border-[#8AD8FB] "} rounded-lg gap-2 items-center justify-between border border-solid   py-[10px] px-[14px]`}
      >
        {icon && icon} {/* Render the SVG */}
        <input
          type={"text"}
          id={id}
          name={name}
          className="w-full focus:outline-none text-sm lg:text-md  bg-white"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default SearchInput;
