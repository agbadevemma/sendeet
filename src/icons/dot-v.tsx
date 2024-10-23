import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
  
const DotV = ({ color, width = 16, height = 16 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M9 2.66667C9 3.21895 8.55228 3.66667 8 3.66667C7.44772 3.66667 7 3.21895 7 2.66667C7 2.11438 7.44772 1.66667 8 1.66667C8.55228 1.66667 9 2.11438 9 2.66667Z"
          fill={color}
        />
        <path
          d="M9 8C9 8.55229 8.55228 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"
          fill={color}
        />
        <path
          d="M8 14.3333C8.55228 14.3333 9 13.8856 9 13.3333C9 12.781 8.55228 12.3333 8 12.3333C7.44772 12.3333 7 12.781 7 13.3333C7 13.8856 7.44772 14.3333 8 14.3333Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default DotV;
