import React from "react";
import featureImg from "../../assets/images/index";
import AboutCard from "../about/AboutCard";

const FeatureFifth = () => {
  return (
    <>
      <div className="container mx-auto pb-[70px] md:pb-[128px]">
        <AboutCard
          label={"Free Revision Rounds"}
          title={"Get free Revisions and one week of free maintenance"}
          imgUrl={featureImg.clientMan2}
          as={"h4"}
          position="reverse"
        />
      </div>
    </>
  );
};

export default FeatureFifth;
