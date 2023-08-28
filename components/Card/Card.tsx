import Image from 'next/image'
import { FC } from 'react'

interface CardProps {
  image: string;
  title: string;
  href?: string;
  des: string
}

const Card: FC<CardProps> = ({ image, title , href, des }) => {
  return (
    <article className='flex flex-col md:mx-0 mx-5 overflow-x-scroll min-w-[463px] items-start justify-start'>
      <div>
        <Image className='cursor-pointer' src={image} width={463} height={400} alt='customer app' />
      </div>
      <div className='flex my-4 items-center justify-center space-x-2'>
        <a className='text-[20px] text-textHeading' href={href}>{title}</a>
        <Image src='/images/arrow.svg' width={24} height={24} alt='arrow'/> 
      </div>
      <h6 className='opacity-[0.7] text-[20px] text-textBody'>{des}</h6>
    </article>
  )
}

export default Card