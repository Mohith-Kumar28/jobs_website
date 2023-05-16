import Image from "next/image"
const Shifts = () => {
    return (
        <div>
        <section className="text-gray-600 body-font pt-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">One application, many positions to choose from</h1>
        <div className="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image  placeholder="blur"
     blurDataURL="/assets/application.jpg" width={200} height={200} className="h-56 rounded w-full object-cover object-center mb-6" src="/assets/application.jpg" alt="content"/>
          {/* <img className="h-56 rounded w-full object-cover object-center mb-6" src="/assets/application.jpg" alt="content"/> */}
          {/* <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Simple Process</h2>
          <p className="leading-relaxed text-base">A simple, free application and phone interview are required to join. then onboard with our team's assistance.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image  placeholder="blur"
     blurDataURL="/assets/alerts.jpg" width={200} height={200} className="h-56 rounded w-full object-cover object-center mb-6" src="/assets/alerts.jpg" alt="content"/>
          {/* <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Timely Alerts</h2>
          <p className="leading-relaxed text-base">Get alerted of upcoming shifts and choose from a range of shifts from various companies after being accepted.</p>
        </div>
      </div>
   
    </div>
  </div>

</section>




<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Benefits of Shifts by TouchSky</h1>
      <div className="h-1 w-20 bg-green-500 rounded"></div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Workers in the Shifts network are W2 employees</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Higher Pay</h2>
          <p className="leading-relaxed text-base">Earn more than the minimum salary and receive payment promptly.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg  hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Choice</h2>
          <p className="leading-relaxed text-base">Work many jobs before going back to your favourites.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Benefits</h2>
          <p className="leading-relaxed text-base">Health, dental, and vision benefits eligibility</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Rewards</h2>
          <p className="leading-relaxed text-base">Earn paid time off and other benefits by recommending friends.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Flexibility</h2>
          <p className="leading-relaxed text-base">Choose the time and place to work without being obligated</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Worker Protection</h2>
          <p className="leading-relaxed text-base">In the event of a working injury, a workers' compensation policy</p>
        </div>
      </div>
    </div>




    <section className="text-gray-600 body-font">
  <div className="container px-5 py-32 mx-auto">
    <div className="flex flex-col text-center w-full mb-14 justify-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Industries you could work in</h1>
      <div className="h-1 mx-auto w-20 bg-green-500 rounded"></div>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg> */}
          <img src="/assets/industries/shop.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">Retail</h2> */}
          <p className="font-bold text-lg">Retail</p>
        </div>
      </div>
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src="/assets/industries/restaurant.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          <p className="font-bold text-lg">Restaurants</p>
        </div>
      </div>
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src="/assets/industries/waiter.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          <p className="font-bold text-lg">Hospitality</p>
        </div>
      </div>
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src="/assets/industries/catering.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          <p className="font-bold text-lg">Catering</p>
        </div>
      </div>
   
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src="/assets/industries/warehouse.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          <p className="font-bold text-lg">Warehouse</p>
        </div>
      </div>
   
      <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src="/assets/industries/grocery.png" className="w-14 h-14 mb-4 mx-auto" alt="" />
          <p className="font-bold text-lg">Grocery</p>
        </div>
      </div>
   
    </div>
  </div>
</section>
  </div>
</section>

        </div>
    )
}

export default Shifts

