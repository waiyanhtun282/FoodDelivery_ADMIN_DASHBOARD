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
    <div>
      <Switch
        label={"Dark Mode"}
        checked={darkSide}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
