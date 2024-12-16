import React from "react";
import Image from "next/image";

type Props = {
  id?: string;
  name?: string;
  checked?: boolean;
  indeterminate?: boolean; // Add indeterminate prop
  onClick?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const Checkbox = ({
  id = "",
  name,
  checked = false, // Default to false
  indeterminate = false, // Default to false (not indeterminate)
  onClick,
  onBlur,
  className,
}: Props) => {
  return (
    <div onClick={onClick} className={`${className}`}>
      
      <div
        className={`rounded-[6px] border border-solid cursor-pointer ${
          checked||indeterminate
            ? "bg-[#E6F7FE] border-[#00AAF7] text-primary-500 px-[3px]"
            : "border-[#D0D5DD]"
        }  h-[20px] w-[20px]  flex items-center justify-center`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="#00AAF7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {indeterminate && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
          >
            <path
              d="M1.91675 1H10.0834"
              stroke="#00AAF7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
