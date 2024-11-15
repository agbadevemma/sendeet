import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };

const ChevronDown = ({ color, width = 12, height = 12 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1.40732 4.3641L5.31464 8.04158C5.69969 8.40398 6.30032 8.40398 6.68537 8.04158L10.5927 4.3641C10.7938 4.17484 10.8034 3.85841 10.6141 3.65732C10.4248 3.45623 10.1084 3.44664 9.90732 3.6359L6 7.31338L2.09268 3.6359C1.8916 3.44664 1.57516 3.45623 1.3859 3.65732C1.19664 3.85841 1.20623 4.17484 1.40732 4.3641Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ChevronDown;
