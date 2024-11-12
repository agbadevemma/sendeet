import React from "react";
type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const Copy = ({ color, width = 24, height = 24 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18.0006 15C19.6574 15 21.0006 13.6569 21.0006 12V6C21.0006 4.34315 19.6574 3 18.0006 3H14.0006C12.3437 3 11.0006 4.34315 11.0006 6V7.7H11.5006C13.1574 7.7 14.5006 9.04315 14.5006 10.7V15H18.0006Z"
          fill={color}
        />
        <path
          d="M6.00058 9C4.34373 9 3.00058 10.3431 3.00058 12V18C3.00058 19.6569 4.34373 21 6.00058 21H10.0006C11.6574 21 13.0006 19.6569 13.0006 18V12C13.0006 10.3431 11.6574 9 10.0006 9H6.00058Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Copy;
