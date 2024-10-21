import React from "react";

type Props = {
  color: string;
  width?: number;  // Optional width prop
  height?: number; // Optional height prop
};

const SearchIcon = ({ color, width = 25, height = 24 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5 2C6.52944 2 2.5 6.02944 2.5 11C2.5 15.9706 6.52944 20 11.5 20C13.625 20 15.578 19.2635 17.1177 18.0319L20.7929 21.7071C21.1834 22.0976 21.8166 22.0976 22.2071 21.7071C22.5976 21.3166 22.5976 20.6834 22.2071 20.2929L18.5319 16.6177C19.7635 15.078 20.5 13.125 20.5 11C20.5 6.02944 16.4706 2 11.5 2ZM4.5 11C4.5 7.13401 7.63401 4 11.5 4C15.366 4 18.5 7.13401 18.5 11C18.5 14.866 15.366 18 11.5 18C7.63401 18 4.5 14.866 4.5 11Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
