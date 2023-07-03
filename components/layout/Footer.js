import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <div className="bg-white rounded-lg p-3 inline-flex">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image
                    className=" h-12 w-auto "
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="ok"
                  />
      </a></div>
      <p className="mt-2 text-lg font-bold text-gray-400">Elevatestaff Ltd<br/><span className="font-semibold font-base text-gray-500">Flat 8 Seatherton Court, Spring Place, Barking, England, IG11 7GL</span></p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10 flex flex-col">

          <Link className="text-gray-400 hover:text-white" href="/">
            Home
          </Link >
          <Link className="text-gray-400 hover:text-white" href="#shiftsId">
            Shifts
          </Link >
          <Link className="text-gray-400 hover:text-white" href="#fileUploadId">
            File Upload
          </Link >
          {/* <Link className="text-gray-400 hover:text-white" href="/resignation">
            Resignation
          </Link > */}
       
        </nav>
      </div>
  </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 TouchSky —
        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">edilson@touchsky.org</a>
      </p>
    
  
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer
