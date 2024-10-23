import Image from "next/image";
import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "text"
    | "grey"
    | "destructive"
    | "border-destructive";

  disabled?: boolean;
  state?: "default" | "hover" | "focused" | "disabled";
  icon_style?: "txt" | "leading-icon" | "trailing icon" | "icon-only";
  text?: string;
  onClick?: () => void;
  iconComponent?: React.ReactNode;
  iconcolor?: string;
  className?: string;
};

const Button = ({
  text = "",
  onClick,
  size = "sm",
  disabled = false,
  icon_style = "txt", //when there is no icon style and icon at all
  iconComponent,
  iconcolor,
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
           ${
             size == "sm" &&
             icon_style === "txt" &&
             "text-sm font-medium  py-[8px] px-[6px]"
           }
            ${
              size == "md" &&
              icon_style === "txt" &&
              "text-sm font-medium  py-[10px] px-[16px] text-nowrap"
            }
            ${
              size === "lg" &&
              icon_style === "txt" &&
              "text-md font-semibold py-4 px-6"
            }
             ${size == "sm" && icon_style === "icon-only" ? " p-2 " : ""}
             ${
               size == "lg" && icon_style === "icon-only"
                 ? "h-10 w-10 flex justify-center items-center"
                 : ""
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
                  ? "text-md font-semibold  p-4"
                  : ""
              }
           ${
             type === "primary" &&
             " hover:bg-primary-600 bg-primary-500  hover:from-transparent hover:to-transparent  text-white from-white/[0.2] to-[#0079AF33]/[0.2]  bg-gradient-to-b focus:bg-primary-700 hover:shadow-transparent  focus:to-transparent focus:from-transparent focus:shadow-transparent disabled:bg-primary-100 disabled:from-transparent disabled:to-transparent  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.24),_0px_0px_0px_1px_#00AAF7] disabled:shadow-transparent"
           }

            ${
              type === "secondary" &&
              " hover:border-grey-50 hover:bg-[#F9FAFB]  text-grey-800 hover:from-transparent hover:to-transparent  border border-white border-solid    hover:shadow-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.10),_0px_0px_0px_1px_rgba(185,_189,_199,_0.20)] focus:shadow-[0px_0px_0px_4px_#F2F4F7] hover:shadow-transparent focus:border-grey-100  disabled:from-transparent disabled:to-transparent   disabled:shadow-transparent disabled:border-grey-50 disabled:text-grey-300 disabled:bg-white "
            }
            ${
              type === "tertiary" &&
              " bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-500 focus:bg-white focus:text-primary-800 disabled:bg-white disabled:text-grey-200 "
            }

              ${
                type === "grey" &&
                " bg-grey-500 text-white hover:bg-grey-800 focus:bg-grey-900  disabled:bg-grey-100 "
              }
              ${
                type === "destructive" &&
                " bg-error-500 text-white hover:bg-error-400 focus:bg-error-700  disabled:bg-grey-100 "
              }
               ${
                 type === "border-destructive" &&
                 "border-[1.5px] border-solid border-error-500 text-error-500 hover:bg-error-50 hover:text-error-600 focus:border-error-700 focus:border-[2px]  focus:bg-error-50 disabled:border-grey-50 disabled:bg-white disabled:text-grey-200  "
               }
           w-full  rounded-lg flex items-center justify-center gap-2    ${className}`}
        aria-label={text}
      >
        {iconComponent && icon_style === "leading-icon" && iconComponent}
        {icon_style === "icon-only" ? iconComponent : text}
        {iconComponent && icon_style === "trailing icon" && iconComponent}
      </button>
    </div>
  );
};

export default Button;
