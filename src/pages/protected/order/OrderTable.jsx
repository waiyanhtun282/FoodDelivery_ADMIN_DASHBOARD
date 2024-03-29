import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import Image1 from "../../../assets/image/Image1.png";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {BiTime} from "react-icons/bi";
const OrderTable = () => {
  const arr = Array(6).fill("");

  return (
    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400   border-separate  border-spacing-y-3">
          <thead className="text-xs text-gray-700  bg-[aliceblue]  dark:text-gray-400  dark:bg-gray-900 ">
        
            <tr className=" shadow-sm dark:shadow-md">
            <th scope="col" className="px-5 ">
             <div className=" flex gap-1 ">
             id
                <MdOutlineArrowDropDown />
             </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                 Name
              </th>
            
              <th scope="col" >
                Payment
              </th>
              <th scope="col" >
               <div className=" flex gap-1">
               TimeRemaining
                <MdOutlineArrowDropDown />
               </div>
              </th>
              <th scope="col" >
                Type
              </th>
              <th scope="col" >
                Status
              </th>
              <th scope="col" >
                Total
              </th>
              <th scope="col" >
                Action
              </th>
            </tr>
          </thead>
          <tbody >
         {
          arr?.map((index,a) =>{
           return(
            <tr  className=" bg-[aliceblue] shadow-sm dark:bg-gray-900 dark:shadow-md" key={a}>
            <td className=" px-5 py-5 text-black dark:text-gray-50">#322</td>
            <td>
              <div className=" flex items-center gap-3">
                <img src={Image1} alt=" image1" />
                <p className=" text-black dark:text-gray-100">
                  Brokery
                </p>
              </div>
            </td>
            <td className=' text-black dark:text-gray-100'>Cash</td>
            <td>
              <div className=" flex items-center  gap-3 text-black dark:text-gray-200">
              <BiTime />
              13min
              </div>
              </td>

              <td className=" text-red-300">
                 Delievery
              </td>

              <td>
                <div className=" text-yellow-600">
                Delievery
                </div>
              </td>

              <td className=' text-[#000] dark:text-gray-300'>$12e33</td>

              <td>
                <BiDotsVerticalRounded  className=" text-center text-black cursor-pointer mx-auto dark:text-gray-50" size={18}/>
              </td>
           </tr>
           )
          })
         }
          </tbody>
         
        </table>
  )
}

export default OrderTable
