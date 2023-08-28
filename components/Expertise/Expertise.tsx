import Image from 'next/image'
import { FC } from 'react'

interface ExpertiseProps {
  
}

const Expertise: FC<ExpertiseProps> = ({  }) => {
  return (
    <section className='bg-primary text-white w-full pb-20 mb-20'>
        <div className="flex items-center space-x-4 py-20 md:px-20 px-4 justify-start">
          <Image src='/images/Element(2).svg' alt='line' width={129} height={9}/>
          <p className=''>Hello, We’re NR Graphic Design Studio</p>
        </div>
        <div className='md:max-w-[870px] md:mx-auto -mt-10'>
        <div className=''>
          <h5 className='md:text-[44px] text-[30px] md:mx-0 mx-4'>Welcome to our graphic design studio. Specializing in UI/UX Design, Web Design, Mobile App Design, Social Media Design, and Logo Design, we blend artistic vision with cutting-edge techniques to bring your ideas to life. Join us.</h5>
        </div>
        <div className='mt-6 md:mx-0 mx-5'>
          <p className='text-[18px]'>Our Expertise areas are:</p>
          <p className='mt-4 text-[20px]'>UI/UX Design / Web Design / Mobile App Design / Social Media Design / Logo Design</p>
        </div>
        </div>
    </section>
  )
}

export default Expertise