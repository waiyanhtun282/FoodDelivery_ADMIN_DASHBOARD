import React from "react";

const AboutCard = ({ imgUrl, title, label, as, position = "start" }) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
      <div
        className={`h-full flex flex-col justify-center ${
          position == "reverse" ? "lg:order-last" : ""
        }`}
      >
        <p className=" md:text-[18px]">{label}</p>
        <h2 className={`${as} my-[20px]`}>{title}</h2>
        <p className=" text-dark_blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="">
        <img src={imgUrl} alt="" className={` w-full lg:w-[90%] ${position!="reverse" && "lg:ms-auto"}`} />
      </div>
    </div>
  );
};

export default AboutCard;
