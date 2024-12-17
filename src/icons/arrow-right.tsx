import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };

const ArrowRight = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334"
          stroke={color}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowRight;
