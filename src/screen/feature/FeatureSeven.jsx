import React from 'react';
import featureImg from '../../assets/images/index';


const FeatureSeven = () => {
  return (
    <div className=' sm:h-[654px] bg-[#f8e8c0] flex items-center py-5 sm:py-0'>
        <div className="container mx-auto">
        <div className=" sm:h-[398px] flex sm:flex-row flex-col-reverse  items-center sm:gap-24 gap-12">
            {/* left client */}
              <div className=" sm:w-[575px] sm:h-[398px]">
              <img src={featureImg?.clientMan4} alt="clientman1"  className=" w-[100%] h-[100%] object-contain" />
            </div>

              {/* right */}
            <div className=" sm:w-[624px] sm:h-[256px] sm:space-y-4  text-justify sm:text-left space-y-2">
              <h5 className=" text-dark_blue">Free Revision Rounds</h5>

              <h2 className="w-[100%] sm:h-[145px] h3 text-dark_blue">
            Guranteed 1 week delivery for standard five pager website
              </h2>

              <p className="para sm:h-[84px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

          
          </div>
        </div>
    
    </div>
  )
}

export default FeatureSeven
