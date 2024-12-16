import React from "react";


type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };

const Money1 = ({ color, width = 20, height = 20 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4.16658 5.41666C3.70635 5.41666 3.33325 5.78976 3.33325 6.24999C3.33325 6.71023 3.70635 7.08333 4.16658 7.08333H5.83325C6.29349 7.08333 6.66658 6.71023 6.66658 6.24999C6.66658 5.78976 6.29349 5.41666 5.83325 5.41666H4.16658Z"
          fill={color}
        />
        <path
          d="M13.3333 6.24999C13.3333 5.78976 13.7063 5.41666 14.1666 5.41666H15.8333C16.2935 5.41666 16.6666 5.78976 16.6666 6.24999C16.6666 6.71023 16.2935 7.08333 15.8333 7.08333H14.1666C13.7063 7.08333 13.3333 6.71023 13.3333 6.24999Z"
          fill={color}
        />
        <path
          d="M4.16658 12.9167C3.70635 12.9167 3.33325 13.2898 3.33325 13.75C3.33325 14.2102 3.70635 14.5833 4.16658 14.5833H5.83325C6.29349 14.5833 6.66658 14.2102 6.66658 13.75C6.66658 13.2898 6.29349 12.9167 5.83325 12.9167H4.16658Z"
          fill={color}
        />
        <path
          d="M13.3333 13.75C13.3333 13.2898 13.7063 12.9167 14.1666 12.9167H15.8333C16.2935 12.9167 16.6666 13.2898 16.6666 13.75C16.6666 14.2102 16.2935 14.5833 15.8333 14.5833H14.1666C13.7063 14.5833 13.3333 14.2102 13.3333 13.75Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99992 7.49999C11.3806 7.49999 12.4999 8.61928 12.4999 9.99999C12.4999 11.3807 11.3806 12.5 9.99992 12.5C8.61921 12.5 7.49992 11.3807 7.49992 9.99999C7.49992 8.61928 8.61921 7.49999 9.99992 7.49999ZM10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99992 9.16666C9.53968 9.16666 9.16658 9.53976 9.16658 9.99999C9.16658 10.4602 9.53968 10.8333 9.99992 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.16658 3.33333C2.32564 3.33333 0.833252 4.82571 0.833252 6.66666V13.3333C0.833252 15.1743 2.32564 16.6667 4.16658 16.6667H15.8333C17.6742 16.6667 19.1666 15.1743 19.1666 13.3333V6.66666C19.1666 4.82571 17.6742 3.33333 15.8333 3.33333H4.16658ZM2.49992 6.66666C2.49992 5.74619 3.24611 4.99999 4.16658 4.99999H15.8333C16.7537 4.99999 17.4999 5.74619 17.4999 6.66666V13.3333C17.4999 14.2538 16.7537 15 15.8333 15H4.16658C3.24611 15 2.49992 14.2538 2.49992 13.3333V6.66666Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Money1;
