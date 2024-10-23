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
  icon?: React.ReactNode;
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
  icon,
  className,
}: Props) => {
  return (
    <div className={`${className}`}>
      {" "}
      <div className={`flex flex-col gap-1 group `}>
        <label htmlFor="" className="text-sm lg:text-md">
          {label}
        </label>
        <div
          className={`flex  ${
            error
              ? "border-error-500 "
              : "border-grey-100 group-focus-within:border-primary-100 "
          } rounded-lg gap-3 items-center justify-between border border-solid   p-4`}
        >
          <input
            type={inputType}
            id={id}
            name={name}
            className="w-full focus:outline-none text-sm lg:text-md"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {iconSrc && (
            <Image src={iconSrc} alt={`${label} icon`} width={20} height={20} />
          )}
          {icon && icon}
        </div>
      </div>
      {error && <p className="text-xs text-error-500">{errorText}</p>}
    </div>
  );
};

export default InputField;
