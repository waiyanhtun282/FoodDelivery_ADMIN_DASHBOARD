import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const AdminLayout = () => {
  return (
    <div className=" flex bg-gray-200">
      <div className=" w-2/12 h-screen">
        <SideBar />
      </div>
      <div className=" w-10/12 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
