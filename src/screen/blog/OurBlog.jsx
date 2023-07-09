import React from 'react';
import BlogImg from "../../assets/images/index";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const OurBlog = ({blogArr}) => {
  console.log({blogArr})
  // const arr = Array(6).fill("");

  return (
    <>
    <div className=" sm:h-[1362px] flex items-center">
        <div className="container mx-auto">
          <div className=" space-y-5">
            <h1 className=" h1 text-center text-dark_blue">Our Blog</h1>

            {/* blog Card */}
            <div className=" sm:grid sm:grid-cols-3 gap-8">
              {blogArr?.map((blog) => {
                return (
                  <>
                    <div className=" sm:w-[370px] sm:h-[593px]  border-red-500 " key={blog?.id}  >
                      <img
                        src={blog?.image}
                        alt={blog?.id}
                        className=" w-[100%] "
                      />
                      <div className="">
                        <h4 className=" text-gray-800 my-5">27 Jan 2021</h4>
                        <div className="sm:space-y-5 space-y-3">
                          <h3 className=" sm:h-[108px] sm:text-[24px] text-[20px] text-dark_blue">
                            How one Webflow user grew his single person
                            consultancy from $0-100K in 14 months
                          </h3>
                          <p className="para sm:h-[56px] w-[100%] text-gray-600">
                            See how pivoting to Webflow changed one person’s
                            sales strategy and allowed him to attract
                          </p>
                        </div>
                       <Link to={`/blog/${blog?.id}`}>
                       <div className=" sm:h-[28px] flex gap-3 items-center sm:my-10 my-5">
                          <span>Read More</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                       </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default OurBlog
