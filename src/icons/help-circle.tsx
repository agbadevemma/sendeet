import React from "react";

type Props = {
  color: string;
  width?: number;
  height?: number;
};

const HelpCircle = ({ color, width = 16, height = 16 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_2866_9437)">
          <path
            d="M6.05967 6.00004C6.21641 5.55449 6.52578 5.17878 6.93298 4.93946C7.34018 4.70015 7.81894 4.61267 8.28446 4.69252C8.74998 4.77236 9.17222 5.01439 9.47639 5.37573C9.78057 5.73706 9.94705 6.19439 9.94634 6.66671C9.94634 8.00004 7.94634 8.66671 7.94634 8.66671M7.99967 11.3334H8.00634M14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004Z"
            stroke="#98A2B3"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2866_9437">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default HelpCircle;
