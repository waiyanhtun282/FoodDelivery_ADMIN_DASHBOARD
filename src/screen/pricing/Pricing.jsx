import React from "react";
import PricingCard from "./PricingCard";
import PriceSecond from "./PriceSecond";

const priceArr = [
  {
    id:1,
    dollar:"299",
    design:"Per Design",
    title:"Landing Page",
    para:"When you’re ready to go beyond prototyping in Figma,Webflow’s ready to help ",
   

  },
  {
    id:2,
    dollar:"399",
    design:"Multi Design",
    title:" Website Page ",
    para:"When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    

  },
  {
    id:3,
    dollar:"499",
    design:"Per Design",
    title:" Complex Project ",
    para:"When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    

  },
]

const Pricing = () => {
  // const arr =Array(3).fill("");
  return (
    <div className=" lg:py-12 py-6">
      <div className=" container mx-auto">
        <div className=" flex justify-center my-8">
          <div className=" text-center lg:w-[562px] h-[136px]  space-y-3">
            <h1 className=" lg:h2 h3">Our Pricing Plans</h1>
            <p className="para   h-[56px] text-gray-600 max-w-sm md:max-w-none">
              When you’re ready to go beyond prototyping in Figma, Webflow is
              ready to help you bring your designs to life — without coding
              them.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="  flex gap-6 lg:flex-row flex-col  lg:justify-center md:items-center">
          {
            priceArr?.map((price) => <PricingCard key={price?.id} price={price}/>)
          }
         
        </div>

        {/* Price Second */}
      </div>
        <PriceSecond />
    </div>
  );
};

export default Pricing;
