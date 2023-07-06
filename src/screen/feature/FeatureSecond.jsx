import React from 'react';
import FeatuteImg from '../../assets/icons/index';

const FeatureSecond = () => {
  return (
    <div className=' sm:h-[84px] flex items-center sm:my-10  my-5'>
        <div className=" container mx-auto">
            <div className=" flex sm:flex-row flex-col items-center sm:gap-16 gap-8">
                <img src={FeatuteImg?.logoNumber} alt="logoNumber"  className=' w-[176px] h-[84px]'/>
                <img src={FeatuteImg?.logoWrapper} alt=" logoFeature" className='w-[75%] h-[32px]'/>
            </div>
        </div>

      
    </div>
  )
}

export default FeatureSecond
