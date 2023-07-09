import React from 'react';
import BlogImg from '../../assets/images/index';


const BlogHero = () => {
  return (
    <>
     <div className=" lg:h-[857px] flex items-center my-10 animate__animated animate__fadeIn">
      <div className="container mx-auto">
        <div className="  flex  flex-col items-center">
         <div className=" text-center md:space-y-5 spac-y-3">
           <h1 className=" lg:h-[128px] lg:w-[949px]  h3 max-w-lg md:max-w-none">A UX Case Study on Creating a Studious Environment for Students</h1>
          <p className="para">Andrew Jonson Posted on 27th January 2021</p>
         </div>
          <div className=" lg:h-[477px] my-5 md:my-0">
            <img src={BlogImg?.blogHeader} alt="blogHeder" className=' w-[100%] h-[100%] object-contain' />
          </div>
         <div className="md:text-center text-justify md:space-y-5 space-y-3">
             <p className="para md:h-[84px] lg:w-[831px]  text-gray-600">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
          </p>
            <p className=' md:h-[28px]  text-c_blue  '>ReadMore</p>
         </div>
        </div>
      </div>
     </div>
      
    </>
  )
}

export default BlogHero
