import React from "react";

type Props = {
    color: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
  };
const Coinstack = ({ color, width = 20, height = 20}: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1668 6.22495V5.4165C12.1668 4.22735 11.411 3.26992 10.4385 2.65106C9.45608 2.02591 8.14982 1.6665 6.75016 1.6665C5.3505 1.6665 4.04424 2.02591 3.06186 2.65106C2.08937 3.26992 1.3335 4.22735 1.3335 5.4165V14.5832C1.3335 15.7723 2.08937 16.7298 3.06186 17.3486C4.04424 17.9738 5.3505 18.3332 6.75016 18.3332C8.14982 18.3332 9.45608 17.9738 10.4385 17.3486C10.8815 17.0667 11.2795 16.7145 11.5817 16.3022C11.8224 16.7991 12.2176 17.2135 12.6743 17.5243C13.433 18.0407 14.4346 18.3332 15.5002 18.3332C16.5657 18.3332 17.5673 18.0407 18.326 17.5243C19.0804 17.0109 19.6668 16.2151 19.6668 15.2313V8.10169C19.6668 7.11794 19.0804 6.32207 18.326 5.80868C17.5673 5.29233 16.5657 4.99984 15.5002 4.99984C14.4346 4.99984 13.433 5.29233 12.6743 5.80868C12.4936 5.93166 12.3225 6.07085 12.1668 6.22495ZM3.00016 5.4165C3.00016 4.99483 3.27031 4.49393 3.95665 4.05716C4.63311 3.62669 5.61852 3.33317 6.75016 3.33317C7.88181 3.33317 8.86721 3.62669 9.54367 4.05716C10.23 4.49393 10.5002 4.99483 10.5002 5.4165C10.5002 5.83818 10.23 6.33908 9.54367 6.77585C8.86721 7.20632 7.88181 7.49984 6.75016 7.49984C5.61852 7.49984 4.63311 7.20632 3.95665 6.77585C3.27031 6.33908 3.00016 5.83818 3.00016 5.4165ZM10.4385 8.18195C10.4591 8.1688 10.4797 8.1555 10.5002 8.14204V8.74984C10.5002 9.17151 10.23 9.67242 9.54367 10.1092C8.86721 10.5397 7.88181 10.8332 6.75016 10.8332C5.61852 10.8332 4.63311 10.5397 3.95665 10.1092C3.27031 9.67242 3.00016 9.17151 3.00016 8.74984V8.14204C3.02063 8.1555 3.04119 8.1688 3.06186 8.18195C4.04424 8.8071 5.3505 9.1665 6.75016 9.1665C8.14982 9.1665 9.45608 8.8071 10.4385 8.18195ZM10.4385 11.5153C10.4591 11.5021 10.4797 11.4888 10.5002 11.4754V12.0832C10.5002 12.5048 10.23 13.0057 9.54367 13.4425C8.86721 13.873 7.88181 14.1665 6.75016 14.1665C5.61852 14.1665 4.63311 13.873 3.95665 13.4425C3.27031 13.0057 3.00016 12.5048 3.00016 12.0832V11.4754C3.02063 11.4888 3.04119 11.5021 3.06186 11.5153C4.04424 12.1404 5.3505 12.4998 6.75016 12.4998C8.14982 12.4998 9.45608 12.1404 10.4385 11.5153ZM10.4385 14.8486L10.4707 14.8279C10.3841 15.1906 10.1012 15.5877 9.54367 15.9425C8.86721 16.373 7.88181 16.6665 6.75016 16.6665C5.61852 16.6665 4.63311 16.373 3.95665 15.9425C3.39909 15.5877 3.11619 15.1906 3.02966 14.8279L3.06186 14.8486C4.04424 15.4738 5.3505 15.8332 6.75016 15.8332C8.14982 15.8332 9.45608 15.4738 10.4385 14.8486ZM13.0002 8.10169C13.0002 7.83257 13.1599 7.49418 13.612 7.18653C14.0597 6.88184 14.7248 6.6665 15.5002 6.6665C16.2756 6.6665 16.9406 6.88184 17.3883 7.18653C17.8404 7.49418 18.0002 7.83257 18.0002 8.10169C18.0002 8.3708 17.8404 8.7092 17.3883 9.01685C16.9406 9.32154 16.2756 9.53687 15.5002 9.53687C14.7248 9.53687 14.0597 9.32154 13.612 9.01685C13.1599 8.7092 13.0002 8.3708 13.0002 8.10169ZM15.5002 11.2035C16.4194 11.2035 17.291 10.9859 18.0002 10.5946V10.6943C18.0002 10.9634 17.8404 11.3018 17.3883 11.6094C16.9406 11.9141 16.2756 12.1295 15.5002 12.1295C14.7248 12.1295 14.0597 11.9141 13.612 11.6094C13.1599 11.3018 13.0002 10.9634 13.0002 10.6943V10.5946C13.7093 10.9859 14.5809 11.2035 15.5002 11.2035ZM15.5002 13.7961C16.4194 13.7961 17.291 13.5785 18.0002 13.1872V13.2869C18.0002 13.556 17.8404 13.8944 17.3883 14.202C16.9406 14.5067 16.2756 14.7221 15.5002 14.7221C14.7248 14.7221 14.0597 14.5067 13.612 14.202C13.1599 13.8944 13.0002 13.556 13.0002 13.2869V13.1872C13.7093 13.5785 14.5809 13.7961 15.5002 13.7961ZM15.5002 16.3887C16.2594 16.3887 16.9861 16.2402 17.6157 15.9681C17.5499 16.0282 17.4744 16.0879 17.3883 16.1465C16.9406 16.4512 16.2756 16.6665 15.5002 16.6665C14.7248 16.6665 14.0597 16.4512 13.612 16.1465C13.5259 16.0879 13.4504 16.0282 13.3847 15.9681C14.0142 16.2402 14.741 16.3887 15.5002 16.3887Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Coinstack;
