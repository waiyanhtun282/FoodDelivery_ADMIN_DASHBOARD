import React from "react";
import {BiDotsVerticalRounded} from "react-icons/bi";
import Image1 from "../../../assets/image/Image1.png";

const Category = () => {
  return (
    <div>
      <div className=" my-5">
        <h1 className="  text-2xl "> Category </h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  dark:text-gray-400 bg-white shadow-md rounded-md  mx-5 ">
          <thead className="text-xs  bg-blue-600 text-gray-50 uppercase  dark:bg-gray-800/10 dark:text-gray-50 border-b ">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                 Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-800 border-b   ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img src={Image1} alt="img" />
              </th>
              <td className="px-6 py-4  ">
                Apple
              </td>
              <td className="px-6 py-4  text-center">
                <BiDotsVerticalRounded  size={18} className=" cursor-pointer "/>
              </td>
            </tr>

          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Category;
