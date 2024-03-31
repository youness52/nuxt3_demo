import axios from 'axios';
  
export default defineNuxtPlugin((nuxtApp) => {
  
    const axiosApi = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
          "Content-type": "application/json",
          //'Authorization': 'Bearer '+ if ()localStorage.getItem("apiToken",response.data.token),
        },
      });
      axiosApi.interceptors.request.use(
        (config) => {
          
          if (process.client) {
            config.headers.Authorization = `Bearer `+ localStorage.getItem("apiToken");
            //config.headers.Authorization = `Bearer 207|VSfKRZD222ZdFPevXXE2VQ8aRSnn92wdLM3D4NdP6c4fabbe`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error); 
        }
      );
   
    return {
        provide: {
            axiosApi: axiosApi,
        },
    };
});