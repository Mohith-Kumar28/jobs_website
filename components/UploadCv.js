/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { motion } from 'framer-motion'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import FileModal from './dropDowns/FileModal'

export default function UploadCv() {
  return (
    <div id="fileUploadId" className="relative isolate overflow-hidden bg-gray-900 pt-28 pb-20 sm:pt-44 lg:pt-52 ">
         <div className="z-40 leading-none  absolute top-0 left-0 w-full  overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
       <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#92CEF6"></path>
    </svg>
</div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <motion.div initial={{  y: 100,opacity:0 }}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }}  className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Upload uour Resume.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Our algorithms will help in getting your resume viewed by top recruiters. 
Recruiters are using resume search as a top tool to find the best candidate. 
            </p>
            
<div className="rounded-lg  px-6 bg-white flex flex-col md:ml-auto w-full py-8 mt-8 ">
   
   <div className="relative mb-4">
     <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
     <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
   </div>
   <div className="relative mb-4">
     <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
     <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
   </div>
   <div className="relative mb-4">
     <label for="zip" className="leading-7 text-sm text-gray-600">Zip Code</label>
     <input type="number" id="zip" name="zip" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
   </div>
   <div className="relative mb-4">
     <label for="zip" className="leading-7 text-sm text-gray-600">Upload in PDF format</label>
     {/* <input type="file" id="zip" name="zip" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}

     <FileModal/>
   </div>
  
  
   <button className="text-white bg-green-500 font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Upload</button>
   <p className="text-sm text-gray-500 mt-3">We continually work to ensure a secure user experience and are dedicated to safeguarding your privacy.</p>
 </div>
 
          </motion.div>
          <motion.dl initial={{  x: 100,opacity:0 }}
     whileInView={{ x: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 1.2 }} className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Quick Verification</dt>
              <dd className="mt-2 leading-7 text-gray-400">
              Our advanced technology swiftly extracts and verifies crucial resume information, saving time and ensuring accurate candidate evaluation.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Job Assurance</dt>
              <dd className="mt-2 leading-7 text-gray-400">
              With our all-in-one platform, employers receive instant matches with highly qualified candidates, guaranteeing a curated pool of top talent for each job opening.
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
