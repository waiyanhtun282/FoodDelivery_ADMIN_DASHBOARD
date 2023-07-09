import React from 'react';
import BlogImg from "../../assets/images/index";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const OurBlog = ({blogArr}) => {
  // console.log({blogArr})
  // const arr = Array(6).fill("");

  return (
  
    <div className=" lg:h-[1362px] flex items-center" key={blogArr.id}>
        <div className="container mx-auto">
          <div className=" space-y-5">
            <h1 className=" h1 text-center text-dark_blue">Our Blog</h1>

            {/* blog Card */}
            <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-5">
              {blogArr?.map((blog) => {
                return (
               
                    <div className=" lg:w-[370px] lg:h-[593px]  border-red-500 " key={blog?.id}  >
                      <img
                        src={blog?.image}
                        alt={blog?.id}
                        className=" w-[100%]"
                      />
                      <div className="">
                        <h4 className=" text-gray-800 my-5">27 Jan 2021</h4>
                        <div className="md:space-y-5 space-y-3">
                          <h3 className=" lg:h-[108px] md:text-[24px] text-[20px] text-dark_blue">
                            How one Webflow user grew his single person
                            consultancy from $0-100K in 14 months
                          </h3>
                          <p className="para lg:h-[56px] w-[100%] text-gray-600">
                            See how pivoting to Webflow changed one person’s
                            sales strategy and allowed him to attract
                          </p>
                        </div>
                       <Link to={`/blog/${blog?.id}`}>
                       <div className=" lg:h-[28px] flex gap-3 items-center lg:my-10 my-5">
                          <span>Read More</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                       </Link>
                      </div>
                    </div>
                 
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
   
  )
}

export default OurBlog
