import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const ArrowUp2 = ({ color, width = 24, height = 20 }: Props) => {
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
          d="M5.64645 1.64645C5.84171 1.45118 6.15829 1.45118 6.35355 1.64645L8.35355 3.64645C8.54882 3.84171 8.54882 4.15829 8.35355 4.35355C8.15829 4.54882 7.84171 4.54882 7.64645 4.35355L6.5 3.20711V11C6.5 11.2761 6.27614 11.5 6 11.5C5.72386 11.5 5.5 11.2761 5.5 11V3.20711L4.35355 4.35355C4.15829 4.54882 3.84171 4.54882 3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645L5.64645 1.64645Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ArrowUp2;
