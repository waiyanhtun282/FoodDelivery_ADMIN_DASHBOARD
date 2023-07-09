import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Icons from "../../assets/icons/index";

const Hero = () => {
  return (
    <div className=" bg-tint_blue lg:h-[760px] md:h-[500px] h-[350px] flex items-center">
      <div className=" container mx-auto">
        <div className="flex lg:justify-between  justify-center  items-center lg:gap-16">
          <div className=" lg:w-[582px] height-[222px] lg:space-y-8 md:space-y-5 space-y-3 max-w-sm lg:text-left  text-center">
            <h1 className=" sm:h1 h2   text-white ">
              Building stellar websites for early startups
            </h1>
            <p className=" text-gray-400 para">
              Lorem ipsum dolor sit amet, consectetur pnormaladipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className=" flex  justify-center sm:justify-normal items-center gap-8">
              <button className=" bg-c_yellow sm:p-3 p-2 rounded-3xl text-dark_blue">
                View our work
              </button>
              <div className=" flex   items-center gap-3 text-c_accent">
                <span>View Pricing </span>
                <LiaLongArrowAltRightSolid />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src={Icons.homeBanner} alt="HeaderHero" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
