const WhatWeDo = () => {
    return (<div className="gap-y-6 flex flex-col">
    <div className='bg-green-50 rounded-r-lg mr-20 px-10'>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="/assets/uploadCv.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Upload CV
       
      </h1>
      <p class="mb-8 leading-relaxed">Your ability to land the dream job interview depends on how nicely your CV is crafted.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Upload Cv</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
</div>

<div className='bg-red-50 rounded-l-lg ml-20 px-10'>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Resign in a professional way 
             
            </h1>
            <p className="mb-8 leading-relaxed">We'll impart our knowledge to improve the professional appearance of your resignation.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">View more</button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/assets/resign.jpg"/>
          </div>
        </div>
      </section>
     </div>
    
      <div className='bg-blue-50 rounded-r-lg mr-20 px-10'>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="/assets/shifts.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Work in Shifts
      </h1>
      <p class="mb-8 leading-relaxed">Choose where and when you work; there are no obligations</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
 </div>
 </div>   )
}

export default WhatWeDo
