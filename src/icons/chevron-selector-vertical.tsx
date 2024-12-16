import React from "react";

type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };

const ChevronSelectorVertical = ({ color, width = 20, height = 20 }: Props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.24408 11.9107C5.56951 11.5853 6.09715 11.5853 6.42259 11.9107L10 15.4882L13.5774 11.9107C13.9028 11.5853 14.4305 11.5853 14.7559 11.9107C15.0814 12.2362 15.0814 12.7638 14.7559 13.0893L10.5893 17.2559C10.2638 17.5814 9.73618 17.5814 9.41074 17.2559L5.24408 13.0893C4.91864 12.7638 4.91864 12.2362 5.24408 11.9107Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.24408 8.08926C5.56951 8.41469 6.09715 8.41469 6.42259 8.08926L10 4.51184L13.5774 8.08926C13.9028 8.41469 14.4305 8.41469 14.7559 8.08926C15.0814 7.76382 15.0814 7.23618 14.7559 6.91074L10.5893 2.74408C10.2638 2.41864 9.73618 2.41864 9.41074 2.74408L5.24408 6.91074C4.91864 7.23618 4.91864 7.76382 5.24408 8.08926Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ChevronSelectorVertical;
