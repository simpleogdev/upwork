import { FC } from "react";

interface LineProps {}

const Line: FC<LineProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="129"
      height="10"
      viewBox="0 0 129 10"
      fill="none"
    >
      <path d="M6 4.89819H129" stroke="white" />
      <ellipse cx="6" cy="4.89825" rx="6" ry="4.47222" fill="white" />
    </svg>
  );
};

export default Line;
