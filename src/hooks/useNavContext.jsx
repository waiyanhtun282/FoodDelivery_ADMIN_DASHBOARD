import { useContext } from "react";
import { NavContext } from "../context/NavProvider";

export const useNavContext = () => {
  return useContext(NavContext);
};
