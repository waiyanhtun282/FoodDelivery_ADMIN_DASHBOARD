import React from "react";

import "animate.css";
import { Router } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default App;
