import { Switch } from "@material-tailwind/react";
import React from "react";
import DarkMode from "../../theme/DarkMode";

const Navbar = () => {
  return (
    <div className=" h-[70px] w-full bg-white dark:bg-gray-800 p-5 mt-3 shadow-lg">
      <DarkMode />
    </div>
  );
};

export default Navbar;
