import Image from "next/image";
import { FC } from "react";

interface TestimonialCardProps {
  review: string;
  author: string;
  className?: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({ review, author, className }) => {
  return (
    <article className={`md:w-[370px] md:h-[396px] md:mb-0 mb-4 border-[1px] border-gray-300 ${className}`}>
      <div className="flex flex-col p-10 items-start justify-start">
        <Image src="/images/frame.svg" alt="" width={48} height={48} />
        <h6 className="max-w-[310px] text-[19px] my-4">
        {review}
        </h6>
        <p className="text-textBody text-base">{author}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
