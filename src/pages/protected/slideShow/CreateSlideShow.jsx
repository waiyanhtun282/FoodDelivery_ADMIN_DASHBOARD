import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CommonInput from "../../../components/Input/CommonInput";
import UploadInput from "../../../components/Input/UploadInput";

const CreateSlideShow = () => {
  return (
    <div>
      <div className=" my-5 flex items-center  gap-3  mx-5 lg:mx-0">
        <HiOutlineArrowNarrowLeft
          size={20}
          className=" cursor-pointer dark:text-blue-300"
        />
        <h1 className=" text-xl  text-tint_blue dark:text-gray-300">
          SlideShow
        </h1>
      </div>
      <div className="bg-white shadow-sm rounded-md border  overflow-y-scroll  border-gray-300  dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md  p-5   max-w-3xl mx-auto">
        <h3 className=" font-pnormal dark:text-gray-300 mb-5">
          CreateSlideDetail
        </h3>
        <form action="" className=" grid md:grid-cols-1 md:gap-3  gap-5">
         
            <CommonInput
              type="text"
              id="name"
              label="Name"
              autoComplete="off"
              size="lg"
            />
            <CommonInput
              type="text"
              id="title"
              label="Title"
              autoComplete="off"
              size="lg"
            />
         
       
            <CommonInput
              type="text"
              id="subtitle"
              label="SubTitle"
              autoComplete="off"
              size="lg"
            />
            <CommonInput
              type="text"
              id="desc"
              label="Description"
              autoComplete="off"
              size="lg"
            />
         

       
            <UploadInput />
          
          <div className="   space-y-5 lg:space-y-0 lg:grid lg:grid-flow-col lg:gap-2">
          <CommonInput
              type="date"
              id="date"
              label="StartDate"
              autoComplete="off"
              size="lg"
            />
                        <CommonInput
              type="date"
              id="enddate"
              label="EndDate"
              autoComplete="off"
              size="lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSlideShow;
