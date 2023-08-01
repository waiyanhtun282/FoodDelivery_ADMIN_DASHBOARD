import React from "react";
import { Avatar, Chip, Typography } from "@material-tailwind/react";
import FirstDashboard from "./FirstDashboard";
import SecondDashboard from "./SecondDashboard";
import { ThirdDashboard } from "./ThirdDashboard";


const Dashboard = () => {
  return (
    <div className=" space-y-5 ">
      <div className=" flex items-center  justify-between mt-10">
        <Typography variant="h4" className="  text-dark_blue dark:text-gray-200 ">
          Dashboards
        </Typography>
        <Typography className=" flex gap-10 text-dark_blue text-[17px] ">
          <p className=" dark:text-gray-400">Anaylitics</p>
          <p className=" text-c_blue dark:text-gray-200">Food Deleviry</p>
        </Typography>
      </div>
      {/* dashboard first */}
      <FirstDashboard />

      {/* secondDashBoard */}
     <SecondDashboard />


{/* Third dashbaord */}
<ThirdDashboard />
     
    </div>
  );
};

export default Dashboard;
