import Image from "next/image";
import React from "react";

type Props = {
  size?: "sm" | "lg";
  type?: "";
  disabled?:false;
  state?: "default" | "hover" | "focused" | "disabled";
  icon_style?: "leading-icon" | "trailing icon" | "icon-only";
  text?: string;
  onClick?: () => void;
  iconSrc?: string;
  className?: string;
};

const Button = ({
  text = "",
  onClick,
  disabled,
  iconSrc,
  className,
  type 
}: Props) => {
  return (
    <div>
      {" "}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`font-semibold text-md py-[8px] px-[12px] lg:px-[24px] lg:py-[16px] w-full  rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.24),_0px_0px_0px_1px_#00AAF7]  bg-[#00AAF7] bg-gradient-to-b flex items-center justify-center gap-2 from-white/[0.2] to-[#0079AF33]/[0.2]   text-white ${className}`}
        aria-label={text}
      >
        {text}sdsd
        {iconSrc && (
          <span className="mr-2">
            <Image alt="icon" src={iconSrc} />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
