import React from "react";

type Props = {
    color: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
  };


const UserCross = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M5.8335 5.83268C5.8335 3.5315 7.69898 1.66602 10.0002 1.66602C12.3013 1.66602 14.1668 3.5315 14.1668 5.83268C14.1668 8.13387 12.3013 9.99935 10.0002 9.99935C7.69898 9.99935 5.8335 8.13387 5.8335 5.83268ZM10.0002 3.33268C8.61945 3.33268 7.50016 4.45197 7.50016 5.83268C7.50016 7.21339 8.61945 8.33268 10.0002 8.33268C11.3809 8.33268 12.5002 7.21339 12.5002 5.83268C12.5002 4.45197 11.3809 3.33268 10.0002 3.33268Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.46302 18.2638C6.85834 18.8745 8.71641 19.166 10.0002 19.166C11.2839 19.166 13.142 18.8745 14.5373 18.2638C15.2223 17.964 15.919 17.535 16.3237 16.9139C16.5366 16.5872 16.6711 16.2024 16.6667 15.7729C16.6624 15.3472 16.5223 14.9394 16.2869 14.56C15.1457 12.7207 12.8112 10.8327 10.0002 10.8327C7.18915 10.8327 4.85459 12.7207 3.71343 14.56C3.47803 14.9394 3.33797 15.3472 3.3336 15.7729C3.32919 16.2024 3.46376 16.5872 3.67662 16.9139C4.08137 17.535 4.77802 17.964 5.46302 18.2638ZM5.00018 15.79C5.0008 15.7291 5.01993 15.6155 5.12966 15.4387C6.06478 13.9315 7.92988 12.4993 10.0002 12.4993C12.0704 12.4993 13.9355 13.9315 14.8707 15.4387C14.9804 15.6155 14.9995 15.7291 15.0001 15.79C15.0007 15.8469 14.9861 15.9138 14.9274 16.0039C14.7889 16.2164 14.4526 16.4816 13.8691 16.737C12.7273 17.2367 11.1058 17.4993 10.0002 17.4993C8.89453 17.4993 7.27303 17.2367 6.13127 16.737C5.54772 16.4816 5.21145 16.2164 5.07297 16.0039C5.01422 15.9138 4.9996 15.8469 5.00018 15.79Z"
          fill={color}
        />
        <path
          d="M17.8453 4.16606L18.4346 3.57681C18.76 3.25137 18.76 2.72373 18.4346 2.3983C18.1092 2.07286 17.5815 2.07286 17.2561 2.3983L16.6668 2.98755L16.0776 2.3983C15.7521 2.07286 15.2245 2.07286 14.8991 2.3983C14.5736 2.72373 14.5736 3.25137 14.8991 3.57681L15.4883 4.16606L14.8991 4.75532C14.5736 5.08076 14.5736 5.60839 14.8991 5.93383C15.2245 6.25927 15.7521 6.25927 16.0776 5.93383L16.6668 5.34457L17.2561 5.93383C17.5815 6.25927 18.1092 6.25927 18.4346 5.93383C18.76 5.60839 18.76 5.08076 18.4346 4.75532L17.8453 4.16606Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default UserCross;