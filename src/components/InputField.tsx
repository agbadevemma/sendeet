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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  className?: string;
  inputclassName?: string;
  size?: "sm" | "lg";
  disabled?: boolean;
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
  onClick,
  error = false,
  errorText,
  icon,
  size = "lg",
  className,
  inputclassName,
  disabled = false,
}: Props) => {
  return (
    <div className={``}>
      {" "}
      <div className={`flex flex-col gap-1 group `}>
        <label
          htmlFor=""
          className={`text-sm lg:text-md ${
            size === "sm" ? "font-medium" : "font-normal"
          }`}
        >
          {label}
        </label>
        <div
          className={`flex  ${
            error
              ? "border-error-500 "
              : "border-grey-100 group-focus-within:border-primary-100 "
          } rounded-lg gap-3 items-center justify-between border border-solid ${className}  ${
            size === "lg" ? "p-4" : "px-[14px] py-[10px]"
          }`}
        >
          <input
            type={inputType}
            id={id}
            name={name}
            className={`w-full focus:outline-none text-sm lg:text-md bg-transparent ${inputclassName}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {iconSrc && (
            <Image src={iconSrc} alt={`${label} icon`} width={20} height={20} />
          )}
          {icon && (
            <div onClick={onClick} className={`${onClick && "cursor-pointer"}`}>
              {" "}
              {icon}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-xs text-error-500">{errorText}</p>}
    </div>
  );
};

export default InputField;
