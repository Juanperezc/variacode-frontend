import axios from 'axios'
import ConfigStorage from './storage/config.store'

 //'http://127.0.0.1:3333'
//'http://157.56.176.217'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
     (config) => {
        // Do something before request is sent
        const token =  ConfigStorage.getToken();
        config.headers["Authorization"] = "Bearer " + token;
        return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(  async (response) => {
        return response;
   }, (error) => {
     if (!error.response) {
        return Promise.reject('Network Error')
     }
     else if ((error.response.status === 401) ){
         ConfigStorage.clearSession();
         return Promise.reject('Invalid Token')
          .finally(()=> window.location.hash = "#/login?exp=true")
     }
    else {
       
         return error.response
      }
 })

export default axiosInstance
