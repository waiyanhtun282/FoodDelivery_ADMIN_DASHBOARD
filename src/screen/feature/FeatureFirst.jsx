import React from "react";
import FeatureImg from "../../assets/icons/index";
import { Button } from "@material-tailwind/react";

const FeatureFirst = () => {
  return (
    <div className=" bg-tint_blue flex  items-center py-[70px]">
      <div className="container mx-auto ">
        <div className=" flex flex-col-reverse lg:flex-row gap-[50px]">
          {/* left heroFirst */}
          <div className="">
            <h1 className=" h1 text-white">
              All the features you need
            </h1>
            <p className=" para text-gray-400 mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className=" rounded-full bg-c_yellow text-black mt-[30px]">View Pricing</Button>
          </div>

          {/* right hero */}
          <div className="">
            <img
              src={FeatureImg?.featureImage}
              alt=" featureImage"
              className="w-[80%] lg:w-[100%] h-[100%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFirst;
