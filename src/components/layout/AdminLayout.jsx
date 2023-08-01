import React, { Suspense } from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "./navbar/Navbar";
import { useNavContext } from "../../hooks/useNavContext";

const AdminLayout = () => {
  const { isShow, setIsShow } = useNavContext();
  return (
    <div className=" flex bg-gray-50">
      <div className=" hidden lg:block  w-10/12 sm:w-9/12 md:w-6/12 lg:w-2/12 h-screen">
        <SideBar />
      </div>

      {/* for mobile  */}
      <div
        className={` w-full lg:hidden h-screen fixed z-50 top-0 transition-all duration-200 bg-[#333c] ${
          isShow ? " left-0" : "left-[-100%]"
        }`}
      >
        <div className={`w-10/12 sm:w-9/12 md:w-6/12 lg:w-2/12`}>
          <SideBar />
        </div>
      </div>

      <div className=" w-full lg:w-10/12 h-screen lg:px-3 bg-gray-100 dark:bg-[#121212] overflow-y-scroll">
        <ComplexNavbar />
        <Suspense
          fallback={<div className=" text-4xl font-pbold">Loading ...</div>}
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
