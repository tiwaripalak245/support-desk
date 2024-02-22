import React from 'react'

const Footer =() => {
  return (
    <footer className="w-full border-t-2 mt-28 p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row mt-10">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
 
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
         <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Product Support</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>iPhone</li>
                <li>iMac</li>
                <li>Airpods</li>
                <li>iPods</li>
                <li>watch</li>
                <li>TV</li>
                <li>Support sitemap</li>


              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Service and Repair</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li> Repair Options</li>
                <li>Service and Repair Information
</li>
                <li>Hardware Warranties</li>
                <li>Software License Agreements</li>
                <li>Complimentary Support</li>
              </ul>
            </div>


            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Connect</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Conatct US</li>
                <li>Phone Numbers</li>
                <li>Support App</li>
                <li>Our Communities</li>
                <li>Accessibility</li>
              </ul>
            </div>
          
        </div>
      </div>

    </footer>
  )
}


export default Footer