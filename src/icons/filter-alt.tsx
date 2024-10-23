import React from "react";


type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };

const FilterAlt = ({ color = "#383E49", width = 21, height = 20 }: Props) => {
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
          d="M3.83334 5.00001C3.83334 4.53977 4.20644 4.16667 4.66668 4.16667H16.3333C16.7936 4.16667 17.1667 4.53977 17.1667 5.00001C17.1667 5.46024 16.7936 5.83334 16.3333 5.83334H4.66668C4.20644 5.83334 3.83334 5.46024 3.83334 5.00001Z"
          fill={color}
        />
        <path
          d="M5.50001 10C5.50001 9.53977 5.87311 9.16667 6.33334 9.16667H14.6667C15.1269 9.16667 15.5 9.53977 15.5 10C15.5 10.4602 15.1269 10.8333 14.6667 10.8333H6.33334C5.87311 10.8333 5.50001 10.4602 5.50001 10Z"
          fill={color}
        />
        <path
          d="M8.00001 14.1667C7.53977 14.1667 7.16668 14.5398 7.16668 15C7.16668 15.4602 7.53977 15.8333 8.00001 15.8333H13C13.4602 15.8333 13.8333 15.4602 13.8333 15C13.8333 14.5398 13.4602 14.1667 13 14.1667H8.00001Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default FilterAlt;
