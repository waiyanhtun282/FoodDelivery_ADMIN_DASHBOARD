import React, { useEffect } from "react";
import Routers from "./routes/Routers";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Routers />
    </div>
  );
};

export default App;
