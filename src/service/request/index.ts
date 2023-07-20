import axios from "axios";
import type{ AxiosInstance, AxiosResponse } from "axios"
import type { YGRequestConfig } from "./type"



class YGRequest {
  instance: AxiosInstance
  constructor(config: YGRequestConfig) {
    this.instance = axios.create(config)

    // 2.1 全局拦截器：每个instance都添加的拦截器
    this.instance.interceptors.request.use(config => {
      console.log("全局请求拦截成功");
      return config
    },
    err => {
      console.log("请求拦截失败", err);
    }
    )
    this.instance.interceptors.response.use(res => {
      console.log("全局响应拦截成功");
      // 添加加载动画
      return res.data
    })

    // 2.2针对特定的instance实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )

  }

  // 封装网络请求的方法
  request<T = any>(config: YGRequestConfig<T>) {
    // 2.3 单个网络请求的拦截
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // new Promise如果不传入类型,返回的是一个unknown类型
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        if(config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T = any>(config: YGRequestConfig<T>) {
    return this.request({method: "GET", ...config
    })
  }
  post<T = any>(config: YGRequestConfig<T>) {
    return this.request({method: "POST", ...config})
  }
  delete<T = any>(config: YGRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" })
  }
  patch<T = any>(config: YGRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" })
  }

}

export default YGRequest
