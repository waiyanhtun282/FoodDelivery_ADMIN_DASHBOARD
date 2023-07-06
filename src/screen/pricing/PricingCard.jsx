import React from 'react';
import { HiMiniPlay } from "react-icons/hi2";


const PricingCard = ({price}) => {
  return (
    <>
       <div className={` sm:w-[406px] sm:h-[745px]   ${ price?.id ===2 ? "bg-tint_blue" :"bg-c_gray" } p-12  rounded-md`} >
                <div className=" flex justify-center  ">
                  <div className=" flex flex-col   gap-24 ">
                    {/* price */}
                    <div className="  space-y-3">
                      <div className=" flex  items-center gap-3">
                        <h1 className={`${price?.id === 2 ? "text-white" :""} h3  `}>{price?.dollar}</h1>
                        <span className={`${ price?.id ===2 &&  "text-c_yellow"} text-c_blue`}>{price?.design}</span>
                      </div>
    
                      <div className=" space-y-3">
                        <h2 className={`${price?.id ===2 && "text-white"} text-[20px]`}>{price?.title} </h2>
                        <p className={`para ${price?.id === 2 && "text-gray-200"} text-gray-600 w-[285px]`}>
                         {price?.para}
                        </p>
                      </div>
                    </div>
    
                    {/* lists */}
                    <div className="sm:w-[217px] h-[220px] space-y-5">
                      <div className=" flex gap-2">
                        <HiMiniPlay className=" text-c_green" size={26} />
                        <span className={`${price?.id ===2 && "text-white"}`}>All limited links</span>
                      </div>
    
                      <div className=" flex gap-2">
                        <HiMiniPlay className=" text-c_green" size={26} />
                        <span className={`${price?.id ===2 && "text-white"}`}>Own analytics platform</span>
                      </div>
    
                      <div className=" flex gap-2">
                        <HiMiniPlay className=" text-c_green" size={24} />
                        <span className={`${price?.id ===2 && "text-white"}`}>Chat support</span>
                      </div>
    
                      <div className=" flex gap-2">
                        <HiMiniPlay className=" text-c_green" size={26} />
                        <span className={`${price?.id ===2 && "text-white"}`}>Optimize hashtags</span>
                      </div>
    
                      <div className=" flex gap-2">
                        <HiMiniPlay className=" text-c_green" size={26} />
                        <span className={`${price?.id ===2 && "text-white"}`}>Unlimited users</span>
                      </div>
                    </div>
    
                    <div className=" text-center ">
                      <button className={`  ${price?.id ===2 ? " bg-c_yellow text-dark_blue" :"  bg-dark_blue  text-white"} sm:w-[254px] sm:h-[64px] w-[180px] h-[40px] sm:rounded-[41px] rounded-full`}>
                        Get started
                      </button>
                    </div>
    
                  </div>
                </div>
              </div> 
    </>
  )
}

export default PricingCard;
