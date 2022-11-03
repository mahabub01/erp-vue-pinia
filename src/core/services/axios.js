import axios from 'axios'
import tokenService from './tokenService'

const baseConfig = {
  timeout: 3*60*1000,
  baseURL: process.env.VUE_APP_API_URL, //'http://localhost:8610/api/v1/'
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    Authorization: tokenService.getToken() ? tokenService.getToken() : ''
  }
}

const axiosInstance = axios.create(baseConfig)

// axiosInstance.interceptors.request.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// )

export const setupInterceptor = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const headerAuthorization = tokenService.getToken() ? tokenService.getToken() : '';
      if (config.headers && headerAuthorization) {
        config.headers["Authorization"] = headerAuthorization;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
};

export default axiosInstance