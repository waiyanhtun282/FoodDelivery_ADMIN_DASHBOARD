import React from 'react';
import BlogImg from '../../assets/images/index';


const BlogHero = () => {
  return (
    <>
     <div className=" sm:h-[857px] flex items-center my-10  ">
      <div className="container mx-auto">
        <div className="  flex  flex-col items-center">
         <div className=" text-center sm:space-y-5 spac-y-3">
           <h1 className="sm:h1 sm:h-[128px] sm:w-[949px]  h2 max-w-lg sm:max-w-none">A UX Case Study on Creating a Studious Environment for Students</h1>
          <p className="para">Andrew Jonson Posted on 27th January 2021</p>
         </div>
          <div className=" sm:h-[477px] my-5 sm:my-0">
            <img src={BlogImg?.blogHeader} alt="blogHeder" className=' w-[100%] h-[100%] object-contain' />
          </div>
         <div className="sm:text-center text-justify sm:space-y-5 space-y-3">
             <p className="para sm:h-[84px] sm:w-[831px]  text-gray-600">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
          </p>
            <p className=' sm:h-[28px]  text-c_blue  '>ReadMore</p>
         </div>
        </div>
      </div>
     </div>
      
    </>
  )
}

export default BlogHero
