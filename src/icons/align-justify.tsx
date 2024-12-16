import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const AlignJustify = ({ color = "black", width = 25, height = 24 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M3.5 4H21.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H21.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 20H21.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AlignJustify;
