import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const CheckCircle2 = ({ color, width = 30, height = 30 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25ZM19.5943 13.4218C20.1034 12.9555 20.1381 12.1649 19.6718 11.6557C19.2055 11.1466 18.4149 11.1119 17.9057 11.5782L13.2907 15.805L12.0943 14.7092C11.5852 14.243 10.7945 14.2777 10.3282 14.7868C9.86192 15.2959 9.89664 16.0866 10.4057 16.5529L12.4464 18.4218C12.9242 18.8594 13.6571 18.8594 14.1349 18.4218L19.5943 13.4218Z"
          fill="#0F973D"
        />
      </svg>
    </div>
  );
};

export default CheckCircle2;
