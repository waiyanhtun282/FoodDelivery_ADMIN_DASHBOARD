import React from "react";
import featureImg from "../../assets/images/index";
import AboutCard from "../about/AboutCard";

const FeatureSeven = () => {
  return (
    <div className=" bg-[#FCD9801A]">
      <div className="container mx-auto py-[50px] md:py-[100px] lg:py-[128px]">
        <AboutCard
          title={"Guranteed 1 week delivery for standard five pager website"}
          label={"Quick Delivery"}
          imgUrl={featureImg.clientMan4}
          as={"h4"}
          position="reverse"
        />
      </div>
    </div>
  );
};

export default FeatureSeven;
