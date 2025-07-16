"use client"

import React, { useState, useEffect } from 'react'
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-800 md:top-4 md:left-1/2 md:-translate-x-1/2 md:rounded-full md:w-[95%] lg:w-[80%] xl:w-[70%] md:px-6 shadow-md shadow-black/10 backdrop-blur-sm border-b md:border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out transform ${isScrolled ? 'py-2 translate-y-0 opacity-100' : 'py-3 md:-translate-y-1 opacity-90'}`}>
        <div className="px-4 flex items-center justify-between md:hidden">
          <div className={`flex items-center gap-2 font-semibold dark:text-white transition-all duration-300 ${isScrolled ? 'scale-95' : ''}`}>
            <span className="text-lg">Home</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleMenu} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>
        <ul className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex animate-fadeIn' : 'hidden'} flex-col md:flex-row py-4 px-4 md:py-0 md:px-0 bg-white dark:bg-gray-800 border-t md:border-t-0 border-gray-200 dark:border-gray-700`}>
          <li className={`hidden md:flex items-center gap-2 font-semibold dark:text-white transition-all duration-300 transform ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            Home
          </li>
          <li className="w-full md:w-auto">
            <a href="#features" className="block py-2 md:py-0 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0 md:hover:translate-y-[-2px]">Features</a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#pricing" className="block py-2 md:py-0 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0 md:hover:translate-y-[-2px]">Pricing</a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#contact" className="block py-2 md:py-0 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0 md:hover:translate-y-[-2px]">Contact</a>
          </li>
          <li className="w-full md:w-auto ml-auto">
            <button
              onClick={toggleTheme}
              className={`rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 transform hover:rotate-12 ${isScrolled ? 'p-1.5' : 'p-2'}`}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition-all duration-500 animate-spin-once ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-white transition-all duration-500 animate-spin-once ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
          </li>
          <li className="w-full md:w-auto">
            <InteractiveHoverButton>Kontak</InteractiveHoverButton>
          </li>
        </ul>
      </nav>
    </>
  )
}