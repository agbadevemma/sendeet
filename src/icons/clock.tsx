import React from "react";
type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
  

const Clock = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M10.0001 7.08366C10.0001 6.62342 9.62699 6.25033 9.16675 6.25033C8.70651 6.25033 8.33342 6.62342 8.33342 7.08366V11.2503C8.33342 11.7106 8.70651 12.0837 9.16675 12.0837H11.6667C12.127 12.0837 12.5001 11.7106 12.5001 11.2503C12.5001 10.7901 12.127 10.417 11.6667 10.417H10.0001V7.08366Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699ZM3.33341 10.0003C3.33341 6.31843 6.31818 3.33366 10.0001 3.33366C13.682 3.33366 16.6667 6.31843 16.6667 10.0003C16.6667 13.6822 13.682 16.667 10.0001 16.667C6.31818 16.667 3.33341 13.6822 3.33341 10.0003Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Clock;
