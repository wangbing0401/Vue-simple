/**
 * Created by WB on 2017/11/7.
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://10.10.60.132',
  // baseURL: 'http://10.10.6.37:7894',
  timeout: 1000,
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  if (config.method === 'get') {
    // config.params = qs.stringify(config.params);
    // console.log(config);
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  console.log(error)
})

var api = {
  contact_us: (data) => instance.post('/cis/api/v1/cis', data)
}

export default api
