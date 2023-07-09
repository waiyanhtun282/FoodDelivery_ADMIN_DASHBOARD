import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Images from "../../assets/images/index";

const SecondArr = [
  {
    id: 1,
    image: Images.P1,
    title: "Strategy",
    para: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 2,
    image: Images.P2,
    title: "Wireframing",
    para: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 3,
    image: Images.P3,
    title: "Design",
    para: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 4,
    image: Images.P4,
    title: "Development",
    para: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
];
const SecondHero = () => {
  // const arr = Array(4).fill();

  return (
    <div className=" lg:h-[661px]  flex   items-center  bg-c_gray py-5 md:py-3 lg:py-0">
      <div className="  container mx-auto">
        <div className="  flex lg:flex-row flex-col  justify-between  items-center lg:items-start  space-y-8 lg:space-y-0">
          <div
            className=" sm:w-[405px] text-center sm:text-left space-y-3 "
            data-aos="zoom-in"
          >
            <h2 className=" h2">How we work</h2>
            <p className="text-gray-600 para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className=" text-c_blue flex items-center gap-2 justify-center sm:justify-normal">
              <span className=" ">Get in touch with us</span>
              <LiaLongArrowAltRightSolid className=" " />
            </div>
          </div>
          <div className="sm:w-[656px]  ">
            <div className="grid grid-cols-2    sm:gap-16 gap-8">
              {SecondArr?.map((arr) => {
                return (
                  <div className=" space-y-3 " key={arr?.id} data-aos="zoom-in">
                    <img
                      src={arr?.image}
                      alt=" home work p1"
                      className="sm:w-[50px] sm:h-[50px] w-[35px] h-[35px]"
                    />
                    <div className=" text-dark_blue">
                      <h3 className=" sm:h6 h-5">{arr?.title}</h3>
                      <p className="sm:para text-[14px] text-gray-600 my-2 sm:my-0">
                        {arr?.para}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
