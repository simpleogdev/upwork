import Image from 'next/image'
import { FC } from 'react'
import Card from '../Card/Card'

interface FeaturedWorkProps {
  
}

const FeaturedWork: FC<FeaturedWorkProps> = ({  }) => {
  return (
    <section className='my-10'>
      <div className="flex items-center my-8 justify-start md:mx-0 mx-5 space-x-10">
        <Image src='/images/Element.svg' alt='line' width={15} height={12} />
      <h3 className='md:text-[80px] text-[35px]'>FEATURED WORK</h3>
      </div>
      <div className='flex overflow-hidden space-x-10 w-full overflow-x-scroll'>
        <Card image='/images/2.png' title='Mobile App Design' href='' des='Customer Access App'/>
        <Card image='/images/3.png' title='Web and Mobile App Design' href='' des='Online Reservations App'/>
        <Card image='/images/4.png' title='Web Dashboard Design' href='' des='EU Legal Sector'/>
        <Card image='/images/5.png' title='Mobile App Design' href='' des='Customer Access App'/>
        <Card image='/images/6.png' title='Mobile App Design' href='' des='Customer Access App'/>
      </div>
    </section>
  )
}

export default FeaturedWork
