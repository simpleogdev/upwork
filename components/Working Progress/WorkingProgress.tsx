import { FC } from "react";

interface WorkingProgressProps {}

const WorkingProgress: FC<WorkingProgressProps> = ({}) => {
  return (
    <article className="bg-primary my-10 mt-8 text-white">
      <div className="md:px-20 py-14 md:block flex items-center justify-center flex-col">
        <h3 className="md:text-[80px] text-[35px]">WORKING PROCESS</h3>

        <div className="flex md:flex-row flex-col my-6 md:items-start items-center justify-between">
          <div>
            <h5 className="text-[20px]">STEP: 01</h5>
            <h4 className="max-w-[270px] text-[32px] my-5">Send up your project</h4>
          <hr className="w-[270px] border-white opacity-[0.2] border-[1px] md:mb-0 mb-5"/>
          </div>
          <div>
            <h5 className="text-[20px]">STEP: 02</h5>
            <h4 className="max-w-[270px] text-[32px] my-5">Let’s discuss about the details</h4>
          <hr className="w-[270px] border-white opacity-[0.2] border-[1px] md:mb-0 mb-5"/>
          </div>
          <div>
            <h5 className="text-[20px]">STEP: 03</h5>
            <h4 className="max-w-[270px] text-[32px] my-5">Get it delivered on time</h4>
          <hr className="w-[270px] border-white opacity-[0.2] border-[1px] md:mb-0 mb-5"/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkingProgress;
