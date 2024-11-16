import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const ArrowDown = ({ color, width = 20, height = 20 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 12 13"
        fill="none"
      >
        <path
          d="M8.35355 9.35355L6.35355 11.3536C6.15829 11.5488 5.84171 11.5488 5.64645 11.3536L3.64645 9.35355C3.45118 9.15829 3.45118 8.84171 3.64645 8.64645C3.84171 8.45118 4.15829 8.45118 4.35355 8.64645L5.5 9.79289V2C5.5 1.72386 5.72386 1.5 6 1.5C6.27614 1.5 6.5 1.72386 6.5 2V9.79289L7.64645 8.64645C7.84171 8.45118 8.15829 8.45118 8.35355 8.64645C8.54882 8.84171 8.54882 9.15829 8.35355 9.35355Z"
          fill="#971B17"
        />
      </svg>
    </div>
  );
};

export default ArrowDown;
