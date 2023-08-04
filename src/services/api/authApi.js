import { mainApi } from "./apiConfig";

export const loginFun = async (datas) => {
  const res = await mainApi.post("login", datas);
  return res.data;
};
