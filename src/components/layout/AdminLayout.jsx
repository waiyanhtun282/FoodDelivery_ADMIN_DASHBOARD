import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "./navbar/Navbar";

const AdminLayout = () => {
  return (
    <div className=" flex bg-gray-50">
      <div className=" hidden lg:block  w-10/12 sm:w-9/12 md:w-6/12 lg:w-2/12 h-screen">
        <SideBar />
      </div>
      <div className=" w-full lg:w-10/12 h-screen md:px-3 bg-gray-100 dark:bg-[#121212] overflow-y-scroll">
        <ComplexNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
