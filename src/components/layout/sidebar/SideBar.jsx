import React from "react";
import { sideBarItems } from "./sideBarItems";
import Icons from "../../../assets/icons/index";

const SideBar = () => {
  return (
    <div className=" w-full h-screen overflow-scroll bg-gray-50 border-e-[10px] border-gray-200">
      <div className="logo pt-5 flex gap-3 items-center justify-center">
        <img src={Icons.Logo} alt="" className=" w-[70px] drop-shadow-xl" />
        <div className="">
          <h2 className=" uppercase font-pbold text-xl mt-3">Foodie</h2>
          <span className=" font-psemibold text-gray-600">Market</span>
        </div>
      </div>
      <div className="">
        <ul className=" w-[85%] mx-auto mt-5 flex flex-col gap-2">
          {sideBarItems.map((nav, id) => (
            <li key={id}>
              <div className=" flex items-center text-gray-700 gap-3 px-5 py-3 hover:bg-blue-100 hover:text-blue-700 rounded-md cursor-pointer transition-all duration-300">
                {nav.icon}
                <span>{nav.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className=" h-[100px]"></div>
      </div>
    </div>
  );
};

export default SideBar;
