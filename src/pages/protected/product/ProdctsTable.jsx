import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Image1 from "../../../assets/image/Image1.png";

const TableHead = [
  "ProductName",
  "Category",
  "Price",
  "Stock",
  "Sold",
  "Revenew",
  "Actions",
];

const ProdctsTable = () => {
  const arr = Array(8).fill("");

  return (
    <table className="table-auto w-full text-sm  text-gray-500 dark:text-gray-400 mt-5 border">
      <thead className="text-xs  uppercase  text-gray-50 border bg-[#4741f6] ">
        <tr>
          {TableHead?.map((head, index) => {
            return (
              <th scope="col" className="px-2 py-5 " key={index}>
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className=" ">
        {arr?.map((index, a) => {
          return (
            <tr
              className="text-gray-500 bg-white border-b dark:bg-gray-900 dark:border-gray-800/50 hover:bg-gray-  50 dark:hover:bg-gray-800/10  mx-auto"
              key={a}
            >
              <td
                scope="row"
                className="flex items-center justify-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={Image1}
                  alt="Jese image"
                />

                <div className="text-base font-semibold text-gray pl-3">
                  Neil Sims
                </div>
              </td>
              <td className="px-2 py-4  font-psemibold  justify-center ">
                <div className=" flex justify-center font-psemibold">
                  Men ,Watch
                </div>
              </td>
              <td className="px-2 py-4">
                <div className="flex items-center font-psemibold  justify-center">
                  $12434
                </div>
              </td>
              <td className="px-2 py-4">
                <div className=" font-psemibold flex justify-center">500</div>
              </td>
              <td className="px-2 py-4">
                <div className=" font-psemibold flex justify-center">65</div>
              </td>
              <td className="px-2 py-4">
                <div className=" font-psemibold flex justify-center">$2365</div>
              </td>
              <td className="px-2 py-4">
                <div className=" font-psemibold flex justify-center">
                  <BiDotsVerticalRounded size={20} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProdctsTable;
