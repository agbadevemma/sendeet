import React, { ChangeEventHandler, FocusEventHandler } from "react";

import Image from "next/image";

type Props = {
  label: string;
  placeholder: string;
  iconSrc?: string;
  id?: string;
  name?: string;
  value?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
};

const TextArea = ({
  label,
  placeholder,
  iconSrc,
  id = "",
  value,
  name,
  onChange,
  onBlur,
  onClick,
  error = false,
  errorText,
  icon,
  size = "lg",
  className,
}: Props) => {
  return (
    <div className={`${className}`}>
      {" "}
      <div className={`flex flex-col gap-1 group `}>
        <label
          htmlFor=""
          className={`text-sm lg:text-md ${
            size === "sm" ? "font-medium" : "font-normal"
          }`}
        >
          <span className=""> {label}</span>{" "}
          <span className="font-normal">(optional)</span>
        </label>
        <div
          className={`flex  ${
            error
              ? "border-error-500 "
              : "border group-focus-within:border-primary-100  border-[#D0D5DD] "
          } rounded-lg gap-3 items-center justify-between border border-solid shadow-xs   ${
            size === "lg" ? "p-4" : "px-[14px] py-[10px]"
          }`}
        >
          <textarea
            id={id}
            name={name}
            className="w-full focus:outline-none text-sm lg:text-md bg-transparent h-[106px]"
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
      {error && <p className="text-xs text-error-500">{errorText}</p>}
    </div>
  );
};

export default TextArea;
