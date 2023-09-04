import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import {LiaCommentDollarSolid} from "react-icons/lia";
import {BiGroup} from "react-icons/bi";
import {CiShop} from "react-icons/ci";
const FirstDashboard = () => {
  return (
    <div className=" flex  gap-3 flex-col mx-5 md:gap-5 md:flex-row lg:mx-0">
        <div  className='  bg-gray-50  py-3 px-5 dark:bg-gray-900 lg:w-4/12 shadow-md  rounded-md'> 
          <div className=" flex items-center justify-between">
          <div className=" text-tint_blue uppercase dark:text-gray-200">
            Revenues
            </div>
            <div className=" p-1 rounded-md bg-[#1ddb1d] dark:bg-blue-700">
            <LiaCommentDollarSolid size={25} color='white'/>
            </div>
          </div>
          <div className="  mt-3">
            <div  className="text-2xl font-psemibold text-dark_blue dark:text-gray-400">
              $ 3,402321
            </div>

            <div  className="flex gap-2 mt-1 dark:text-gray-500">
              <div className=' text-[green] dark:text-indigo-600' >+6.50%
              </div>
              since Last month
            </div>
          </div>
       </div>

       <div  className='  bg-gray-50  py-3 px-5 dark:bg-gray-900  lg:w-4/12 shadow-md  rounded-md' >
       <div className=" flex items-center justify-between">
          <div className=" text-tint_blue uppercase dark:text-gray-200">
            Cutomers
            </div>
            <div className=" p-1 rounded-md bg-[hotpink] dark:bg-blue-700">
            <BiGroup size={25} color='white'/>
            </div>
          </div>
          <div className="  mt-3">
            <div  className="text-2xl font-psemibold text-dark_blue dark:text-gray-400">
              34
            </div>

            <div  className="flex gap-2 mt-1 dark:text-gray-500">
              <div className=' text-[hotpink] dark:text-blue-700' >-2.80%
              </div>
              since Last month
            </div>
          </div>
       </div>
       <div  className='  bg-gray-50  py-3 px-5 dark:bg-gray-900 lg:w-4/12 shadow-md  rounded-md'>
       <div className=" flex items-center justify-between">
          <div className=" text-tint_blue uppercase dark:text-gray-200">
            Shop  Views
            </div>
            <div className=" p-1 rounded-md bg-[#1ddb1d] dark:bg-blue-700">
            <CiShop size={25} color='white'/>
            </div>
          </div>
          <div className="  mt-3">
            <div  className="text-2xl font-psemibold text-dark_blue dark:text-gray-400">
               683
            </div>

            <div className="flex gap-2 mt-1 dark:text-gray-500">
              <div className=' text-[green] dark:text-blue-700'>+1.70%
              </div>
              since Last month
            </div>
          </div>
       </div>
       </div>
  )
}

export default FirstDashboard
