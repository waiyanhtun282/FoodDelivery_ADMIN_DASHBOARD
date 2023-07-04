import { createContext, useState } from "react";

export const modalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isShowNav, setIsShowNav] = useState(false);

  const values = {
    isShowNav,
    setIsShowNav,
  };
  return (
    <modalContext.Provider value={values}>{children}</modalContext.Provider>
  );
};
