import React from "react";
import Images from "../../assets/images/index";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col justify-center items-center h-screen ">
      <img src={Images.notFoundImg} alt="" className="" />
      
       <Button  onClick={() => navigate(-1)} color="amber" className=" rounded-md">Go Back Home</Button>
     
    </div>
  );
};

export default NotFound;
