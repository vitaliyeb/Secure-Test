import { default as axiosLib } from "axios";

export const axios = axiosLib.create({
  baseURL: process.env.REACT_APP_HOST || "",
});

axios.interceptors.request.use(
    (config) => {
        config.params = {...config.params, api_key: process.env.REACT_APP_API_KEY}
        return config;
    }
)

axios.interceptors.response.use(
  (response) => response,
  (reject) => {
      return Promise.reject(reject);
  }
);
