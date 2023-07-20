export const BASE_URL = "http://codercba.com:8000"
export const TIME_OUT = 10000

// 区分开发和生产环境
// 方式一: 两个BASE_URL,在生产时注释另外一个
// export const BASE_URL = "http://codercba.dev:8000"
// export const BASE_URL = "http://codercba.prod:8000"

// 方式二: 使用import.mate.env.MODE/ DEV/ PROD/ SSR区分
// export let BASE_URL = ""
// if(import.meta.env.DEV) {
//   console.log(import.meta.env.MODE);
//   BASE_URL = "http://codercba.dev:8000"
// } else {
//   console.log(import.meta.env.MODE);
//   BASE_URL = "http://codercba.prod:8000"
// }

// 方式三,使用文件.env
console.log(import.meta.env.VITE_NAME); // 会使用env里面的数据





