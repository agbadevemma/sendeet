import React from "react";
type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const GlobeAlt = ({ color, width = 20, height = 20 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_111_4099)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0.833496C7.0005 0.833496 4.33742 2.27508 2.66646 4.49968C1.51564 6.0318 0.833374 7.93751 0.833374 10.0002C0.833374 12.0628 1.51564 13.9685 2.66646 15.5006C4.33742 17.7252 7.0005 19.1668 10 19.1668C12.9996 19.1668 15.6627 17.7252 17.3336 15.5006C18.4844 13.9685 19.1667 12.0628 19.1667 10.0002C19.1667 7.93751 18.4844 6.0318 17.3336 4.49968C15.6627 2.27508 12.9996 0.833496 10 0.833496ZM4.08461 5.76483C4.27141 5.74751 4.49145 5.7276 4.73707 5.70627C4.66886 6.71844 4.60916 7.91229 4.58989 9.16683H2.54575C2.68287 7.92507 3.1229 6.77562 3.79051 5.79253C3.87589 5.78436 3.97445 5.77505 4.08461 5.76483ZM3.79051 14.2078C3.1229 13.2247 2.68287 12.0753 2.54575 10.8335H4.58989C4.60916 12.088 4.66886 13.2819 4.73707 14.2941C4.49145 14.2727 4.27141 14.2528 4.08461 14.2355C3.97445 14.2253 3.87589 14.216 3.79051 14.2078ZM6.25675 10.8335C6.27752 12.1457 6.34372 13.393 6.4169 14.4271C7.31209 14.4907 8.28528 14.5472 9.16671 14.5712V10.8335H6.25675ZM6.5995 16.5551C6.60454 16.6044 6.60936 16.6509 6.6139 16.6943C7.39602 17.0907 8.25684 17.3539 9.16671 17.4544V16.2384C8.32301 16.2164 7.40653 16.1656 6.55549 16.1075C6.57054 16.2664 6.58463 16.4091 6.59732 16.5337C6.59805 16.5409 6.59878 16.548 6.5995 16.5551ZM13.3862 16.6943C12.6041 17.0907 11.7432 17.3539 10.8334 17.4544V16.2384C11.6771 16.2164 12.5935 16.1656 13.4446 16.1075C13.4295 16.2664 13.4154 16.4091 13.4028 16.5337C13.3969 16.5911 13.3914 16.6447 13.3862 16.6943ZM13.5832 14.4271C12.688 14.4907 11.7148 14.5472 10.8334 14.5712V10.8335H13.7433C13.7226 12.1457 13.6564 13.393 13.5832 14.4271ZM13.5832 5.57322C13.6564 6.60734 13.7226 7.85465 13.7433 9.16683H10.8334V5.42913C11.7148 5.45316 12.688 5.50961 13.5832 5.57322ZM13.4446 3.89284C12.5935 3.83468 11.6771 3.78395 10.8334 3.76189V2.54591C11.7432 2.64643 12.6041 2.90966 13.3862 3.30607C13.3914 3.35563 13.3969 3.40921 13.4028 3.46661C13.4154 3.59125 13.4295 3.73392 13.4446 3.89284ZM6.55549 3.89284C7.40653 3.83468 8.32301 3.78395 9.16671 3.76189V2.54591C8.25684 2.64643 7.39602 2.90966 6.6139 3.30607C6.60871 3.35563 6.60316 3.4092 6.59732 3.46661C6.58463 3.59125 6.57054 3.73392 6.55549 3.89284ZM9.16671 5.42913C8.28528 5.45316 7.31209 5.50961 6.4169 5.57322C6.34372 6.60734 6.27752 7.85465 6.25675 9.16683H9.16671V5.42913ZM15.9155 5.76483C15.7287 5.74751 15.5086 5.7276 15.263 5.70627C15.3312 6.71844 15.3909 7.91229 15.4102 9.16683H17.4543C17.3172 7.92507 16.8772 6.77562 16.2096 5.79253C16.1242 5.78436 16.0256 5.77505 15.9155 5.76483ZM15.263 14.2941C15.3312 13.2819 15.3909 12.088 15.4102 10.8335H17.4543C17.3172 12.0753 16.8772 13.2247 16.2096 14.2078C16.1242 14.216 16.0256 14.2253 15.9155 14.2355C15.7287 14.2528 15.5086 14.2727 15.263 14.2941Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_111_4099">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GlobeAlt;