import React from 'react';
import featureImg from '../../assets/images/index';


const FeatureFourth = () => {
  return (
    <>
     <div className=" sm:h-[580px] flex items-center py-5 sm:py-0">
        <div className="container mx-auto">
          <div className=" sm:h-[398px] flex sm:flex-row flex-col  items-center  gap-8  sm:gap-14 ">
            {/* left client */}
            <div className=" sm:w-[624px] sm:h-[316px] sm:space-y-5 text-justify sm:text-left space-y-2">
              <h5 className=" text-dark_blue">Use Client-first</h5>

              <h2 className="w-[100%] sm:h-[168px] h3 text-dark_blue">
                Top agencies and freelancers around the world use Client-first{" "}
              </h2>

              <p className="para sm:h-[84px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* right */}
            <div className=" sm:w-[575px] sm:h-[398px]">
              <img src={featureImg?.clientMan1} alt="clientman1"  className=" w-[100%] h-[100%] object-contain" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default FeatureFourth
