import { Form } from "formik";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import FormCreate from "./createForm/FormCreate";
import UploadImgCreateForm from "./createForm/UploadImgCreateForm";

const CreateProduct = () => {
  return (
    <div className=" ">
      <div className=" my-5 flex items-center  gap-3  mx-5 lg:mx-0">
        <HiOutlineArrowNarrowLeft size={20} className=" cursor-pointer dark:text-blue-300" />
        <h1 className=" text-xl  text-tint_blue dark:text-gray-300">Products</h1>
      </div>

      <div className=" mx-5  my-8">
        <h1 className=" text-lg font-psemibold dark:text-gray-300">Add Category</h1>

        <div className="my-5   flex  flex-col gap-3 md:flex-row md:gap-5">
          {/* creat form */}
         <FormCreate />
        </div>

        <div className=" bg-white p-5 border  border-gray-300 rounded-md md:w-8/12 dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md">
          <h1 className="dark:text-gray-300">Assets</h1>
            
            {/* Image Uplaod */}
         <UploadImgCreateForm />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
