import { Option, Select } from "@material-tailwind/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerTable from "./CustomerTable";



const Customer = () => {
  return (
    <div>
      {/* customer header */}
      <div className=" flex justify-between items-center mx-5 my-3 md::my-5   lg:mx-0 ">
        <h2 className=" font-psemibold  md:text-2xl dark:text-gray-300">Customer Lists</h2>
        <div className=" flex  flex-col-reverse gap-2 md:flex-row md:gap-5">
          <div className=" ">
            <Select label="Filter" className=" bg-white shadow-sm dark:bg-gray-900 dark:text-gray-50">
              <Option>Hambugar</Option>
            </Select>
          </div>

          <div className=" bg-white p-2  rounded-md  shadow-sm dark:bg-gray-900 ">
            <div className=" flex items-center gap-2">
              <div className=" bg-[#dbecfb] p-1 rounded-md">
                <AiOutlinePlus className=" " />
              </div>
              <p className=" dark:text-gray-50"> Add Customer</p>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="relative overflow-x-auto  md:mx-5 lg:mx-0">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customer;
