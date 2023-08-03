import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import { BiMenu, BiChevronRight } from "react-icons/bi";

import DarkMode from "../../theme/DarkMode";
import { useNavContext } from "../../../hooks/useNavContext";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleClick = (name) => {
    closeMenu();
    if (name == "Sign Out") {
      Cookies.remove("user");
      Cookies.remove("token");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleClick(label)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function ComplexNavbar() {
  const { isShow, setIsShow } = useNavContext();

  return (
    <div className="relative w-full mx-auto flex items-center text-blue-gray-900 bg-white dark:bg-gray-900 lg:rounded-md shadow p-2 md:p-3 lg:mt-2">
      <div
        className=" lg:hidden me-5 ms-2 w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full grid place-items-center"
        onClick={() => setIsShow((nav) => !nav)}
      >
        <BiMenu className=" text-[25px] select-none dark:text-gray-500" />
      </div>
      <div className=" hidden md:block relative w-full md:max-w-[350px] rounded-md border-gray-300 dark:border-gray-800 border-[1px] dark:text-gray-500">
        <input
          type="text"
          className=" w-full h-[38px] pl-3 focus:outline-none bg-transparent text-sm"
          placeholder="Search here ..."
        />
        <Button size="sm" className=" !absolute top-[3px] right-1 rounded-md">
          search
        </Button>
      </div>
      <div className=" ml-auto">
        <DarkMode />
      </div>
      <ProfileMenu />
    </div>
  );
}
