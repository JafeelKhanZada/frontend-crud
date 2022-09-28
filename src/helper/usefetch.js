import axios from "axios";
const useFetch = axios.create({
  // baseURL: "http://localhost:3000/api/v1/",
  baseURL: "https://node-mongo-crud-ck58-9dyn33yd2-jafeelkhanzada.vercel.app/api/",
});
useFetch.interceptors.request.use(
  async (config) => {
    config.header = config.headers;
    if (localStorage.getItem("TOKEN")) {
      config.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("TOKEN")
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

useFetch.interceptors.response.use(function (response) {
  if (response.status === 401) {
  }
  return response;
});
export { useFetch };
//
