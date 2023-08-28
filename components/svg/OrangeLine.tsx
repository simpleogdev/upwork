import { FC } from "react";

interface OrangeLineProps {}

const OrangeLine: FC<OrangeLineProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="129"
      height="12"
      viewBox="0 0 129 12"
      fill="none"
    >
      <path d="M6 6H129" stroke="#E1A730" />
      <circle cx="6" cy="6" r="6" fill="#E1A730" />
    </svg>
  );
};

export default OrangeLine;
