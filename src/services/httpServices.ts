import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "constants/api";

class Services {
  axios: AxiosInstance;

  constructor() {
    // this.axios = axios.create({
    //   baseURL: BASE_URL,
    //   timeout: 60000,
    //   // headers: {
    //   //   Authorization:
    //   //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG5leHRsZXZlbHZuLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwiX2lkIjoiNjJlYzBjMzNhMGVjOTJjNGNlMzliODY3IiwiaWF0IjoxNjU5Njg0ODY4LCJleHAiOjE2NjIyNzY4Njh9.zz79pBQeXhSQ8WYDbeMxdSW8DKSxHeHHD3MO5V7Bf_o",
    //   // },
    // });
    this.axios = axios;
    this.axios.defaults.withCredentials = false;

    //! Interceptor request
    this.axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    //! Interceptor response
    this.axios.interceptors.response.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  attachTokenToHeader(token: string) {
    this.axios.interceptors.request.use(
      function (config) {
        if (config.headers) {
          // Do something before request is sent
          config.headers["Authorization"] = `Bearer ${token}`;
          // config.headers.sessionId = token;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, params?: any) {
    return this.axios.get(url, { params });
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }
  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.patch(url, data, config);
  }
}

export default new Services();
