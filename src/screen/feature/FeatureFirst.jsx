import React from 'react';
import FeatureImg from '../../assets/icons/index';


const FeatureFirst = () => {
  return (
    <div className=' sm:h-[757px] h-[375px] bg-tint_blue flex  items-center'>
      <div className="container mx-auto ">
        <div className=" flex items-center">
          {/* left heroFirst */}
          <div className=" sm:space-y-5 text-center sm:text-left space-y-10 ">
          <h1 className=" h1 text-white sm:w-[468px] max-w-md sm:max-w-none sm:h-[148px] h-[65px]">All the features you need</h1>
          <p className=" para text-gray-400 sm:w-[562px] sm:h-[56px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className=' sm:w-[200px] sm:h-[64px] p-3 sm:p-0 bg-c_yellow sm:rounded-[41px] rounded-3xl text-dark_blue '>View Pricing</button>
          </div>

          {/* right hero */}
          <div className=" w-[639px] h-[409px] hidden sm:flex">
            <img src={FeatureImg?.featureImage} alt=" featureImage" className=' w-[100%] h-[100%]' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FeatureFirst
