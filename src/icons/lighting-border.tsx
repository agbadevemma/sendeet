import React from "react";
type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const LightingBorder = ({ color, width = 24, height = 24 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0002 3.92332C13.0002 2.63279 11.2417 2.2519 10.7077 3.42676L6.21832 13.3034C5.85718 14.0979 6.43801 15 7.31076 15H11.0002V20.0767C11.0002 21.3672 12.7586 21.7481 13.2926 20.5732L17.782 10.6966C18.1431 9.90204 17.5623 9 16.6896 9H13.0002V3.92332ZM8.55317 13L11.0002 7.61661V9.8C11.0002 10.4627 11.5374 11 12.2002 11H15.4472L13.0002 16.3834V14.2C13.0002 13.5373 12.4629 13 11.8002 13H8.55317Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default LightingBorder;
