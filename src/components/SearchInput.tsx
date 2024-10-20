import React from "react";

import Image from "next/image";

type Props = {
  placeholder: string;
  iconSrc?: React.ReactNode; 
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const SearchInput = ({
  placeholder,
  iconSrc,
  id = "",
  value,
  name,
  onChange,
  onBlur,
  className,
}: Props) => {
  return (
    <div className={`${className} max-w-[487px]`}>
      {" "}
      <div
        className={`flex  ${"border-[#D0D5DD] group-focus-within:border-[#B0E5FD] "} rounded-lg gap-3 items-center justify-between border border-solid   py-[10px] px-[14px]`}
      >
         {iconSrc && iconSrc} {/* Render the SVG */}
        <input
          type={"text"}
          id={id}
          name={name}
          className="w-full focus:outline-none text-sm lg:text-md"
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
