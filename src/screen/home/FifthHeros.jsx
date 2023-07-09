import React from 'react';
import Images from "../../assets/images/index";
import { MdOutlineArrowBackIos ,MdOutlineArrowForwardIos } from 'react-icons/md';

const FifthHeros = () => {
  return (
    <div className="bg-c_accent sm:h-[506px] flex  items-center">
    <div className="container mx-auto flex sm:flex-row flex-col  justify-between  ">
      <div className="sm:w-[537px] space-y-3 text-center sm:text-left ">
        <h2 className="sm:h2 h3">What our clients say about us</h2>
        <p className="para text-gray-600 sm:w-[327px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </p>
      </div>

      <div className="sm:w-[843px] my-3 sm:my-0">
        
          <h5 className=" sm:h5 text-center sm:text-left ">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
          <div className=" my-8 flex justify-between items-center">
             <div className="w-[249px] flex items-center gap-3">
              <img src={Images?.ProfilePng} alt="jennny" className=" w-[58px]  h-[58px] rounded-full"/>
              <div className=" space-y-1">
                <h4 className=" text-gray-600 text-[18px]">Jenny Wilson</h4>
                <p className=" text-[12px]">
                Vice President
                </p>
              </div>
             </div>
             <div className=" flex items-center gap-5 cursor-pointer">
               <MdOutlineArrowBackIos size={25}/>
               <MdOutlineArrowForwardIos size={25}/>
             </div>
          </div>
        

      </div>
    </div>

  </div>
  )
}

export default FifthHeros
