import Link from "next/link";
import React from "react";
type Props = {
  size?: "sm" | "lg";
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
  icon_style?: "" | "leading-icon" | "trailing icon" | "icon-only";
  text?: string;
  onClick?: () => void;
  iconComponent?: React.ReactNode;
  iconcolor?: string;
  className?: string;
};

const TextButton = ({
  text = "",
  onClick,
  size = "sm",
  disabled = false,
  icon_style = "", //when there is no icon style and icon at all
  iconComponent,
  iconcolor,
  className,
  type = "secondary",
}: Props) => {
  return (
    <div>
      <Link href={""}>
        {" "}
        <button
          onClick={onClick}
          disabled={disabled}
          className={` font-semibold  flex gap-[8px]
            ${className}
           ${size == "sm" && "text-sm  "}
            ${size == "lg" && "text-md  "}
           
             
                   ${
                     type === "primary" &&
                     "text-primary-600  hover:text-primary-700 focus:text-primary-800 disabled:text-grey-200"
                   }

                   ${
                     type === "secondary" &&
                     "text-primary-600  hover:text-primary-700 focus:text-primary-800 disabled:text-grey-200"
                   }
                  ${
                    type === "secondary" &&
                    "text-grey-500  hover:text-grey-300 focus:text-grey-700 disabled:text-grey-100"
                  }
                   ${
                     type === "destructive" &&
                     "text-error-500  hover:text-error-200 focus:text-error-700 disabled:text-error-100"
                   }
              `}
        >
          {iconComponent && icon_style === "leading-icon" && iconComponent}
          {text}

          {iconComponent && icon_style === "trailing icon" && iconComponent}
        </button>
      </Link>
    </div>
  );
};

export default TextButton;
