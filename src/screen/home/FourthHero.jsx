import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaPencilRuler } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { SlNote } from "react-icons/sl";

const fourthArr = [
  {
    id: 1,
    icons: <HiOutlineUserGroup size={30} />,
    title: "Uses Client First",
  },
  {
    id: 2,
    icons: <HiOutlineCheckCircle size={30} />,
    title: "Two Free Revision Round",
  },
  {
    id: 3,
    icons: <FaPencilRuler size={30} />,
    title: "Template Customization",
  },
  {
    id: 4,
    icons: <MdContactSupport size={30} />,
    title: "24/7 Support",
  },
  {
    id: 5,
    icons: <HiOutlineClock size={30} />,
    title: "Quick Delivery",
  },
  {
    id: 6,
    icons: <SlNote size={30} />,
    title: "Hands-on approach",
  },
];

const FourthHero = () => {
  // const arrayFour = Array(6).fill();
  return (
    <div className=" bg-c_gray flex items-center py-[60px] md:py-[128px]">
      <div className="container mx-auto">
        <div className="">
          <div
            className="mx-auto text-center mb-[30px]"
            data-aos="zoom-in"
          >
            <div className="">Features</div>
            <h2 className=" lg:h2 h3 my-3">
              Design that solves <br /> problems, one product at a time
            </h2>
          </div>

          <div className=" lg:gap-8 grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-[30px]">
            {fourthArr?.map((arr) => {
              return (
                <div
                  className=" lg:w-[370px] lg:p-0  lg:h-[316px] md:p-3 px-3 md:h-auto h-[250px] bg-white  flex justify-center items-center rounded-sm shadow-sm"
                  key={arr?.id}
                  data-aos="zoom-in"
                >
                  <div className=" space-y-3 ">
                    <div className=" text-c_blue">{arr?.icons}</div>
                    <h6 className=" text-dark_blue h6">{arr?.title}</h6>
                    <p className=" text-gray-700 para lg:w-[324px] lg:h-[112px]">
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
    </div>
  );
};

export default FourthHero;
