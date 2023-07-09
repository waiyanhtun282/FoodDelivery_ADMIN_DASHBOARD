import React from "react";
import featureImg from "../../assets/images/index";
import AboutCard from "../about/AboutCard";

const FeatureFourth = () => {
  return (
    <>
      <div className=" flex items-center py-[70px] md:py-[128px]">
        <div className="container mx-auto">
          <AboutCard
            imgUrl={featureImg.clientMan1}
            title={
              "Top agencies and freelancers around the world use Client-first"
            }
            as={'h4'}
            label={"Use Client-first"}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureFourth;
