import React from "react";
import { GiNotebook } from "react-icons/gi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

const benefits = [
  {
    id: 1,
    icon: <GiNotebook className=" text-[30px] text-c_blue" />,
    title: "Customize with ease",
  },
  {
    id: 1,
    icon: <RiPencilRuler2Line className=" text-[30px] text-c_blue" />,
    title: "Perfectly Responsive",
  },
  {
    id: 1,
    icon: <HiUserGroup className=" text-[30px] text-c_blue" />,
    title: "Friendly Support",
  },
];

const FeatureThird = () => {
  return (
    <>
      <div className="container mx-auto md:pt-[60px]">
        <div className="mt-[30px]">
          <h2 className=" h3 text-center" data-aos="zoom-in">
            The benefits of working <br /> with us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[30px] md:mt-[40px]">
            {benefits.map((be, id) => (
              <div className=" bg-c_gray p-[40px]" key={id} data-aos="zoom-in">
                <div className="">{be.icon}</div>
                <h6 className="h6 font-psemibold my-[20px]">{be.title}</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureThird;
