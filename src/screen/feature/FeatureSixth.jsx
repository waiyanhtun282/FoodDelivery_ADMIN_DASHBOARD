import React from "react";
import featureImg from "../../assets/images/index";
import AboutCard from "../about/AboutCard";

const FeatureSixth = () => {
  return (
    <div className="container mx-auto pb-[70px] md:pb-[100px]">
      <AboutCard
        title={"Working with us, you will be getting 24/7 priority support"}
        imgUrl={featureImg.clientMan3}
        label={"24/7 Support"}
        as={"h4"}
      />
    </div>
  );
};

export default FeatureSixth;
