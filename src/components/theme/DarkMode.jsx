import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { Switch } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

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
    <div className=" flex gap-3 items-center shadow-sm border-[1px] dark:border-none border-gray-400 rounded-full">
      <Switch
        size="md"
        color={darkSide === true ? "blue" : "dark"}
        onLabel={<IconSun size="1rem" stroke={2.5} color="yellow" />}
        offLabel={
          <IconMoonStars
            size="1rem"
            stroke={2.5}
            color={"gray"}
          />
        }
        checked={darkSide}
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
