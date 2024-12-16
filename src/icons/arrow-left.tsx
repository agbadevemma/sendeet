import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const ArrowLeft = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M15.8333 10H4.16666M4.16666 10L9.99999 15.8334M4.16666 10L9.99999 4.16669"
          stroke="#48505E"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowLeft;
