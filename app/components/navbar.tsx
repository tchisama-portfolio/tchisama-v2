import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between top-0 left-0 p-8 absolute'>
        <Image src={logo} alt='' className='w-10'></Image>
        <ul className='flex gap-6 font-medium uppercase'>
            <li>About</li>
            <li>work</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar