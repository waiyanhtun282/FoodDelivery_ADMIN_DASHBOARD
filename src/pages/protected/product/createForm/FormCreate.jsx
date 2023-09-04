import React from "react";
import { Select, Option, Textarea } from "@material-tailwind/react";
import CommonInput from "../../../../components/Input/CommonInput";

const FormCreate = () => {
  return (
    <>
      <div className=" p-5 bg-white shadow-sm rounded-md border  overflow-y-scroll  border-gray-300 lg:w-8/12 dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md">
        <h3 className=" font-pnormal dark:text-gray-300">Details</h3>
        <form className=" my-3 ">
          <div className=" grid  grid-cols-3 gap-3">
            <CommonInput type="text" placeholder="Name"  id="name"  name="Name" autoComplete="off" label="Name"  size="lg"/>
            <CommonInput type="text" placeholder="Price"  id="price"  name="Price" autoComplete="off" label="Price"  size="lg"/>

            <CommonInput type="text" placeholder="Short Desc"  id="short"  name="short" autoComplete="off" label="ShortDesc"  size="lg"/>
          </div>

          <div className="w-[100%] mt-3">
          <Textarea label="LongDesc" className=" dark:text-white" />
          </div>
        </form>
      </div>

      <div className=" space-y-5 md:space-y-8 md:w-4/12">
        <div className=" bg-white p-3 rounded-md border border-gray-300 dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md">
          <div className=" bg-teal-800 text-white text-center  p-4 rounded-md dark:bg-blue-500 ">
            Save Changes
          </div>
        </div>

        <div className=" bg-white border border-gray-300 rounded-md  p-3 dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md">
          <h3 className=" uppercase dark:text-gray-300">Parent</h3>
          <div className=" my-3">
            <Select variant="outlined" label="Select Version">
              <Option>Apple</Option>
              <Option>Orange</Option>
              <Option>girl ko bar nyar </Option>
              <Option> Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCreate;
