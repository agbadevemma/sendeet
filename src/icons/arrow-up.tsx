import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const ArrowUp = ({ color, width = 24, height = 20 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10.0001 15.8334V4.16675M10.0001 4.16675L4.16675 10.0001M10.0001 4.16675L15.8334 10.0001"
          stroke={color}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowUp;
