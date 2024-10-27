import React from "react";

type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const PencilEdit = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M17.1634 2.42463C16.0412 1.30247 14.2219 1.30247 13.0997 2.42463L5.99515 9.52918C5.48516 10.0392 5.15434 10.7008 5.05234 11.4148L4.84646 12.8559C4.68933 13.9559 5.63214 14.8987 6.73208 14.7416L8.17322 14.5357C8.88721 14.4337 9.54885 14.1029 10.0588 13.5929L17.1634 6.48832C18.2856 5.36616 18.2856 3.54678 17.1634 2.42463ZM14.4528 3.45839C14.9225 3.13817 15.5682 3.18642 15.9849 3.60314C16.4016 4.01985 16.4499 4.66551 16.1296 5.13524L14.4528 3.45839ZM13.2594 4.62199L14.966 6.32866L8.88033 12.4144C8.62534 12.6694 8.29451 12.8348 7.93752 12.8858L6.49638 13.0916L6.70226 11.6505C6.75326 11.2935 6.91867 10.9627 7.17366 10.7077L13.2594 4.62199Z"
          fill={color}
        />
        <path
          d="M5.00002 1.6663C3.15907 1.6663 1.66669 3.15869 1.66669 4.99964V14.9996C1.66669 16.8406 3.15907 18.333 5.00002 18.333H15C16.841 18.333 18.3334 16.8406 18.3334 14.9996V9.99964C18.3334 9.5394 17.9603 9.1663 17.5 9.1663C17.0398 9.1663 16.6667 9.5394 16.6667 9.99964V14.9996C16.6667 15.9201 15.9205 16.6663 15 16.6663H5.00002C4.07955 16.6663 3.33335 15.9201 3.33335 14.9996V4.99964C3.33335 4.07916 4.07955 3.33297 5.00002 3.33297H7.23686C7.6971 3.33297 8.0702 2.95987 8.0702 2.49964C8.0702 2.0394 7.6971 1.6663 7.23686 1.6663H5.00002Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default PencilEdit;
