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

const RadioButton = ({
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
        className={`rounded-full border border-solid cursor-pointer ${
          checked || indeterminate
            ? "bg-[#E6F7FE] border-[#00AAF7] text-primary-500 px-[3px]"
            : "border-[#D0D5DD]"
        }  h-4 w-4  flex items-center justify-center`}
      >
        {checked && (
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#00AAF7" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default RadioButton;
