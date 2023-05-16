

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">LOGO</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Elevatestaff Ltds<br/><span className="font-bold">Flat 8 Seatherton Court, Spring Place, Barking, England, IG11 7GL</span></p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
  </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 website name —
        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">apb@gmail.com</a>
      </p>
    
  
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer
