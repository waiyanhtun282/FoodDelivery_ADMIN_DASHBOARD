import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "./navbar/Navbar";

const AdminLayout = () => {
  return (
    <div className=" flex bg-gray-200">
      <div className=" w-2/12 h-screen">
        <SideBar />
      </div>
      <div className=" w-10/12 h-screen px-3 bg-white dark:bg-[#333] overflow-y-scroll">
        <ComplexNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
