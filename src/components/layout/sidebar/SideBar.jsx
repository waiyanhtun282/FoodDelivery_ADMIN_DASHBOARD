import React, { useState } from "react";
import { sideBarItems } from "./sideBarItems";
import Icons from "../../../assets/icons/index";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState(null);
  const [activeNav, setActiveNav] = useState(1);
  const navigate = useNavigate();

  const handleRoute = (nav) => {
    setActive(active ? null : nav);
    setActiveNav(nav.id);
    nav?.subLinks ? null : navigate(nav.link);
  };

  const handleNestedRoute = (link) => {
    navigate(link);
  };

  return (
    <div className=" w-full h-screen overflow-y-scroll bg-gray-50 dark:bg-gray-900 border-gray-200">
      <div className="logo pt-5 flex gap-3 items-center justify-center">
        <img src={Icons.Logo} alt="" className=" w-[70px] drop-shadow-xl" />
        <div className="">
          <h2 className=" uppercase font-pbold text-xl mt-3 dark:text-gray-200">
            Foodie
          </h2>
          <span className=" font-psemibold text-gray-600 dark:text-gray-400">
            Market
          </span>
        </div>
      </div>
      <div className="">
        <ul className=" w-[90%] mx-auto mt-5 flex flex-col gap-2 transition-all duration-300">
          {sideBarItems.map((nav, id) => (
            <React.Fragment key={id}>
              <li
                className="group flex flex-col justify-center transition-all duration-300"
                onClick={() => handleRoute(nav)}
              >
                <div
                  className={`flex justify-between items-center hover:bg-blue-100 rounded-md cursor-pointer transition-all duration-300 px-5 ${
                    activeNav == nav.id ? "bg-blue-100" : null
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 py-3 group-hover:text-blue-700 transition-all duration-300 ${
                      activeNav == nav.id
                        ? "text-blue-700 dark:text-blue-700"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {nav.icon}
                    <span className=" select-none">{nav.name}</span>
                  </div>
                  {nav?.subLinks?.length > 0 && (
                    <BiChevronRight
                      size={20}
                      className={`text-gray-700 dark:text-gray-300 group-hover:text-blue-700 transition-all duration-200 ${
                        active?.id == nav.id && active?.subLinks?.length > 0
                          ? "rotate-90"
                          : null
                      } ${
                        activeNav == nav.id
                          ? "text-blue-700 dark:text-blue-700"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
                  )}
                </div>
              </li>
              {nav?.subLinks?.length > 0 && nav.id == active?.id && (
                <ul className={`list-disc transition-all duration-300`}>
                  {active?.subLinks?.map((sub_nav, sub_id) => (
                    <li
                      key={sub_id}
                      className=" ms-3 group flex justify-between items-center px-5 hover:bg-blue-100 rounded-md cursor-pointer transition-all duration-300"
                      onClick={() => handleNestedRoute(sub_nav.link)}
                    >
                      <div className=" flex items-center text-gray-700 dark:text-gray-300 gap-3 py-3 group-hover:text-blue-700 transition-all duration-300">
                        {sub_nav.icon}
                        <span className=" select-none">{sub_nav.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className=" h-[100px]"></div>
      </div>
    </div>
  );
};

export default SideBar;
