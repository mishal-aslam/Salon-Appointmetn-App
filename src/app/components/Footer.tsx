import React from 'react'

const Footer = () => {
  return (
   
<div className='flex justify-center  mx-auto '>

<footer className="bg-bgPrimary flex justify-center  bottom-0 ">
    <div className="px-12 w-full max-w-screen-xl p-4 py-6 mt-12 lg:py-8 rounded-t-2xl bg-[#121212] ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <a
            href="/"
            className="flex items-center text-primary md:text-8xl text-5xl my-auto font-semibold "
          >
            Glow  <br className='md:block hidden ' /> Scout
          </a>
          </div>
          <div className="grid grid-cols-2 md:gap-x-16 gap-6 sm:grid-cols-3">
            
          <div className='text-center'>
                  <h2 className="mb-6 text-[#EFE4D1]  font-semibold text-2xl uppercase ">Quick Link</h2>
                  <ul className="text-center md:space-y-4 -space-y-4 -mt-5 md:mt-0 ">
                  <li>
                <a
                  href="/"
                  className="block py-3 pr-4 pl- text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  text-[#EFE4D1]  font-semibold"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/components/pages/Treatments"
                  className="block py-3 pr-4 pl- text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  text-[#EFE4D1]  font-semibold"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                    href="/components/pages/Spas"
                    className="block py-3 pr-4 pl- text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  text-[#EFE4D1]  font-semibold"
                >
                  Spas
                </a>
              </li>
              <li>
                <a
                  href="/components/pages/Blog"
                  className="block py-3 pr-4 pl- text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  text-[#EFE4D1]  font-semibold"
                >
                  Blogs
                </a>
              </li>
                  </ul>
              </div>

              <div className='text-center'>
              <h2 className="mb-6 text-[#EFE4D1]  font-semibold text-2xl uppercase ">Privacy Policy</h2>
              <ul className="text-center text-xl text-[#EFE4D1]  font-semibold md:space-y-4 space-y-4 -mt-4 md:mt-0">
                      <li className="mb-4">
                          <a className="hover:underline ">Terms & Conditions</a>
                      </li>
                      <li>
                          <a className="hover:underline">About US</a>
                      </li>
                  </ul>
              </div>


              <div className='text-center'>
              <h2 className="mb-6 text-[#EFE4D1]  font-semibold text-2xl uppercase ">Follow Us</h2>
              <ul className="text-center md:space-y-4 space-y-4 -mt-3 md:mt-0 text-xl text-[#EFE4D1]  font-semibold">
                      <li className="mb-4">
                          <a href='' className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a className="hover:underline">Facebook</a>
                      </li>
                      <li>
                          <a className="hover:underline">Youtube</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      
    </div>
</footer>
</div>

  )
}

export default Footer