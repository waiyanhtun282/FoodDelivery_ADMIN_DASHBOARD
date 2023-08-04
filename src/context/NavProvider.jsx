import { createContext, useState } from "react";

export const NavContext = createContext(null);

export const NavContextProvider = ({children}) => {
  const [isShow, setIsShow] = useState(false);

  const values = { isShow, setIsShow };

  return <NavContext.Provider value={values}>{children}</NavContext.Provider>;
};
