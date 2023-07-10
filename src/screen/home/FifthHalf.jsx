import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const array = [
  {
    id: 60,
    number: "01",
    name: "How much time does it take?",
  },
  {
    id: 70,
    number: "02",
    name: "What is your class naming convention?",
  },
  {
    id: 80,
    number: "03",
    name: "How do you communicate?",
  },
  {
    id: 90,
    number: "04",
    name: "I have a bigger project. Can you handle it?",
  },
  {
    id: 100,
    number: "05",
    name: "What is your class naming convention?",
  },
];

const FifthHalf = () => {
  //   const arr = Array(5).fill("");

  return (
    <div className=" flex items-center py-[50px]  md:py-[120px]">
      <div className=" container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0">
          <div className=" lg:w-5/12" data-aos="zoom-in">
            <h3 className=" h3 mb-3">Frequently asked questions</h3>
            <p className=" text-c_blue">Contact us for more info</p>
          </div>

          <div className=" lg:w-7/12" data-aos="zoom-in">
            {array?.map((arr) => {
              return (
                <React.Fragment key={arr.id}>
                  <div className="  flex  justify-between items-center  lg:text-left  border-y-[1px] border-y-gray-100  h-16">
                    <div className=" flex gap-10">
                      <h3 className="lg:text-left text-center text-c_blue lg:text-[24px] text-[18px]">
                        {arr?.number}{" "}
                      </h3>

                      <h4 className=" lg:text-[24px] text-[13px] text-dark_blue">
                        {arr?.name}
                      </h4>
                    </div>
                    <AiOutlinePlus size={17} className=" cursor-pointer" />
                  </div>
                  {/* <br className=" bg-green-600 h-6 " /> */}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthHalf;
