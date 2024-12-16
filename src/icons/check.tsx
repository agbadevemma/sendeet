import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const Check = ({ color, width = 25, height = 25 }: Props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1866 7.227C21.5882 6.84778 21.6062 6.21488 21.227 5.81337C20.8478 5.41185 20.2149 5.39378 19.8134 5.773L8.85339 16.1245L5.18664 12.6613C4.78513 12.2821 4.15222 12.3001 3.773 12.7017C3.39378 13.1032 3.41185 13.7361 3.81336 14.1153L8.16675 18.227C8.55215 18.591 9.15463 18.591 9.54003 18.227L21.1866 7.227Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Check;
