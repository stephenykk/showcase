import axios from 'axios'
import { createLogger } from './logger'
import { goLogin } from './nav'
import { toast } from './toast'
import { setDefaults } from '.'

const logger = createLogger('request')

const { DSZ_BASE_API: baseURL } = import.meta.env

// 创建新的 axios 实例，子应用或公共组件包可能会把 axios 设置为 external
const axiosInst = axios.create()
axiosInst.defaults.baseURL = baseURL

const UNAUTH_CODE = 401

axiosInst.interceptors.request.use((config) => {
    // 在请求拦截器设置默认选项
    const defaultHeaders = {
        'Content-Type': 'application/json',
        // 'content-type': 'application/json',
        // ...(sessionStorage.token ? { 'Authorization': `Bearer ${sessionStorage.token}` } : {}),
        ...(sessionStorage.token ? { 'Authorization': `jwt ${sessionStorage.token}` } : {}),
    }

    // get 请求， api 要求包含 header ('Content-Type': 'application/json')
    // axios 认为请求不包含请求体，默认会删除 content-type header 
    // fix by setting: config.data = true
    if (config.method?.toLocaleLowerCase() === 'get') {
        config.data = true
    }

    // config.headers = Object.assign({}, defaultHeaders, config.headers ?? {})
    config.headers = setDefaults(config.headers ?? {}, defaultHeaders,)

    return config
}, (error) => {
    logger.error('request fail:', error)
    return Promise.reject(error)
})

axiosInst.interceptors.response.use((res) => {
    // const resData = res.data
    // return resData
    logger.info('响应:', res?.config?.url, res.data);
    return res

}, (error) => {
    // 接口返回未授权，则跳登录页
    if (error?.response?.status === UNAUTH_CODE) {
        const isLoginApi = error.config?.url?.startsWith('/auth')
        // const isLoginPage = location.pathname.startsWith('/login')
        const isLoginPage = location.hash.startsWith('#/login')
        if (isLoginApi) {
            toast.error('login fail')
        } else {
            toast.error('please log in first', () => goLogin({ return: 1 }, { replace: isLoginPage }))
        }
    }
    logger.error('接口异常:', error.config?.url, error);
    return Promise.reject(error)
})


// export async function request(options = {}) {
//     return await axiosInst(options)
// }

const request = axiosInst

// 返回axios实例
export {
    request,
}

