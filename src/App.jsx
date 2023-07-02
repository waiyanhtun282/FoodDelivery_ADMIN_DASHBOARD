import React, { useEffect, useRef } from "react";
import Routers from "./routes/Routers";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const preLocationRef = useRef(location);
  useEffect(() => {
    if (preLocationRef.current !== location) {
      window.location.reload();
    }
    preLocationRef.current = location;
  }, [location]);
  return (
    <div>
      <Routers />
    </div>
  );
};

export default App;
