import Cookies from "js-cookie";
import React from "react";

const useAuth = () => {
  const userInfo = Cookies.get("user");
  const tokenInfo = Cookies.get("token");
  const user = userInfo ? JSON.stringify(userInfo) : null;
  const token = tokenInfo ? JSON.stringify(tokenInfo) : null;
  return { user, token };
};

export default useAuth;
