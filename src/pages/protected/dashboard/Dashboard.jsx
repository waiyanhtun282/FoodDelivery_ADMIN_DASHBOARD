import React from "react";
import { Avatar, Chip, Typography } from "@material-tailwind/react";
import FirstDashboard from "./FirstDashboard";
import SecondDashboard from "./SecondDashboard";
import { ThirdDashboard } from "./ThirdDashboard";

const Dashboard = () => {
  return (
    <div className=" space-y-3 lg:space-y-5 ">
      <div className=" flex items-center  justify-between  mx-5 my-3 md:my-5  lg:mx-0   lg:mt-10 ">
        <Typography
          // variant="h4"
          className="  text-dark_blue dark:text-gray-200    md:text-2xl lg:text-3xl font-pnormal"
        >
          Dashboards
        </Typography>
        <Typography className=" flex  text-dark_blue gap-5 text-[16px] md:text-[17px] md:gap-10 ">
          <p className=" dark:text-gray-400 text-[15px] md:text-[16px]">Anaylitics</p>
          <p className=" text-c_blue dark:text-gray-200 text-[15px] md:text-[16px]">Food Deleviry</p>
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
