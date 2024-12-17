import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
  

const Verified = ({ color, width = 20, height = 20 }: Props) => {
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
          d="M13.7013 8.2523C14.0031 7.95161 13.9956 7.47125 13.6847 7.17941C13.3738 6.88757 12.8771 6.89475 12.5754 7.19544L8.56994 11.1869L7.42527 10.0462C7.12351 9.74551 6.62685 9.73833 6.31594 10.0302C6.00502 10.322 5.9976 10.8024 6.29936 11.1031L8.00698 12.8047C8.15472 12.9519 8.35781 13.035 8.56994 13.035C8.78206 13.035 8.98515 12.9519 9.13289 12.8047L13.7013 8.2523Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.963 2.43465C10.8687 1.41078 9.13197 1.41078 8.03765 2.43465C7.7597 2.69471 7.37321 2.81616 6.9903 2.76378C5.48272 2.55755 4.07768 3.54483 3.81462 4.99526C3.7478 5.36366 3.50894 5.68163 3.16732 5.85693C1.82232 6.54711 1.28565 8.14457 1.95432 9.46754C2.12415 9.80357 2.12415 10.1966 1.95431 10.5326C1.28565 11.8556 1.82232 13.4531 3.16732 14.1432C3.50894 14.3185 3.7478 14.6365 3.81462 15.0049C4.07768 16.4553 5.48272 17.4426 6.9903 17.2364C7.37321 17.184 7.7597 17.3055 8.03765 17.5655C9.13197 18.5894 10.8687 18.5894 11.963 17.5655C12.241 17.3055 12.6274 17.184 13.0104 17.2364C14.5179 17.4426 15.923 16.4553 16.186 15.0049C16.2529 14.6365 16.4917 14.3185 16.8333 14.1432C18.1783 13.4531 18.715 11.8556 18.0463 10.5326C17.8765 10.1966 17.8765 9.80357 18.0463 9.46754C18.715 8.14457 18.1783 6.54711 16.8333 5.85693C16.4917 5.68163 16.2529 5.36366 16.186 4.99526C15.923 3.54483 14.5179 2.55755 13.0104 2.76378C12.6274 2.81616 12.241 2.69471 11.963 2.43465ZM9.12857 3.5253C9.61463 3.07053 10.386 3.07053 10.8721 3.5253C11.4979 4.11079 12.368 4.38423 13.2301 4.2663C13.8997 4.17469 14.5238 4.61321 14.6406 5.25745C14.7911 6.08686 15.3288 6.80273 16.098 7.19741C16.6954 7.50396 16.9337 8.2135 16.6367 8.80112C16.2544 9.55765 16.2544 10.4425 16.6367 11.199C16.9337 11.7867 16.6954 12.4962 16.098 12.8028C15.3288 13.1974 14.7911 13.9133 14.6406 14.7427C14.5238 15.3869 13.8997 15.8255 13.2301 15.7339C12.368 15.6159 11.4979 15.8894 10.8721 16.4749C10.386 16.9296 9.61463 16.9296 9.12857 16.4749C8.50279 15.8894 7.63266 15.6159 6.77056 15.7339C6.10094 15.8255 5.47687 15.3869 5.36003 14.7427C5.20959 13.9133 4.67182 13.1974 3.90269 12.8028C3.30529 12.4962 3.06692 11.7867 3.36392 11.199C3.74629 10.4425 3.74629 9.55765 3.36392 8.80112C3.06692 8.2135 3.30529 7.50396 3.90269 7.19741C4.67182 6.80273 5.20959 6.08686 5.36003 5.25745C5.47687 4.61321 6.10094 4.17469 6.77056 4.2663C7.63266 4.38423 8.50279 4.11079 9.12857 3.5253Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Verified;
