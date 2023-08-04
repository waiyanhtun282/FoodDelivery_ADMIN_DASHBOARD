import axios from "axios";

const BASE_URL = "https://foodapiproject02.000webhostapp.com/api/";

export const mainApi = axios.create({
  baseURL: BASE_URL,
});
