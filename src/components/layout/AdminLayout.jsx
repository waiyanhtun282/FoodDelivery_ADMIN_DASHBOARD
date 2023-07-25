import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <div className="">
        <SideBar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
