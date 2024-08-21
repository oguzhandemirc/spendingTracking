import axios from 'axios'

const axiosInstance = axios.create({

  baseURL: 'https://10.16.17.60:7203/api',
  timeout: 10000

})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

export default axiosInstance
