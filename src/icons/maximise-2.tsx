import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const Maximise2 = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M12.5 2.5H17.5M17.5 2.5V7.5M17.5 2.5L11.6667 8.33333M7.5 17.5H2.5M2.5 17.5V12.5M2.5 17.5L8.33333 11.6667"
          stroke="#101928"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Maximise2;
