import Image from 'next/image'
import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/Hero'
import DropDown from '@/components/DropDown'
import WhatWeDo from '@/components/WhatWeDo'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/layout/Footer'
import UploadCv from '@/components/UploadCv'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
     className="bg-white min-h-screen"
    >
    <NavBar/>
    <Hero/>
    <DropDown/>
    <WhatWeDo/>
    <UploadCv/>
    <Testimonials/>
    <Footer/>
    </main>
  )
}
