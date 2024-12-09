import { getNewTokens } from "src/core/services/token";
import { getCookie, setCookie } from "src/core/utils/cookie";
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("accessToken");

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await getNewTokens();
      if(!res?.response) return
      
      console.log(res.response.data )
      Cookies.set("accessToken",res.response.data.accessToken ,{ expires: 1, path: '/', secure: true })
      
    }
  }
);

export default api;
