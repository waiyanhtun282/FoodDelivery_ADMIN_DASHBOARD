import { Select, Option } from "@material-tailwind/react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Pagination } from "@mantine/core";
import ProdctsTable from "./ProdctsTable";


const Product = () => {

  return (
    <div className=" ">
      {/* add prodcut */}
      <div className=" bg-white px-5 py-2 my-5 rounded-md shadow-sm dark:bg-gray-800/20 dark:shadow-lg">
        <div className=" flex  flex-col  gap-2 items-center md:justify-between  md:flex-row">
          <div className="     dark:text-gray-400   grid   grid-cols-1 md:grid-cols-2 gap-3  lg:flex lg:items-center lg:gap-2">
            <div className="w-3/12">
              <Select
                label="Category "
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                // size="sm"
              >
                <Option> 1</Option>
                <Option> 2</Option>
                <Option> 3</Option>
                <Option> 4</Option>
                <Option> 5</Option>
              </Select>
            </div>
            <div className="w-3/12">
              <Select
                label="Status "
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                // size="sm"
              >
                <Option>HTML</Option>
                <Option>React</Option>
                <Option>Vue</Option>
                <Option>Angular</Option>
                <Option>Svelte</Option>
              </Select>
            </div>
            <div className="w-3/12">
              <Select
                label="Price"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                // size="sm"
              >
                <Option> HTML</Option>
                <Option> React</Option>
                <Option> Vue</Option>
                <Option> Angular</Option>
                <Option> Svelte</Option>
              </Select>
            </div>
            <div className="w-3/12">
              <Select
                label="Date "
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                // size="sm"
              >
                <Option> HTML</Option>
                <Option> React</Option>
                <Option> Vue</Option>
                <Option> Angular</Option>
                <Option> Svelte</Option>
              </Select>
            </div>
          </div>

          <div className=" bg-[#4741f6] text-gray-50 p-3 flex items-center gap-2 rounded-md shadow-sm  cursor-pointer ">
            <AiOutlinePlusCircle size={20} />
            <span className="">Add Products</span>
          </div>
        </div>
      </div>

      {/* second list products */}
      <div className=" bg-white shadow-md rounded-md  p-5  dark:bg-gray-800/20  ">
        <h1 className=" text-2xl dark:text-gray-50">Products</h1>
        {/* table */}
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
         <ProdctsTable/>
         </div>

        {/* paganaton */}
         <div className=" flex justify-between  my-3 md:my-5 ">

         <div className="  dark:bg-gray-800/10 md:block  hidden">
        <Select variant="outlined"  label="Show 10" className=" dark:bg-gray-800 ">
        <Option className=" "> 1</Option>
        <Option className=" "> 2</Option>
        <Option className=" "> 3</Option>
        <Option className=" "> 4</Option>
        <Option className=" "> 5</Option>
      </Select>
        </div>

        <div className=" dark:bg-gray-50 ">
        <Pagination total={3}  siblings={1} defaultValue={10} className="dark:text-gray-50"/>
        </div>
         </div>
      </div>
    </div>
  );
};

export default Product;
