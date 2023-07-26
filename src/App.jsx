import React, { Suspense } from "react";

import "animate.css";
import { Router } from "./routes/routes";

const App = () => {
  return (
    <div>
      <Suspense >
        <Router />
      </Suspense>
    </div>
  );
};

export default App;
