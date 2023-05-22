import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Current from './dropDowns/Current'
import Desired from "./dropDowns/Desired"
import Stage1 from './dropDowns/Stage1'
import Stage2 from './dropDowns/Stage2'
import { motion } from 'framer-motion'

import dynamic from 'next/dynamic'
const MouseParticles = dynamic(
  () => import('react-mouse-particles'),
  { ssr: false }
)

const people = [
  { id: 1, name: 'Plumber' },
  { id: 2, name: 'Electrician' },
  { id: 3, name: 'Carpenter' },
  { id: 4, name: 'Cook' },
  { id: 5, name: 'Painter' },
 
]

const DropDown = () => {

  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  const [stage, setStage] = useState('Stage1')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (<>
  <MouseParticles
          g={2.3}
          // num={1}
          radius={3}
          life={1.4}
          v={1.6}
          // color="random"
          // alpha={0.16}
          level={6}
        />

      <section id="dropDown" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <motion.div initial={{  x: -100,opacity:0 }}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }}  className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
   {stage=='Stage1'&& (<><Stage1/>
   <button onClick={()=>setStage('Stage2')} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg w-full font-bold">Next</button></>
   )}
   {stage=='Stage2'&& (<><Stage2/>
   <div className="flex">
     <p onClick={()=>{setStage('Stage1')}} className="flex flex-col justify-center px-4 underline font-semibold  cursor-pointer">Back</p>
    <button  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg w-full font-bold">Submit</button></div>
   </>)}

   



    </motion.div>
   
   
   
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <motion.div
     initial={{  x: 100,opacity:0 }}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }} className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
          <div className='border-b-[12px] border-red-200 h-7 text-lg font-bold text-gray-900'>UNLIMITED CHOICES
          </div>
        <div className="flex-grow">
          {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">USP 1</h2> */}
          <p className="leading-relaxed text-base">All available positions in marketing, sales, customer service, and other fields immediately attract highly skilled applicants.</p>
          
        </div>
      </motion.div>
      <motion.div initial={{  x: 100,opacity:0 }}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}  className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div className='border-b-[12px] border-yellow-200 h-7 text-lg font-bold text-gray-900'>EXCITING CHALLENGES
          </div>
        <div className="flex-grow">
          {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">USP 2</h2> */}
          <p className="leading-relaxed text-base">We comprehend companies’ numerous challenges while searching for individuals for their open positions.</p>
        
        </div>
      </motion.div>
      <motion.div initial={{  x: 100,opacity:0 }}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}  className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className='border-b-[12px] border-blue-200 h-7 text-lg font-bold text-gray-900'>EFFICIENT HIRING
          </div>
        <div className="flex-grow">
          {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">USP 3</h2> */}
          <p className="leading-relaxed text-base">We know that hiring the right candidate for the job is incredibly important for any company</p>
        
        </div>
      </motion.div>
    </div>
  </div>
</section>
 </>)
}

export default DropDown
