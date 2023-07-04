import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Images from "../../assets/images/index";

const ThirdHeros = () => {
  return (
    <>
       <div className=" sm:h-[728px]  flex items-center py-5">
        <div className="container mx-auto">
          <div className=" space-y-3">
            <div className="">
              <div className="  flex justify-between items-center">
                <h2 className=" text-dark_blue sm:h2 h3">
                  View our projects
                </h2>
                <div className=" text-dark_blue flex items-center sm:gap-3 gap-2">
                  <span>View More</span>
                  <LiaLongArrowAltRightSolid size={25} />
                </div>
              </div>
            </div>

            <div className=" flex sm:flex-row flex-col sm:gap-1 gap-2">
              {/* Image1 */}
              <div className=" sm:w-[843px] sm:h-[600px] relative">
                <img
                  src={Images?.PJ1}
                  alt=" pj-1 images"
                  className="w-[100%] h-[100%]"
                />
                <div className=" sm:w-[396px] h-[100%] w-[356px] bg-tint_blue opacity-0  hover:opacity-[0.7] transition-all duration-300 absolute top-0 left-0 ">
                  <div className=" absolute bottom-[20%] left-[10%] ">
                    <div className="space-y-4">
                      <h3 className=" text-white sm:text-[24px] text-[20px] max-w-sm sm:max-w-0 font-[600]">
                        Workhub office Webflow Webflow Design
                      </h3>
                      <p className=" text-gray-400">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam
                      </p>
                      <div className=" text-c_yellow flex items-center gap-3 ">
                        <span>View project</span>
                        <LiaLongArrowAltRightSolid size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* imag2 and 3 */}
              <div className=" ">
                <div className="sm:w-[414px] h-[284px] relative ">
                  <img
                    src={Images?.PJ2}
                    alt=" Pj-2 images"
                    className=" w-[100%] h-[100%]"
                  />
                  <div className=" sm:w-[414px] w-[356px] h-[284px] bg-tint_blue  absolute top-0 left-0 opacity-0  hover:opacity-[0.7] transition-all duration-300">
                    <div className=" absolute bottom-[20%] left-[10%] ">
                      <div className="space-y-4 w-[313px] h-[72px]">
                        <h3 className=" text-white text-[24px] font-[600]">
                          Unisaas Website Design
                        </h3>
                        
                        <div className=" text-c_yellow flex items-center gap-3 ">
                          <span>View project</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:w-[405px]  h-[284px]">
                  <img
                    src={Images?.PJ3}
                    alt="Pj-3 images"
                    className="w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdHeros
