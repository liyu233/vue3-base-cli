import axios from "axios";

const url = {
  prod: ``,
  dev: ``,
};

const service = axios.create({
  baseURL: url.dev,
  timeout: 15000,
  withCredentials: true, // 异步请求携带cookie
  headers: {
    "Content-Type": "application/json",
    token: "your token",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    const data = response.data;
    if (data && data.code === 0) {
      return {
        ok: true,
        data: data.data,
        message: data.message,
      };
    } else {
      return {
        ok: false,
        data: data.data,
        message: data.message,
      };
    }
  },
  function (error) {
    return {
      ok: false,
      data: error,
    };
  }
);

export default service;
