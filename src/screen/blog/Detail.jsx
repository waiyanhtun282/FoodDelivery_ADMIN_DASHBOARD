import React from "react";
import BlogImg from "../../assets/images/index";
import Lists from "../home/Template/detail/Lists";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useModalContext } from "../../hooks/useModalContext";
import {HiArrowNarrowLeft} from 'react-icons/hi';

const Detail = () => {
  const navigate = useNavigate();
  const {id} =useParams();
  // console.log(id)
const {blogArr}  = useModalContext();
const blogDetail = blogArr?.find((blog) => blog?.id === parseInt(id));


  return (
    <>
     <Link onClick={() =>navigate(-1)}>
     <p className="  cursor-pointer  container flex items-center gap-3 lg:py-5 py-3">
        <HiArrowNarrowLeft size={20}/>
        <span className=" text-[18px]">Back</span>
        </p>
     </Link>
    <div className=" lg:h-[2600px] flex items-center ">
      <div className="container mx-auto">
        <div className="  flex flex-col justify-center  items-center py-10 lg:py-0">
         
          {/* blog heading deatail */}
         <div className="  text-center  lg:w-[949px] lg:h-[172px]  ">
            <h3 className="h3">
              A UX Case Study on Creating a Studious Environment for Students
            </h3>
            <p className="para my-3 md:my-0">Andrew Jonson Posted on 27th January 2021</p>
          </div>

          {/* image */}
          <div className=" lg:h-[477px] ">
            <img
              src={BlogImg?.blogHeader}
              alt="blogdetail "
              className=" w-[100%] h-[100%]  object-contain"
            />
          </div>
         

          {/* readblog */}
          <div className=" lg:h-[1811px]  mt-5 lg:mt-0">
            <div className="container mx-auto">
              <div className=" lg:w-[840px] mx-auto md:space-y-5 space-y-3">
                <h2 className=" h3 lg:h-[112px] text-dark_blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>

                <p className="para lg:h-[224px] text-gray-600 text-justify md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>

                <h3 className="h3 lg:h-[56px]">
                  Ut enim ad minim veniam, quis nostrud.
                </h3>

                <p className="para lg:h-[224px] text-gray-600 text-justify md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>

                {/* list */}
                <Lists />

                <div className=" lg:h-[224px] text-gray-600 text-justify lg:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </div>

                {/* imsge */}
               
                  <img
                    src={blogDetail?.image}
                    alt=" blog1"
                    className=" lg:w-[839px] w-[100%] h-[100%] lg:h-[311px] object-cover"
                  />
                  
               {/* end  */}

               <h3 className="h3 lg:h-[56px]">
                  Ut enim ad minim veniam, quis nostrud.
                </h3>

                <p className="para lg:h-[224px] text-gray-600 text-justify lg:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Detail;
