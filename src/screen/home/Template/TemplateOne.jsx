import React from 'react';
import {BiLogoFacebookCircle ,BiLogoTwitter ,BiLogoInstagram ,BiLogoLinkedinSquare} from 'react-icons/bi';


const TemplateOne = () => {
  return (
    <>
       <div className=' sm:h-[416px] bg-c_gray flex items-center py-10 sm:py-0 '>
     <div className="container mx-auto">
       <div className=" flex justify-center items-center text-center ">
        {/* hero one */}
        <div className=" sm:w-[733px] sm:h-[224px] space-y-5">
          <div className=" sm:space-y-3 space-y-2">
          <p className=' text-gray-800'>What we created</p>
          <h1 className=' sm:h-[64px] sm:h1  h2'>Our Work Portfolio</h1>
          </div>
          <p className="para text-gray-800 sm:h-[56px] ">
          We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
          </p>
          <div className=" flex  justify-center gap-8 ">
          <BiLogoFacebookCircle size={16}/>
          <BiLogoTwitter size={16}/>
          <BiLogoInstagram  size={16}/>
          <BiLogoLinkedinSquare  size={16} />
          </div>
        </div>

       </div>
     </div>
    </div>
    </>
  )
}

export default TemplateOne
