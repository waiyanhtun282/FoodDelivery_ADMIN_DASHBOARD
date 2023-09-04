import React from 'react'
import {BsImageFill } from "react-icons/bs";

const UploadInput = () => {
  return (
    <label
    htmlFor="dropzone-file"
    className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-800/10 hover:bg-gray-100 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:bg-gray-900/10"
  >
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <p className=" p-3 bg-white  shadow-sm mb-3 border border-gray-300 rounded-sm flex items-center gap-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 dark:shadow-lg"> 
        <BsImageFill  size={18}/>
       <span className="  font-extralight"> Upload Image</span></p>

     
      <p className="text-xs text-gray-700 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" />
  </label>
  )
}

export default UploadInput
