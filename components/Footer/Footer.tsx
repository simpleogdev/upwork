import { FC } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className='bg-primary text-white p-10 mt-5'>
      <div className='flex md:flex-row flex-col md:mb-0 items-end justify-start my-10'>
        <h4 className='md:max-w-[670px] leading-[1.2] md:text-[120px] text-[35px]'>LET’S GET IN TOUCH</h4>
        <div className='flex flex-col'>
        <h6 className='md:max-w-[370px] md:mt-0 mt-4 text-[20px]'>Got a project? Drop us a line if you want to work together on something exciting. Big or small. Mobile or web.</h6>
        <p className='text-[15px] my-5'>Let’s Discuss Your Project</p>
        </div>
      </div>
      <div className='flex md:flex-row py-4 md:py-0 flex-col items-center justify-between bg-brandPrimary md:h-[140px] md:px-6 mt-10'>
        <div>
          <h5 className='md:max-w-[470px] md:my-0 my-5'>info@nrstudio.pl</h5>
        </div>
        <div className='flex md:flex-row flex-col overflow-hidden items-end justify-end space-x-5'>
        <div className='flex flex-col mb-4 items-center  md:border-r-2 md:pr-5 md:border-r-white/20'>
          <h6>Facebook</h6>
          <p className='text-base'>@nr.gdstudio</p>
        </div>
        <div className='flex flex-col mb-4 items-center md:border-r-2 md:pr-5 md:border-r-white/20'>
          <h6>Facebook</h6>
          <p className='text-base'>@nr.gdstudio</p>
        </div>
        <div className='flex flex-col mb-4 items-center md:border-r-2 md:pr-5 md:border-r-white/20'>
          <h6>Facebook</h6>
          <p className='text-base'>@nr.gdstudio</p>
        </div>
        <div className='flex flex-col items-center '>
          <h6>Facebook</h6>
          <p className='text-base'>@nr.gdstudio</p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer