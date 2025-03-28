import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};
const CheckboxChecked = ({ color, width = 25, height = 25 }: Props) => {
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
          d="M11.1451 6.46431C11.4015 6.2001 11.3952 5.77803 11.131 5.5216C10.8668 5.26517 10.4447 5.27148 10.1883 5.53569L6.78446 9.04278L5.81173 8.04053C5.5553 7.77632 5.13324 7.77001 4.86903 8.02644C4.60482 8.28287 4.59851 8.70493 4.85494 8.96914L6.30607 10.4643C6.43161 10.5937 6.6042 10.6667 6.78446 10.6667C6.96473 10.6667 7.13731 10.5937 7.26286 10.4643L11.1451 6.46431Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.66667 2C3.19391 2 2 3.19391 2 4.66667V11.3333C2 12.8061 3.19391 14 4.66667 14H11.3333C12.8061 14 14 12.8061 14 11.3333V4.66667C14 3.19391 12.8061 2 11.3333 2H4.66667ZM3.33333 4.66667C3.33333 3.93029 3.93029 3.33333 4.66667 3.33333H11.3333C12.0697 3.33333 12.6667 3.93029 12.6667 4.66667V11.3333C12.6667 12.0697 12.0697 12.6667 11.3333 12.6667H4.66667C3.93029 12.6667 3.33333 12.0697 3.33333 11.3333V4.66667Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default CheckboxChecked;
