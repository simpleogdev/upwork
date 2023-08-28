import { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="bg-secondary md:p-10 my-10">
      <div className="md:px-20 px-6 py-14">
        <div>
          <h5 className="md:text-[80px] text-[35px] text-textHeading">OUR SERVICES</h5>
        </div>
        <section className="flex flex-col md:max-w-[1200px] my-14 items-start">
          <div className="flex items-center md:space-x-20 space-x-8 justify-between">
            <sup className="text-[20px] text-textHeading items-start -mt-16">01</sup> 
            <h5 className="md:max-w-[270px] mx-auto md:text-[44px] text-[24px]">WEBSITE DESIGN</h5>
            <p className="md:max-w-[370px] text-textBody">Elevate your online presence with our website designs that merge aesthetics and functionality.</p>
          </div>
          <hr className="w-full bg-line border-[1px] border-line my-4 "/>

          <div className="flex items-center md:space-x-20 space-x-8 justify-between">
            <sup className="text-[20px] text-textHeading items-start -mt-16">02</sup> 
            <h5 className="md:max-w-[270px] mx-auto md:text-[44px] text-[24px]">MOBILE APP DESIGN</h5>
            <p className="md:max-w-[370px] max-w-[200px] items-center text-textBody">Unleash the power of innovation through our mobile app designs, delivering intuitive user experiences.</p>
          </div>
          <hr className="w-full bg-line border-[1px] border-line my-4 "/>
          <div className="flex items-center md:space-x-20 space-x-8 justify-between">
            <sup className="text-[20px] text-textHeading items-start -mt-16">03</sup> 
            <h5 className="max-w-[300px] mx-auto md:text-[44px] text-[24px]">SOCIAL MEDIA DESIGN</h5>
            <p className="max-w-[370px] items-center text-textBody"> Ignite your brand's story across social platforms with our designs, to forge meaningful connections.</p>
          </div>
          <hr className="w-full bg-line border-[1px] border-line my-4 "/>
          <div className="flex items-center md:space-x-20 space-x-8 justify-between">
            <sup className="text-[20px] text-textHeading items-start -mt-16">04</sup> 
            <h5 className="max-w-[270px] mx-auto md:text-[44px] text-[24px]">LOGO DESIGN</h5>
            <p className="max-w-[370px] items-center text-textBody">Make a statement with an identity as our logo designs capture the essence of your brand.</p>
          </div>
          <hr className="w-full bg-line border-[1px] border-line my-4 "/>
        </section>
        
      </div>
    </div>
  );
};

export default Services;
