const Stage2 = () => {
    return (
        <div>
                 <div className="z-0 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Last Step</h2>
            <div className="relative mb-4">
              <label for="first-name" className="leading-7 text-sm text-gray-600">First Name</label>
              <input type="text" id="first-name" name="first-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label for="last-name" className="leading-7 text-sm text-gray-600">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label for="zip" className="leading-7 text-sm text-gray-600">Zip Code</label>
              <input type="number" id="zip" name="zip" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
           
     


          </div>
        </div>
    )
}

export default Stage2
