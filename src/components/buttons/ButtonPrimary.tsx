import Image from "next/image";
import React from "react";

type Props = {
  size?: "sm" | "lg";
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "text"
    | "greys"
    | "destructive";

  disabled?: boolean;
  state?: "default" | "hover" | "focused" | "disabled";
  icon_style?: "" | "leading-icon" | "trailing icon" | "icon-only";
  text?: string;
  onClick?: () => void;
  iconSrc?: string;
  className?: string;
};

const Button = ({
  text = "",
  onClick,
  size = "sm",
  disabled = false,
  icon_style = "", //when there is no icon style and icon at all
  iconSrc,
  className,
  type = "secondary",
}: Props) => {
  return (
    <div>
      {" "}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`font-semibold 
           ${size == "sm" && "text-sm font-medium  py-[8px] px-[16px]"}
            ${size == "lg" && "text-md font-medium  py-[16px] px-[24px]"}
             ${
               size == "sm" && icon_style === "icon-only" ? "text-sm  p-2 " : ""
             }
             ${
               size == "lg" && icon_style === "icon-only" ? "text-sm  p-4 " : ""
             }
              ${
                size == "sm" &&
                (icon_style === "leading-icon" || "trailing icon")
                  ? "text-sm font-semibold py-[8px] px-[12px]"
                  : ""
              }
              ${
                size == "lg" &&
                (icon_style === "leading-icon" || "trailing icon")
                  ? "text-sm font-semibold py-[16px]"
                  : ""
              }
           ${
             type === "primary" &&
             " hover:bg-primary-600 bg-primary-500  hover:from-transparent hover:to-transparent  text-white from-white/[0.2] to-[#0079AF33]/[0.2]  bg-gradient-to-b focus:bg-primary-700 hover:shadow-transparent focus:shadow-transparent disabled:bg-primary-100 disabled:from-transparent disabled:to-transparent  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.24),_0px_0px_0px_1px_#00AAF7] disabled:shadow-transparent"
           }

            ${
              type === "secondary" &&
              " hover:border-grey-50 hover:bg-[#F9FAFB]  text-grey-800 hover:from-transparent hover:to-transparent  border border-white border-solid  bg-gradient-to-b from-white to-white/60 hover:shadow-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.10),_0px_0px_0px_1px_rgba(185,_189,_199,_0.20)] focus:shadow-[0px_0px_0px_4px_#F2F4F7] hover:shadow-transparent focus:border-grey-100  disabled:from-transparent disabled:to-transparent   disabled:shadow-transparent disabled:border-grey-50 disabled:text-grey-300 disabled:bg-white "
            }
           w-full  rounded-lg flex items-center justify-center gap-2    ${className}`}
        aria-label={text}
      >
        {text}dfsadfa
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
