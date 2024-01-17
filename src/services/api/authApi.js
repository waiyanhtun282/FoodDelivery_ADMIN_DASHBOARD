import { mainApi } from "./apiConfig";

export const loginFun = async (datas) => {
  const res = await mainApi.post("login", datas);
  console.log(datas)
  return res.data;
};
