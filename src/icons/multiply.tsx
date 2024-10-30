import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const Multiply = ({ color = "black", width = 16, height = 16 }: Props) => {
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
          d="M4.70057 3.75776C4.44022 3.49741 4.01811 3.49741 3.75776 3.75776C3.49741 4.01811 3.49741 4.44022 3.75776 4.70057L7.05759 8.0004L3.75776 11.3002C3.49741 11.5606 3.49741 11.9827 3.75776 12.243C4.01811 12.5034 4.44022 12.5034 4.70057 12.243L8.0004 8.94321L11.3002 12.243C11.5606 12.5034 11.9827 12.5034 12.243 12.243C12.5034 11.9827 12.5034 11.5606 12.243 11.3002L8.94321 8.0004L12.243 4.70057C12.5034 4.44022 12.5034 4.01811 12.243 3.75776C11.9827 3.49741 11.5606 3.49741 11.3002 3.75776L8.0004 7.05759L4.70057 3.75776Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Multiply;
