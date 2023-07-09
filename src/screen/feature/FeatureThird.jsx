import React from 'react';
import { SlNote } from 'react-icons/sl';
import { FaPencilRuler } from 'react-icons/fa';
import {HiOutlineUserGroup } from 'react-icons/hi';

const featureArr =[
    {
      id:10,
      icons:<SlNote size={30}/>,
      title:" Perfectly Responsive",
  
    },
    
    {
      id:20,
      icons:<FaPencilRuler size={30}/>,
      title:" Customize with ease",
  
    },
    {
      id:30,
      icons:<HiOutlineUserGroup size={30}/>,
      title:" Friendly Support",
  
    }
  ];

const FeatureThird = () => {
  return (
    <>
       <div className=" sm:h-[600px] flex items-center  my-10 sm:my-0  ">
        <div className="container mx-auto">
          <div className=" text-center flex justify-center sm:py-5">
            <h2 className="w-[630px] h-[128px] sm:h2 h3">
              The benefits of working with our team
            </h2>
          </div>
          {/* for card feature */}
          <div className="  grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-8 gap-4 ">
          {featureArr?.map((arr) => {
            return (
              <div className=" sm:w-[370px]  sm:h-[316px] h-[250px] bg-c_gray  flex justify-center items-center rounded-md  shadow-sm" key={arr?.id} >
                <div className=" space-y-3 ">
                  <div className=" text-c_blue">
                    {arr?.icons}
                  </div>
                  <h6 className=" text-dark_blue text-[24px]">{arr?.title}</h6>
                  <p className=" text-gray-700 para w-[324px] h-[112px]">
                    Euismod faucibus turpis eu gravida mi. Pellentesque et
                    velit aliquam sed faucib turpis eu gravida mi.
                    Pellentesque et velit aliquam sed mi.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div> 
    </>
  )
}

export default FeatureThird
