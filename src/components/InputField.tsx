import React from "react";

import Image from "next/image";

type Props = {
  label: string;
  inputType: string;
  placeholder: string;
  iconSrc?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
  className?: string;
};

const InputField = ({
  label,
  inputType,
  placeholder,
  iconSrc,
  id = "",
  value,
  name,
  onChange,
  onBlur,
  error = false,
  errorText,

  className,
}: Props) => {
  return (
    <div className={`${className}`}>
      {" "}
      <div className={`flex flex-col gap-1 group `}>
        <label htmlFor="" className=" text-[#101928]  text-sm lg:text-base ">
          {label}
        </label>
        <div className="flex group-focus-within:border-[#B0E5FD]  rounded-lg gap-3 items-center justify-between border border-solid  border-[#D0D5DD] p-4">
          <input
            type={inputType}
            id={id}
            name={name}
            className="w-full focus:outline-none text-sm lg:text-base"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {iconSrc && (
            <Image src={iconSrc} alt={`${label} icon`} width={20} height={20} />
          )}
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{errorText}</p>}
    </div>
  );
};

export default InputField;
