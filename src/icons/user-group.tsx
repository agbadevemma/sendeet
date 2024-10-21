import React from "react";

type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };
const UserGroup = ({ color, width = 25, height = 24 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0001 4.16667C8.15915 4.16667 6.66677 5.65906 6.66677 7.50001C6.66677 9.34095 8.15915 10.8333 10.0001 10.8333C11.8411 10.8333 13.3334 9.34095 13.3334 7.50001C13.3334 5.65906 11.8411 4.16667 10.0001 4.16667ZM8.33344 7.50001C8.33344 6.57953 9.07963 5.83334 10.0001 5.83334C10.9206 5.83334 11.6668 6.57953 11.6668 7.50001C11.6668 8.42048 10.9206 9.16667 10.0001 9.16667C9.07963 9.16667 8.33344 8.42048 8.33344 7.50001Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0001 18.3333C9.0527 18.3333 7.68666 18.1094 6.64997 17.633C6.14144 17.3993 5.59579 17.0527 5.27393 16.5341C5.10402 16.2603 4.99667 15.9376 5.00019 15.5784C5.00366 15.2227 5.11523 14.8853 5.29793 14.5761C6.13332 13.1623 7.86639 11.6667 10.0001 11.6667C12.1338 11.6667 13.8669 13.1623 14.7023 14.5761C14.885 14.8853 14.9965 15.2227 15 15.5784C15.0035 15.9376 14.8962 16.2603 14.7263 16.5341C14.4044 17.0527 13.8588 17.3993 13.3502 17.633C12.3135 18.1094 10.9475 18.3333 10.0001 18.3333ZM6.73282 15.4239C6.66899 15.5319 6.66686 15.5856 6.66677 15.5947C6.6667 15.6007 6.6665 15.6173 6.69003 15.6552C6.7562 15.7618 6.94835 15.9359 7.34592 16.1186C8.12144 16.475 9.2408 16.6667 10.0001 16.6667C10.7594 16.6667 11.8788 16.475 12.6543 16.1186C13.0519 15.9359 13.244 15.7618 13.3102 15.6552C13.3337 15.6173 13.3335 15.6011 13.3334 15.5951C13.3333 15.586 13.3312 15.5319 13.2674 15.4239C12.6197 14.3278 11.353 13.3333 10.0001 13.3333C8.64718 13.3333 7.38049 14.3278 6.73282 15.4239Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.08344 10C2.08344 8.61929 3.20272 7.50001 4.58344 7.50001C5.96415 7.50001 7.08344 8.61929 7.08344 10C7.08344 11.3807 5.96415 12.5 4.58344 12.5C3.20272 12.5 2.08344 11.3807 2.08344 10ZM4.58344 9.16667C4.1232 9.16667 3.7501 9.53977 3.7501 10C3.7501 10.4602 4.1232 10.8333 4.58344 10.8333C5.04367 10.8333 5.41677 10.4602 5.41677 10C5.41677 9.53977 5.04367 9.16667 4.58344 9.16667Z"
          fill={color}
        />
        <path
          d="M2.41321 16.2038C2.2086 16.6161 1.70853 16.7844 1.29628 16.5798C0.884026 16.3752 0.715708 15.8751 0.920326 15.4628C1.22648 14.846 1.68988 14.2267 2.27281 13.7529C2.85597 13.2788 3.60324 12.9167 4.45608 12.9167C4.91632 12.9167 5.28941 13.2898 5.28941 13.75C5.28941 14.2102 4.91632 14.5833 4.45608 14.5833C4.08859 14.5833 3.70075 14.74 3.3241 15.0461C2.94723 15.3525 2.62613 15.7749 2.41321 16.2038Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1752 10C13.1752 8.61929 14.2944 7.50001 15.6752 7.50001C17.0559 7.50001 18.1752 8.61929 18.1752 10C18.1752 11.3807 17.0559 12.5 15.6752 12.5C14.2944 12.5 13.1752 11.3807 13.1752 10ZM15.6752 9.16667C15.2149 9.16667 14.8418 9.53977 14.8418 10C14.8418 10.4602 15.2149 10.8333 15.6752 10.8333C16.1354 10.8333 16.5085 10.4602 16.5085 10C16.5085 9.53977 16.1354 9.16667 15.6752 9.16667Z"
          fill={color}
        />
        <path
          d="M19.0835 15.4628C19.2882 15.8751 19.1198 16.3752 18.7076 16.5798C18.2953 16.7844 17.7953 16.6161 17.5907 16.2038C17.3777 15.7749 17.0566 15.3525 16.6798 15.0461C16.3031 14.74 15.9153 14.5833 15.5478 14.5833C15.0876 14.5833 14.7145 14.2102 14.7145 13.75C14.7145 13.2898 15.0876 12.9167 15.5478 12.9167C16.4006 12.9167 17.1479 13.2788 17.7311 13.7529C18.314 14.2267 18.7774 14.846 19.0835 15.4628Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default UserGroup;
