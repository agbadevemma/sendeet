type Props = {
  color: string;
  width?: number; // Optional width prop
  height?: number; // Optional height prop
};

const Users = ({ color, width = 24, height = 24 }: Props) => {
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
          d="M11.6667 2.5C8.90523 2.5 6.66666 4.73858 6.66666 7.5C6.66666 10.2614 8.90523 12.5 11.6667 12.5C14.4281 12.5 16.6667 10.2614 16.6667 7.5C16.6667 4.73858 14.4281 2.5 11.6667 2.5ZM8.33333 7.5C8.33333 5.65905 9.82571 4.16667 11.6667 4.16667C13.5076 4.16667 15 5.65905 15 7.5C15 9.34095 13.5076 10.8333 11.6667 10.8333C9.82571 10.8333 8.33333 9.34095 8.33333 7.5Z"
          fill={color}
        />
        <path
          d="M6.79616 17.106C6.55352 17.4971 6.03979 17.6174 5.64871 17.3748C5.25763 17.1321 5.13729 16.6184 5.37993 16.2273C6.5211 14.388 8.85565 12.5 11.6667 12.5C14.4777 12.5 16.8122 14.388 17.9534 16.2273C18.196 16.6184 18.0757 17.1321 17.6846 17.3748C17.2935 17.6174 16.7798 17.4971 16.5372 17.106C15.6021 15.5988 13.7369 14.1667 11.6667 14.1667C9.59639 14.1667 7.73129 15.5988 6.79616 17.106Z"
          fill={color}
        />
        <path
          d="M6.58154 5.46643C6.78418 5.87966 6.61346 6.37891 6.20023 6.58155C5.44301 6.95287 4.99999 7.62649 4.99999 8.33333C4.99999 9.04017 5.44301 9.7138 6.20023 10.0851C6.61346 10.2878 6.78418 10.787 6.58154 11.2002C6.37891 11.6135 5.87965 11.7842 5.46642 11.5815C4.23575 10.9781 3.33333 9.77794 3.33333 8.33333C3.33333 6.88872 4.23575 5.6886 5.46642 5.08512C5.87965 4.88248 6.37891 5.0532 6.58154 5.46643Z"
          fill={color}
        />
        <path
          d="M3.46283 17.106C3.22019 17.4971 2.70646 17.6174 2.31538 17.3748C1.92429 17.1321 1.80396 16.6184 2.0466 16.2273C2.52918 15.4495 3.30129 14.8003 4.16269 14.2966C4.55999 14.0643 5.07039 14.198 5.30271 14.5953C5.53503 14.9926 5.40128 15.503 5.00398 15.7354C4.28423 16.1562 3.75467 16.6356 3.46283 17.106Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Users;
