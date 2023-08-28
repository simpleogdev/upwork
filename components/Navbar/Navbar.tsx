import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({  }) => {
  return (
    <nav className='flex items-center md:max-w-[1440px]  md:mx-auto mx-5 justify-between'>
      <Link href='/'>
        <Image src='/images/logo.png' alt='logo' width={194} height={194} />
      </Link>
      <div className='cursor-pointer'>
        <AiOutlineMenu size={36}/>
      </div>
    </nav>
  )
}

export default Navbar
