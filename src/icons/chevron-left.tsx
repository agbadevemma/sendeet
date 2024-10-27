import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const ChevronLeft = ({ color, width = 16, height = 16 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M5.27793 8.91415C4.79473 8.40075 4.79473 7.59991 5.27793 7.08651L10.1812 1.87675C10.4336 1.60864 10.8555 1.59585 11.1236 1.84819C11.3917 2.10054 11.4045 2.52245 11.1522 2.79057L6.24886 8.00033L11.1522 13.2101C11.4045 13.4782 11.3917 13.9001 11.1236 14.1525C10.8555 14.4048 10.4336 14.392 10.1812 14.1239L5.27793 8.91415Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ChevronLeft;
