import React from "react";
type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const Flag = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M4.67078 1.31784C4.97661 1.18629 5.33138 1.24938 5.5731 1.47829L5.5753 1.48037L5.58407 1.48863L5.62045 1.5226C5.65272 1.5526 5.70043 1.59666 5.76071 1.65146C5.88148 1.76125 6.05161 1.91318 6.24823 2.081C6.65132 2.42507 7.12931 2.80444 7.51393 3.03651C8.76989 3.79431 10.7508 4.01158 12.5544 3.99837C13.4317 3.99194 14.2228 3.932 14.7947 3.87351C15.0802 3.84431 15.3097 3.81562 15.4664 3.79445C15.5448 3.78386 15.6049 3.77517 15.6446 3.76925L15.6886 3.76257L15.6986 3.76099L15.7003 3.76071C15.9935 3.71338 16.29 3.82559 16.4781 4.05535C16.6663 4.28517 16.718 4.59781 16.6137 4.87596L15.5082 7.82398L17.3734 10.8084C17.5188 11.041 17.5404 11.3303 17.4311 11.582C17.3218 11.8336 17.0957 12.0154 16.8264 12.0679C12.4362 12.9248 9.78143 12.3331 5.83341 11.2831V17.9167C5.83341 18.3769 5.46032 18.75 5.00008 18.75C4.53984 18.75 4.16675 18.3769 4.16675 17.9167V2.08335C4.16675 1.7504 4.36493 1.44941 4.67078 1.31784ZM12.5666 5.66499C13.3221 5.65946 14.0149 5.61713 14.574 5.56845L13.8031 7.62408C13.7121 7.86696 13.7393 8.13839 13.8767 8.35835L15.3004 10.6361C11.8565 11.1215 9.56715 10.5557 5.83341 9.5581V3.89229C6.10224 4.09964 6.38538 4.30212 6.6529 4.46353C8.33595 5.47904 10.73 5.67844 12.5666 5.66499Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Flag;