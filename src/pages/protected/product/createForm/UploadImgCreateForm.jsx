import React from 'react'
import UploadInput from '../../../../components/Input/UploadInput'

const UploadImgCreateForm = () => {
  return (
    
       <div className=" bg-gray-100 p-2 border border-gray-300 my-3 rounded-md  dark:bg-gray-800/10 dark:text-gray-700 dark:border-gray-700/10 ">

            <div className="flex items-center justify-center w-[100%]  h-[100%]">
             <UploadInput />
            </div>
          </div>
    
  )
}

export default UploadImgCreateForm
