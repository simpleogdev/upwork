import Image from "next/image";
import { FC } from "react";

interface AboutUsProps {}

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div className="flex md:mx-0 mx-5 items-start my-5 justify-between">
      <div className="flex items-center justify-start">
        <div className="">
          <Image
          className="md:h-[500px] h-[400px] md:w-[100%] w-[80%]"
            src="/images/about.png"
            alt="about"
            width={500}
            height={500}
            priority
            quality={100}
          />
        </div>
        <div className="flex flex-col">
        <div className="flex relative md:space-x-14 md:-mt-0 -mt-28  my-8 items-center justify-start">
          <Image
            className="absolute -left-24"
            src="/images/Element(1).svg"
            width={129}
            height={12}
            alt="line"
          />
          <p className="text-primary absolute md:right-0 md:left-2 right-20 whitespace-nowrap text-sm">About Us</p>
        </div>
      <div className="leading-[1.2] md:relative overflow-hidden left-32 md:-mt-0 md:mx-0 mx-4 -mt-24 absolute">
          <h3 className="md:text-[80px] text-[35px] md:relative flex flex-col items-start text-textHeading  justify-start">OUR LIFE <span>WITH DESIGN</span></h3>
        <div className="max-w-[470px] mx-auto leading-[24px] my-6 text-textBody">
          <p>At our graphic design studio, we are a passionate team of artists and visionaries dedicated to transforming concepts into captivating realities.</p>
        </div>
        <div className="flex space-x-7  max-w-[470px] cursor-pointer mx-auto text-[15px] font-semibold items-start justify-start">
          <p className="border-primary border-b-2">Contact Us</p>
          <p className="border-primary border-b-2">Case Studies</p>
        </div>
        </div>
      </div>
      </div>
      <div className="md:flex hidden justify-start items-start">
          <Image src='/images/right.png' alt="img" width={400} height={400}/>
        </div>
    </div>
  );
};

export default AboutUs;
