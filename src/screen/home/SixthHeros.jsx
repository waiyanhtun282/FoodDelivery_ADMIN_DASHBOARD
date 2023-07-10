import React from "react";
import Images from "../../assets/images/index";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SixthHeros = () => {
  return (
    <div className=" flex items-center my-5 lg:my-0">
      <div className="container mx-auto">
        <div className=" flex" data-aos="zoom-in">
          <div className=" relative h-[100%] hidden lg:block">
            <img src={Images?.Inquiry} alt=" injuirty" />
            <div className=" inquirty"></div>
            {/*  */}
            <div className="  absolute top-[20%] left-[10%] space-y-3">
              <h1 className="h2 text-white">
                Building stellar websites for early startups
              </h1>
              <p className="para text-c_accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>

            <div className=""></div>
          </div>

          <div className="bg-tint_blue flex flex-col items-center justify-center py-[50px]">
            <div className=" md:w-[70%]">
              <h5 className=" h5 text-white lg:text-left  text-center mb-3">
                Send inquiry
              </h5>
              <p className="para text-gray-500 lg:text-left text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className=" w-full">
              <form
                action=""
                className=" mt-5 w-[80%] md:w-[70%] mx-auto"
              >
                {/* <input type="text" className=" w-[100%] bg-transparent "/> */}
                <div className="my-2 ">
                  <input
                    type="text"
                    id="text"
                    className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                    placeholder="Your Name"
                    required=""
                  />
                </div>

                <div className="my-2 ">
                  <input
                    type="email"
                    id="email"
                    className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="my-2 ">
                  <input
                    type="url"
                    id="url"
                    className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                    placeholder="Paste your Figma design URL"
                    required=""
                  />
                </div>

                <button className=" bg-c_yellow w-[100%] lg:p-3 lg:text-[18px] p-2 rounded-full my-5">
                  Send an Inquiry
                </button>
                <div className=" text-c_accent lg:flex gap-3 justify-center hidden ">
                  <span>Get in touch with us</span>
                  <LiaLongArrowAltRightSolid size={25} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthHeros;
