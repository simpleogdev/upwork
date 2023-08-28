import { FC } from "react";

interface VerticalLineProps {}

const VerticalLine: FC<VerticalLineProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="55"
      viewBox="0 0 12 55"
      fill="none"
    >
      <path d="M6 6L6 55" stroke="#E1A730" />
      <circle cx="6" cy="6" r="6" transform="rotate(90 6 6)" fill="#E1A730" />
    </svg>
  );
};

export default VerticalLine;
