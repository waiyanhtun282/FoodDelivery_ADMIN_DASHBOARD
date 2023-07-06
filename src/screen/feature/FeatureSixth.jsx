import React from 'react';
import featureImg from '../../assets/images/index';


const FeatureSixth = () => {
  return (
    <>
     <div className=" sm:h-[654px] flex items-center py-5 sm:py-0">
        <div className="container mx-auto">
        <div className=" sm:h-[398px] flex sm:flex-row flex-col items-center sm:gap-14 gap-10">
            {/* left client */}
            <div className=" sm:w-[624px] sm:h-[260px] sm:space-y-5 text-justify sm:text-left space-y-3">
              <h5 className=" text-dark_blue">24/7 Support</h5>

              <h2 className="w-[100%] sm:h-[112px] h3 text-dark_blue">
              Working with us, you will be getting 24/7 priority support
              </h2>

              <p className="para sm:h-[84px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            {/* right */}
            <div className=" sm:w-[575px] sm:h-[398px]">
              <img src={featureImg?.clientMan3} alt="clientman1"  className=" w-[100%] h-[100%] object-contain" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default FeatureSixth
