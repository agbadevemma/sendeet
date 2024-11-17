import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const ChevronUp = ({ color, width = 20, height = 21 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M8.85765 6.8822C9.4994 6.2782 10.5004 6.2782 11.1422 6.8822L17.6544 13.0113C17.9895 13.3268 18.0055 13.8542 17.6901 14.1893C17.3747 14.5244 16.8473 14.5404 16.5121 14.225L9.99992 8.09587L3.48773 14.225C3.15258 14.5404 2.62518 14.5244 2.30975 14.1893C1.99432 13.8542 2.01031 13.3268 2.34545 13.0113L8.85765 6.8822Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ChevronUp;
