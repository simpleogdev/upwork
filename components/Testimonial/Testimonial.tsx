import { FC } from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({  }) => {
  return (
    <div className='my-10'>
      <div className='flex my-5 items-center justify-center'>
        <h5 className='md:text-[80px] text-[35px]'>TESTIMONIAL</h5>
      </div>
      <section className='flex md:flex-row flex-col md:mx-0 mx-5 items-start justify-between'>
        <TestimonialCard review=' “The UI designs he crafted are top-notch, and the design system he integrated
          allows for straightforward fixes and bulk updates throughout almost every area
          of the app.”' author='-By Molie Rosa, Photographer'/>
        <TestimonialCard review='“We worked with David designing our backend web app from scratch and we are happy with the results. He has good communication skills and uses robust workflows that allowed me and my team to work with him efficiently.”'  author='-By Molie Rosa, Photographer' />
        <TestimonialCard className='md:block hidden' review='We’ve been working with David on multiple projects for the last 2 years. He has delivered consistent high quality designs for our web, and apps. He is a great communicator, always meets deadlines.”'  author='-By Molie Rosa, Photographer' />
      </section>
    </div>
  )
}

export default Testimonial