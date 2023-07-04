import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

const array =[
    {
        id:60,
        number:"01",
        name:"How much time does it take?"
    },
    {
        id:70,
        number:"02",
        name:"What is your class naming convention?"
    },
    {
        id:80,
        number:"03",
        name:"How do you communicate?"
    },
    {
        id:90,
        number:"04",
        name:"I have a bigger project. Can you handle it?"
    },
    {
        id:100,
        number:"05",
        name:"What is your class naming convention?"
    },
]

const FifthHalf = () => {
//   const arr = Array(5).fill("");

  return (
    <div className="sm:h-[537px] flex items-center  py-5 sm:py-0">
    <div className=" container mx-auto ">
      <div className=" flex sm:flex-row flex-col sm:justify-between  sm:gap-36 gap-16">
        <div className=" sm:space-y-3  space-y-2 text-center">
          <h3 className=" h3 sm:w-[328px]">Frequently asked questions</h3>
          <p className=" text-c_blue">Contact us for more info</p>
        </div>

        <div className=" sm:w-[846px] ">
          {array?.map((arr) => {
            return (
           <>
              <div
                className="  flex  justify-between items-center sm:text-left border-y-[1px] border-y-gray-100  h-16"
                key={arr?.id}
              >
                <h3 className=" text-c_blue sm:text-[24px] text-[18px]">{arr?.number} </h3>

                <h4 className=" sm:text-[24px] text-[13px] text-dark_blue">
                    {arr?.name}
                </h4>
                <AiOutlinePlus size={17}  className=" cursor-pointer"/>

              </div>
                {/* <br className=" bg-green-600 h-6 " /> */}
           </>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default FifthHalf
