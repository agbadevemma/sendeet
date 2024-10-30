import React from "react";


type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
const CloudUpload = ({ color, width = 28, height = 28}: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 28 29"
        fill="none"
      >
        <path
          d="M7.00008 11.583C7.00008 8.03918 9.87292 5.16634 13.4167 5.16634C16.5559 5.16634 19.1708 7.42172 19.7249 10.4008C19.8027 10.8186 20.1014 11.161 20.5047 11.2948C22.8272 12.0651 24.5001 14.2552 24.5001 16.833C24.5001 20.0547 21.8884 22.6663 18.6667 22.6663C18.0224 22.6663 17.5001 23.1887 17.5001 23.833C17.5001 24.4773 18.0224 24.9997 18.6667 24.9997C23.1771 24.9997 26.8334 21.3433 26.8334 16.833C26.8334 13.4585 24.7874 10.5645 21.8708 9.31918C20.8727 5.58401 17.4671 2.83301 13.4167 2.83301C8.58426 2.83301 4.66675 6.75052 4.66675 11.583C4.66675 11.7 4.66905 11.8165 4.67362 11.9325C2.57897 13.141 1.16675 15.4043 1.16675 17.9997C1.16675 21.8657 4.30075 24.9997 8.16675 24.9997C8.81108 24.9997 9.33342 24.4773 9.33342 23.833C9.33342 23.1887 8.81108 22.6663 8.16675 22.6663C5.58942 22.6663 3.50008 20.577 3.50008 17.9997C3.50008 16.0661 4.67629 14.4046 6.35684 13.6966C6.84315 13.4918 7.1314 12.986 7.05981 12.4632C7.02048 12.176 7.00008 11.8822 7.00008 11.583Z"
          fill={color}
        />
        <path
          d="M13.225 17.1277C13.667 16.7348 14.3331 16.7348 14.7752 17.1277L16.5252 18.6833C17.0068 19.1113 17.0501 19.8487 16.6221 20.3303C16.2476 20.7516 15.6363 20.8376 15.1667 20.5659V26.1663C15.1667 26.8107 14.6444 27.333 14.0001 27.333C13.3557 27.333 12.8334 26.8107 12.8334 26.1663V20.5659C12.3638 20.8376 11.7526 20.7516 11.3781 20.3303C10.95 19.8487 10.9934 19.1113 11.475 18.6833L13.225 17.1277Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default CloudUpload;
