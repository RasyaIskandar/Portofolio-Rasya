"use client"

import Navbar from '@/components/Keren/Navbar'
import { SmoothCursor } from '@/components/ui/smooth-cursor'
import React, { useEffect, useState } from 'react'
import { LineShadowText } from "@/components/magicui/line-shadow-text"
import { useTheme } from "next-themes"
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { WordRotate } from '@/components/magicui/word-rotate'
import { Particles } from "@/components/magicui/particles"

export default function page() {
  const { resolvedTheme } = useTheme()
  const shadowColor = resolvedTheme === "dark" ? "white" : "black"
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <div className='relative scroll-smooth'> 
      <SmoothCursor/>
      <Navbar/>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className='w-full min-h-screen flex items-center p-4 sm:p-8 md:p-12 lg:p-16'>
        <div className='gap-10 w-full flex flex-col lg:flex-row justify-center items-center p-8 sm:p-6 md:p-8 lg:p-10 mt-[-150px]'>
          <div className='flex flex-col items-center'>
                      <div className='w-60 h-60 lg:w-60 lg:h-60 rounded-full animate-[spin_25s_linear_infinite] hover:animate-[spin_25s_linear_infinite]'>
                        <img src="/Profile.jpg" alt="Rasya Iskandar" className="w-full h-full object-cover rounded-full"/>
                      </div>            
            <div className='mt-[-120px]'>
            </div>          
          </div>    
          <div>
          <h1 className="mt-27 text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Rasya
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Iskandar
            </LineShadowText>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-1">
            <TypingAnimation className="text-base sm:text-xl md:text-2xl">Saya Adalah Seorang</TypingAnimation>
            <WordRotate className="text-base sm:text-2xl md:text-3xl font-bold text-black dark:text-white" words={["FullStack", "BackEnd", "FrontEnd", "MobileDev"]} />
          </div>
            
          </div>      
        </div>
      </div>   
      
<div className="min-h-screen w-full p-4 md:p-20 flex items-center justify-center">
  <div className="w-full max-w-6xl">
    <h1 className="text-center text-3xl md:text-[52px] font-bold leading-tight tracking-tight font-sans mb-10 dark:text-white">
      INGIN TAU SAYA?
    </h1>
    <div className="w-full flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-1/3 bg-yellow-200 dark:bg-yellow-400 rounded-2xl"><img src="/profile.jpg" alt='rasya iskandar' className="w-full h-full object-cover rounded-2xl"/></div>

      <div className="w-full md:w-2/3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-6 md:p-8 text-black dark:text-white text-base md:text-lg leading-relaxed bg-white dark:bg-gray-800 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500 transition-all">
        Hai! Saya Rasya Iskandar, pelajar SMK jurusan Rekayasa Perangkat Lunak yang punya rasa ingin tahu besar di dunia teknologi, desain, dan pengembangan aplikasi. Meskipun masih muda, saya percaya bahwa usia bukan batas untuk mulai berkarya dan belajar.
        <div className="hidden md:block">
          <br />
          Saya terbiasa menggunakan React, Next.js, dan Tailwind CSS untuk pengembangan web, serta sedang aktif mengeksplorasi React Native untuk membangun aplikasi mobile. Bagi saya, teknologi adalah alat untuk menciptakan sesuatu yang berguna.
          <br /><br />
          <p className="italic text-gray-700 dark:text-gray-300">
            Jadi ya... itu saya. Mungkin bukan yang paling pintar, tapi saya selalu mau belajar. Mungkin belum banyak pengalaman, tapi saya jalan terus. Karena buat saya, selama saya nggak berhenti, saya nggak gagal.
          </p>
        </div>    
      </div>    
    </div>
  </div>
</div>

  <div className="hidden md:flex h-70 w-full gap-10 justify-center ">
    <div className="w-100 h-40  p-3 bg-red-400 rounded-2xl">
      <div className=''><img src="presentation.svg"/></div>
      <div className='flex items-center justify-between'>
        <text className=''>PROJECT</text>
        <div>6</div>
      </div>
    </div> 
    <div className="w-100 h-20 bg-red-600 rounded-2xl">
      CERTIFICATE
    </div>
    <div className="w-100 h-20 bg-red-900 rounded-2xl">
      EXPERIENCE
    </div>
  </div>

  </div>
  )
}