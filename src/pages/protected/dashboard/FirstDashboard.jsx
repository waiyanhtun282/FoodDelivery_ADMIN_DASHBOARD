import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import {LiaCommentDollarSolid} from "react-icons/lia";
import {BiGroup} from "react-icons/bi";
import {CiShop} from "react-icons/ci";
const FirstDashboard = () => {
  return (
    <div className=" flex  gap-5">
        <Card  className=' w-4/12 bg-gray-50  py-3 px-5 dark:bg-gray-900'>
          <div className=" flex items-center justify-between">
          <Typography className=" text-tint_blue uppercase dark:text-gray-200">
            Revenues
            </Typography>
            <Typography className=" p-1 rounded-md bg-[#1ddb1d] dark:bg-blue-700">
            <LiaCommentDollarSolid size={25} color='white'/>
            </Typography>
          </div>
          <div className="  mt-3">
            <Typography variant="h4" className=" text-dark_blue dark:text-gray-400">
              $ 3,402321
            </Typography>

            <Typography variant="small" className="flex gap-2 mt-1">
              <Typography className=' text-[green] dark:text-indigo-600' variant="small">+6.50%
              </Typography>
              since Last month
            </Typography>
          </div>
       </Card>

       <Card  className=' w-4/12 bg-gray-50  py-3 px-5 dark:bg-gray-900' >
       <div className=" flex items-center justify-between">
          <Typography className=" text-tint_blue uppercase dark:text-gray-200">
            Cutomers
            </Typography>
            <Typography className=" p-1 rounded-md bg-[hotpink] dark:bg-blue-700">
            <BiGroup size={25} color='white'/>
            </Typography>
          </div>
          <div className="  mt-3">
            <Typography variant="h4" className=" text-dark_blue dark:text-gray-400">
              34
            </Typography>

            <Typography variant="small" className="flex gap-2 mt-1">
              <Typography className=' text-[hotpink] dark:text-blue-700' variant="small">-2.80%
              </Typography>
              since Last month
            </Typography>
          </div>
       </Card>
       <Card  className=' w-4/12 bg-gray-50  py-3 px-5 dark:bg-gray-900'>
       <div className=" flex items-center justify-between">
          <Typography className=" text-tint_blue uppercase dark:text-gray-200">
            Shop  Views
            </Typography>
            <Typography className=" p-1 rounded-md bg-[#1ddb1d] dark:bg-blue-700">
            <CiShop size={25} color='white'/>
            </Typography>
          </div>
          <div className="  mt-3">
            <Typography variant="h4" className=" text-dark_blue dark:text-gray-400">
               683
            </Typography>

            <Typography variant="small" className="flex gap-2 mt-1">
              <Typography className=' text-[green] dark:text-blue-700' variant="small">+1.70%
              </Typography>
              since Last month
            </Typography>
          </div>
       </Card>
       </div>
  )
}

export default FirstDashboard
