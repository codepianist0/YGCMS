// 在axiosRequestConfig上添加几个拦截器选项
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"


export interface YGRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (err: any) => any
  }
}