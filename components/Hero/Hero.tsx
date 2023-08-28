import Image from "next/image";
import { FC } from "react";
import Mouse from "../svg/Mouse";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="mt-4">
      <div className="flex space-x-4 items-center justify-center">
        <Image src="/images/Element(1).svg" alt="line" width={60} height={15} />
        <h5 className="md:text-[44px] text-[30px]">We’re NR Studio</h5>
      </div>
      <div className="flex flex-col items-center text-textHeading justify-center">
        <h1 className="md:text-[120px] text-[60px] flex flex-col items-center justify-center leading-[1.2]">GRAPHIC <span className="">DESIGN</span></h1>
        <h6 className="md:text-[32px] text-[23px]">With 10 yrs experience in UI/UX</h6>
      </div>
      <div className="flex items-center space-x-8 justify-center my-7">
        <button className="font-semibold text-[15px] leading-[16px] py-[20px] px-[40px] bg-primary text-white rounded-[20px]"> Schedule Free Call</button>
        <p className="border-b-primary border-b-2 text-center text-[15px] font-semibold">Case Studies</p>
      </div>
      <div className="flex my-12 items-center justify-center">
        <Mouse />
      </div>
    </section>
  );
};

export default Hero;
