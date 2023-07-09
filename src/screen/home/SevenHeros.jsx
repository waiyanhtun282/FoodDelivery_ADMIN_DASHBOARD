import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Images from "../../assets/images/index";

const sevenArr =[
    {
        id:12,
        image:Images.Client1,

    },
    {
        id:13,
        image:Images.Client2,

    },
    {
        id:14,
        image:Images.Client3,

    }
]

const SevenHeros = () => {
//   const arr = Array(3).fill("");

  return (
    <div className=" sm:h-[737px] flex items-cente  my-5 sm:my-0">
        <div className="container mx-auto">
          <h3 className=" h3 sm:my-8 my-5 text-center sm:text-left">Our blog</h3>
         <div className="sm:grid sm:grid-cols-3  sm:gap-10 flex flex-col  items-center">
         {sevenArr?.map((arr) => {
            return (
              <div className="sm:w-[350px] sm:h-[609px] h-[600px]  " key={arr?.id} >
                  <img
                    src={arr?.image}
                    alt="Client1"
                    className="w-[100%] h-[285px] object-cover"
                  />
                  <div className=" sm:space-y-3 space-y-2">
                    <p className=" text-gray-600 my-3">19 Jan 2022</p>
                    <h3 className=" text-dark_blue text-[20px] h-[108px] w-[100%]">
                      How one Webflow user grew his single person consultancy
                      from $0-100K in 14 months
                    </h3>

                    <p className=" text-gray-600 h-[56px] w-[100%]  ">
                      See how pivoting to Webflow changed one person’s sales
                      strategy and allowed him to attract
                    </p>

                    <div className=" flex  items-center gap-3 h-16">
                      <span>Read More</span>
                      <LiaLongArrowAltRightSolid size={25} />
                    </div>
                  </div>
                </div>
            );
          })}
         </div>
        </div>
      </div>
  )
}

export default SevenHeros
