import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Images from "../../assets/images/index";
import { Link } from "react-router-dom";
import { paths } from "../../routes/paths";

const ThirdHeros = () => {
  // console.log(pj1)
  return (
    <>
      <div className="flex items-center py-[50px] md:py-[120px]">
        <div className="container mx-auto">
          <div className=" space-y-3">
            <div className=" " data-aos="zoom-in">
              <div className="  flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
                <h2 className=" text-dark_blue sm:h2 h3">
                  View our projects
                </h2>
                <Link to={paths.template}>
                  <div className=" text-dark_blue flex items-center sm:gap-3 gap-2 cursor-pointer">
                    <span>View More</span>
                    <LiaLongArrowAltRightSolid size={25} />
                  </div>
                </Link>
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-[30px]">
              {/* Image1 */}
              <div className=" relative" data-aos="zoom-in">
                <img
                  src={Images.PJ1}
                  alt=" pj-1 images"
                  className="w-[100%] h-[100%]"
                />
                <div className=" lg:w-[396px] h-[100%] w-[356px] bg-tint_blue opacity-0  hover:opacity-[0.7] transition-all duration-300 absolute top-0 left-0 ">
                  <div className=" absolute bottom-[20%] left-[10%] ">
                    <div className="space-y-4">
                      <h3 className=" text-white sm:text-[24px] text-[20px] max-w-sm sm:max-w-none font-[600]">
                        Workhub office Webflow Webflow Design
                      </h3>
                      <p className=" text-gray-400 pb-[20px]">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam
                      </p>
                      <Link to={`/template/detail?detailId=11`}>
                        <div className=" text-c_yellow flex items-center gap-3">
                          <span>View project</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* imag2 and 3 */}
              <div className=" grid grid-cols-1 gap-7">
                <div className=" relative" data-aos="zoom-in">
                  <img
                    src={Images.PJ2}
                    alt=" Pj-2 images"
                    className=" w-[100%] lg:h-[284px]"
                  />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 bg-tint_blue opacity-75 p-[30px] flex items-end">
                    <div className="">
                      <h3 className=" text-white text-[25px]">Unisaas Website Design</h3>
                      <Link to={`/template/detail?detailId=12`}>
                        <div className=" text-c_yellow flex items-center gap-3 ">
                          <span>View project</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="zoom-in">
                  <Link to={`/template/detail?detailId=13`}>
                    <img
                      src={Images.PJ3}
                      alt="Pj-3 images"
                      className="w-[100%] lg:h-[284px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdHeros;
