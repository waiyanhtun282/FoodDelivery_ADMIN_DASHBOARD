import React from 'react';
import TemplateImg from "../../../../assets/images/index";


const DetailTempOne = ({template}) => {
  return (
    <>
      <div className=" sm:h-[1329px] flex items-center py-8 sm:py-0" key={template?.id}>
      <div className="container mx-auto">
        <div className=" sm:space-y-8 space-y-5">
        {/* blog header */}
        <div className=" sm:w-[646px] sm:h-[176px] text-center sm:text-left" >
          <h4 className=' sm:text-[24px]  text-dark_blue'>Web design and development</h4>
          <h1 className="sm:h1 h2">
          Finsweet Design case studies
          </h1>
        </div>

        {/* summary */}
        <div className=" sm:w-[817px] sm:h-[84px] text-gray-600   text-justify sm:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
        </div>

        {/* main page */}
        <div className=" sm:w-[1064px] sm:h-[641px]">
          <img src={template?.template} alt="tempalte 1" className=' w-[100%] h-[100%] object-contain'/>
        </div>

        {/* information */}
        <div className=" sm:h-[100px]  grid sm:grid-cols-3 grid-cols-2  border-b-[0.8px] border-b-gray-300 gap-5 sm:gap-0">
          <div className=" sm:w-[175px]  sm:space-y-3 space-y-2">
            <h3 className=' text-gray-600'>Client</h3>
            <h2 className=' sm:text-[24px] text-[18px]'>facebook.com</h2>
          </div>

          <div className=" sm:w-[184px] sm:space-y-3 space-y-2">
          <h3 className=' text-gray-600'>Service</h3>
            <h2 className=' sm:text-[24px] text-[18px]'>Product Design</h2>
          </div>

          <div className=" sm:w-[406px] sm:space-y-3 space-y-2">
            <h3 className=' text-gray-600'>Deliverable</h3>
            <h2 className=' sm:text-[24px] text-[18px]'>UI Screens, UX Flow & Prototype</h2>
          </div>
        </div>


        </div>
      </div>
      </div>  
    </>
  )
}

export default DetailTempOne
