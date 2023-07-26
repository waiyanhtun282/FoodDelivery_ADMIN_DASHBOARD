import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { Switch } from "@material-tailwind/react";

const DarkMode = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (event) => {
    setTheme(colorTheme);
    setDarkSide(event.target.checked);
  };
  return (
    <div className=" flex gap-3 items-center">
      <Switch checked={darkSide} onChange={toggleDarkMode} id="switch" />
      <label htmlFor="switch" className=" dark:text-white">
        Dark Mode
      </label>
    </div>
  );
};

export default DarkMode;
