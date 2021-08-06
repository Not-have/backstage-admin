export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
import axios from 'axios'
import { ElMessage } from 'element-plus'
axios.defaults.withCredentials = true


export default function request(config: object) {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 5000,
        headers: {
            "content-type": "application/json;charset=UTF-8",
        }
    })
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
        return Promise.reject(error)
    });
    instance.interceptors.response.use(response => {
        const res = response.data
        if (res.code !== 200) {
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
        } else {
            return res
        }
    }, error => {
        console.log(error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    });
    return instance(config)
}