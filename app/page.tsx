"use client"
import Image from 'next/image'
import me from "./assets/me.png"
import Navbar from './components/navbar'
import { ArrowForward } from '@mui/icons-material'

export default function Home() {
  return (
    <main className="bg-white relative hero min-h-screen flex flex-col items-center justify-center">
      <Navbar/>
      <h1 className='text-[18vw] text-white md:text-[16vw] drop-shadow-2xl rotate-12 skew-x-12 font-bold uppercase'>Tchisama</h1>
      <Image src={me} alt='' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[65%] object-contain'></Image>
      <div className='absolute container mx-auto flex flex-col gap-4 bottom-0 md:bottom-[8%] left-0 p-4 md:p-10 items-start'>
        <p className='text-lg text-white font-medium uppercase w-full max-w-sm'>a full stack web devloper , and designer based on morocco</p>
        <button className='btn bg-white border-none text-[#543D25] hover:bg-gray-100 hover:text-[#543D25]'>
          lets talk 
          <ArrowForward/>
        </button>
      </div>
    </main>
  )
}
