import { BASE_URL, TIME_OUT } from "./config";
import YGRequest from "./request";

export const ygRequest = new YGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const ygReqeust2 = new YGRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: TIME_OUT,

  // 2.2 实例的拦截器
  interceptors: {
    requestSuccessFn(config) {
      console.log("爱彼迎的请求拦截成功");
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      console.log("爱彼迎的响应拦截成功");
      return res
    },
    responseFailureFn(err) {
      return err
    },
  }

})