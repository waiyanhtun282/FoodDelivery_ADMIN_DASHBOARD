import React from "react";
import { sideBarItems } from "./sideBarItems";
import Icons from "../../../assets/icons/index";
import {BiChevronRight} from "react-icons/bi";

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
        <ul className=" w-[90%] mx-auto mt-5 flex flex-col gap-2">
          {sideBarItems.map((nav, id) => (
            <li key={id} className="group flex justify-between items-center px-5 hover:bg-blue-100 rounded-md cursor-pointer transition-all duration-300">
              <div className=" flex items-center text-gray-700 gap-3 py-3 group-hover:text-blue-700">
                {nav.icon}
                <span className=" select-none">{nav.name}</span>
              </div>
              {nav?.subLinks?.length > 0 && <BiChevronRight size={20} className=" group-active:rotate-90"/>}
            </li>
          ))}
        </ul>
        <div className=" h-[100px]"></div>
      </div>
    </div>
  );
};

export default SideBar;
