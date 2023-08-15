import { Input } from '@material-tailwind/react'
import React from 'react'

const CommonInput = ({type,id,name,label,size,autoComplete}) => {
  return (
    <>
      <Input
                  id={id}
                  name={name}
                  type={type}
                  autoComplete={autoComplete}
                  
                  label={label}

                  size={size}
                  className=" text-[20px] dark:text-white"
                />
    </>
  )
}

export default CommonInput;
