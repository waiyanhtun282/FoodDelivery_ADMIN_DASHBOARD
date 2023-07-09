import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Icons from "../../assets/icons/index";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className=" bg-tint_blue flex items-center">
      <div className=" container mx-auto py-[80px] md:py-[128px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] animate__animated animate__fadeIn">
          <div className=" order-2 lg:order-first">
            <h1 className=" sm:h1 h2   text-white ">
              Building stellar websites for early startups
            </h1>
            <p className=" text-gray-400 para mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur pnormaladipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className=" flex  justify-center sm:justify-normal items-center gap-8 mt-[30px]">
              <Button className=" rounded-full bg-c_yellow text-tint_blue">View our work</Button>
              <div className=" flex   items-center gap-3 text-c_accent">
                <span>View Pricing </span>
                <LiaLongArrowAltRightSolid />
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Icons.homeBanner}
              alt="HeaderHero"
              className=" w-[80%] lg:w-[100%] h-[100%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
