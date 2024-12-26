import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
  
const Tag = ({ color, width = 20, height = 20 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M5.5 4.99935H5.50667M14.56 9.27268L9.78 14.0527C9.65617 14.1767 9.50912 14.275 9.34726 14.3421C9.18539 14.4092 9.01189 14.4437 8.83667 14.4437C8.66145 14.4437 8.48795 14.4092 8.32608 14.3421C8.16422 14.275 8.01717 14.1767 7.89334 14.0527L2.16667 8.33268V1.66602H8.83334L14.56 7.39268C14.8083 7.6425 14.9477 7.98043 14.9477 8.33268C14.9477 8.68493 14.8083 9.02287 14.56 9.27268Z"
          stroke={color}
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Tag;
