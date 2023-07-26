import { Switch } from "@material-tailwind/react";
import React from "react";
import DarkMode from "../../theme/DarkMode";

const Navbar = () => {
  return (
    <div className=" h-[70px] w-full bg-white dark:bg-blue-gray-600 p-5">
      <DarkMode />
    </div>
  );
};

export default Navbar;
