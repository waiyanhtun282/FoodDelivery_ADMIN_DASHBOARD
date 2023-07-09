import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Images from "../../assets/images/index";
import { Link } from "react-router-dom";

const sevenArr = [
  {
    id: 16,
    template: Images.Client1,
  },
  {
    id: 17,
    template: Images.Client2,
  },
  {
    id: 18,
    template: Images.Client3,
  },
];

const SevenHeros = () => {
  //   const arr = Array(3).fill("");

  return (
    <div className=" lg:h-[737px] flex items-cente  my-5 lg:my-0">
      <div className="container mx-auto">
        <h3 className=" h3 lg:my-8 my-5 text-center lg:text-left" data-aos="zoom-in">Our blog</h3>
        <div className="md:grid lg:grid-cols-3 md:griid-cols-2  md:gap-5 lg:gap-10 flex flex-col  items-center">
          {sevenArr?.map((arr) => {
            return (
              <div
                className="lg:w-[350px]lg:h-[609px] h-[600px]  "
                key={arr?.id}
                data-aos="zoom-in"
              >
                <img
                  src={arr?.template}
                  alt="Client1"
                  className="w-[100%] h-[285px] object-cover"
                />
                <div className=" lg:space-y-3 space-y-2">
                  <p className=" text-gray-600 my-3">19 Jan 2022</p>
                  <h3 className=" text-dark_blue text-[20px] h-[108px] w-[100%]">
                    How one Webflow user grew his single person consultancy from
                    $0-100K in 14 months
                  </h3>

                  <p className=" text-gray-600 h-[56px] w-[100%]  ">
                    See how pivoting to Webflow changed one person’s sales
                    strategy and allowed him to attract
                  </p>

                 <Link to={`/template/detail?detailId=${arr?.id}`}>
                 <div className=" flex  items-center gap-3 h-16 cursor-pointer">
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
  );
};

export default SevenHeros;
