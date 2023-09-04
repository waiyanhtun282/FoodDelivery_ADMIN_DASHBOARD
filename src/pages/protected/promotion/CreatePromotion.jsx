import React from 'react'
import {HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import CommonInput from '../../../components/Input/CommonInput';

const CreatePromotion = () => {
  return (
    <div>
      <div className=" my-5 flex items-center  gap-3  mx-5 lg:mx-0">
        <HiOutlineArrowNarrowLeft size={20} className=" cursor-pointer dark:text-blue-300" />
        <h1 className=" text-xl  text-tint_blue dark:text-gray-300 ">Promotion</h1>
      </div>

      <div className="bg-white p-5 border  border-gray-300 rounded-md  dark:bg-gray-900/20 dark:border-gray-800 dark:shadow-md max-w-3xl mx-auto   ">
        <h1 className=' dark:text-gray-300 my-3'>Prmotion Detail</h1>
        <form action="" className=' grid grid-cols-2 gap-8'>
          <CommonInput  type="text"  id="prmotion type" name="prmotionType" autoComplete="off" label="prmotion type" size="lg"/>
          <CommonInput  type="text"  id="cashback " name="cashback" autoComplete="off" label="cashback " size="lg"/>

          <CommonInput  type="text"  id="discount " name="discount" autoComplete="off" label="discount " size="lg"/>

          <CommonInput  type="text"  id="gitway " name="gitway" autoComplete="off" label="gitway " size="lg"/>
          <CommonInput  type="date"  id="startdate " name="startDate" autoComplete="off" label="startdate " size="lg"/>
          <CommonInput  type="date"  id="enddate " name="startDate" autoComplete="off" label="enddate " size="lg"/>

          

          

        </form>
      </div>
    </div>
  )
}

export default CreatePromotion;