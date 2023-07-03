import React from "react";
import Images from "../../assets/images/index";

const About = () => {
  return (
    <div>
      <div className="container mx-auto my-[40px] lg:my-0 lg:min-h-[500px] flex items-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          <div className=" h-full flex flex-col justify-center">
            <p className=" md:text-[18px]">About us</p>
            <h2 className=" h2 my-[20px]">Our designs solve problems</h2>
            <p className=" text-dark_blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="">
            <img src={Images.about1} alt="" className=" w-full"/>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-[30px] lg:my-0">
        <div className="p-[20px] md:p-[80px] bg-[#F4F5F5]">
          <p>Who we are</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] mt-2">
            <div className="">
              <h4 className=" h5 font-psemibold">Goal focussed</h4>
              <p className=" text-dark_blue mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="">
              <h4 className=" h5 font-psemibold">Continuous improvement</h4>
              <p className=" text-dark_blue mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Images.aboutBanner} alt="" className=" w-full"/>
        </div>
      </div>
    </div>
  );
};

export default About;
