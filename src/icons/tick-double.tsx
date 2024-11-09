import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const TickDouble = ({ color, width = 20, height = 21 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M2.85419 12.1875L5.97919 15.3125M10.3542 10.3125L13.4792 7.1875M7.85419 12.1875L10.9792 15.3125L18.4792 7.1875"
          stroke="#667085"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default TickDouble;
