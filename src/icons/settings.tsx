import React from "react";

type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };

const Settings = ({ color, width = 20, height = 20 }: Props) => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99948 5.00004C7.23806 5.00004 4.99948 7.23861 4.99948 10C4.99948 12.7615 7.23806 15 9.99948 15C12.7609 15 14.9995 12.7615 14.9995 10C14.9995 7.23861 12.7609 5.00004 9.99948 5.00004ZM6.66615 10C6.66615 8.15909 8.15854 6.6667 9.99948 6.6667C11.8404 6.6667 13.3328 8.15909 13.3328 10C13.3328 11.841 11.8404 13.3334 9.99948 13.3334C8.15854 13.3334 6.66615 11.841 6.66615 10Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0843 1.69079C10.9219 0.566247 9.07708 0.566247 7.91464 1.69079C7.61939 1.97641 7.20885 2.1098 6.8021 2.05227C5.20069 1.82576 3.7082 2.91012 3.42876 4.50315C3.35778 4.90777 3.10405 5.257 2.74117 5.44953C1.31246 6.20757 0.742379 7.9621 1.45267 9.41514C1.63308 9.7842 1.63308 10.2159 1.45267 10.5849C0.742378 12.038 1.31246 13.7925 2.74117 14.5505C3.10405 14.7431 3.35778 15.0923 3.42876 15.4969C3.7082 17.09 5.20069 18.1743 6.8021 17.9478C7.20885 17.8903 7.61939 18.0237 7.91464 18.3093C9.07708 19.4338 10.9219 19.4338 12.0843 18.3093C12.3796 18.0237 12.7901 17.8903 13.1969 17.9478C14.7983 18.1743 16.2908 17.09 16.5702 15.4969C16.6412 15.0923 16.8949 14.7431 17.2578 14.5505C18.6865 13.7925 19.2566 12.038 18.5463 10.5849C18.3659 10.2159 18.3659 9.7842 18.5463 9.41514C19.2566 7.9621 18.6865 6.20757 17.2578 5.44953C16.8949 5.257 16.6412 4.90777 16.5702 4.50315C16.2908 2.91012 14.7983 1.82576 13.1969 2.05227C12.7901 2.1098 12.3796 1.97641 12.0843 1.69079ZM9.07347 2.88866C9.58978 2.38918 10.4092 2.38918 10.9255 2.88866C11.5902 3.53172 12.5145 3.83204 13.4303 3.70251C14.1416 3.6019 14.8045 4.08354 14.9286 4.79111C15.0884 5.70208 15.6596 6.48833 16.4766 6.92181C17.1112 7.2585 17.3644 8.0378 17.049 8.68319C16.6428 9.51411 16.6428 10.486 17.049 11.3169C17.3644 11.9623 17.1112 12.7416 16.4766 13.0783C15.6596 13.5117 15.0884 14.298 14.9286 15.209C14.8045 15.9165 14.1416 16.3982 13.4303 16.2976C12.5145 16.168 11.5902 16.4683 10.9255 17.1114C10.4092 17.6109 9.58978 17.6109 9.07347 17.1114C8.40874 16.4683 7.48445 16.168 6.56869 16.2976C5.85739 16.3982 5.19448 15.9165 5.07036 15.209C4.91056 14.298 4.33932 13.5117 3.52232 13.0783C2.88773 12.7416 2.63452 11.9623 2.95001 11.3169C3.35618 10.486 3.35618 9.51411 2.95001 8.68319C2.63452 8.0378 2.88773 7.2585 3.52232 6.92181C4.33932 6.48833 4.91056 5.70208 5.07036 4.79111C5.19448 4.08354 5.85739 3.6019 6.56869 3.70251C7.48445 3.83204 8.40874 3.53172 9.07347 2.88866Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Settings;
