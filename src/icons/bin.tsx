import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
  

const Bin = ({ color, width = 28, height = 28 }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M11.0831 2.04199C10.5982 2.04199 10.1638 2.34198 9.99207 2.79549L9.72422 3.50281C9.15001 3.44544 8.62096 3.38817 8.19268 3.34008C7.87254 3.30414 7.60937 3.27339 7.42656 3.25168L7.21569 3.22637L7.14407 3.21761C6.50463 3.13844 5.92116 3.59251 5.84197 4.23195C5.76279 4.87139 6.21697 5.45396 6.85642 5.53315L6.93434 5.54268L7.15131 5.56872C7.33838 5.59094 7.60657 5.62227 7.93233 5.65884C8.58328 5.73194 9.4668 5.82629 10.3938 5.91089C11.6442 6.02501 13.0148 6.12533 13.9998 6.12533C14.9848 6.12533 16.3554 6.02501 17.6058 5.91089C18.5328 5.82629 19.4163 5.73194 20.0673 5.65884C20.393 5.62227 20.6612 5.59094 20.8483 5.56872L21.0653 5.54268L21.143 5.53317C21.7825 5.45398 22.2368 4.87139 22.1576 4.23195C22.0784 3.59251 21.4959 3.13833 20.8564 3.2175L20.7839 3.22637L20.573 3.25168C20.3902 3.27339 20.1271 3.30414 19.8069 3.34008C19.3786 3.38817 18.8496 3.44544 18.2754 3.50281L18.0075 2.79549C17.8358 2.34198 17.4014 2.04199 16.9165 2.04199H11.0831Z"
          fill={color}
        />
        <path
          d="M12.8331 13.7087C12.8331 13.0643 12.3108 12.542 11.6665 12.542C11.0221 12.542 10.4998 13.0643 10.4998 13.7087V19.542C10.4998 20.1863 11.0221 20.7087 11.6665 20.7087C12.3108 20.7087 12.8331 20.1863 12.8331 19.542V13.7087Z"
          fill={color}
        />
        <path
          d="M16.3331 12.542C16.9775 12.542 17.4998 13.0643 17.4998 13.7087V19.542C17.4998 20.1863 16.9775 20.7087 16.3331 20.7087C15.6888 20.7087 15.1665 20.1863 15.1665 19.542V13.7087C15.1665 13.0643 15.6888 12.542 16.3331 12.542Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.0611 9.39264C22.1668 7.91241 20.8906 6.72573 19.4403 6.89334C17.9563 7.06485 15.6662 7.29199 13.9998 7.29199C12.3334 7.29199 10.0433 7.06485 8.55929 6.89334C7.10897 6.72573 5.83281 7.91241 5.93854 9.39264L6.93806 23.386C7.01383 24.4467 7.80393 25.3436 8.88821 25.5066C10.0509 25.6815 12.1844 25.9608 14.0011 25.9587C15.7956 25.9566 17.9377 25.6785 19.1056 25.5052C20.1917 25.3441 20.9858 24.4467 21.0618 23.3828L22.0611 9.39264ZM19.7082 9.21125C19.7122 9.21078 19.7153 9.21105 19.7153 9.21105L19.7184 9.21176C19.721 9.21265 19.7251 9.21478 19.7291 9.21859C19.7318 9.22112 19.7337 9.22419 19.7337 9.22419L19.7337 9.2264L18.7354 23.2013C17.5796 23.3721 15.5987 23.6235 13.9984 23.6253C12.3808 23.6272 10.4121 23.3755 9.26431 23.2036L8.26594 9.2264L8.26585 9.2242C8.26585 9.2242 8.26784 9.22112 8.2705 9.21859C8.27452 9.21478 8.27859 9.21265 8.28118 9.21176L8.28426 9.21105C8.28426 9.21105 8.28737 9.21078 8.29141 9.21125C9.77808 9.38306 12.1861 9.62533 13.9998 9.62533C15.8134 9.62533 18.2215 9.38306 19.7082 9.21125Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Bin;
