import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
 import UploadInput from "../../../components/Input/UploadInput";
import CommonInput from "../../../components/Input/CommonInput";
const CreateCategory = () => {
  return (
    <div>
      <div className=" my-5 flex items-center  gap-3  mx-5 lg:mx-0">
        <HiOutlineArrowNarrowLeft
          size={20}
          className=" cursor-pointer dark:text-blue-300"
        />
        <h1 className=" text-xl  text-tint_blue dark:text-gray-300">
          Categories
        </h1>
      </div>

      <div className="bg-white shadow-sm rounded-md border  overflow-y-scroll  border-gray-300  dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md  p-5 mx-5 md:mx-auto  md:max-w-3xl">
        <h3 className=" font-pnormal dark:text-gray-300">Details</h3>
        <form className=" my-3  space-y-5">
          <CommonInput type="text" id="name" label="Name" autoComplete="off" size="lg"/>
          <UploadInput />
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
