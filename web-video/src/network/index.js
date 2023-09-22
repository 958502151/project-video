import axios from 'axios'
// 正在进行中的请求列表
let reqList = [] // 如果某个api存在这个数组里，说明该api暂时无法再次请求

/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
  const errorMsg = errorMessage || ''
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel(errorMsg)
      return
    }
  }
  reqList.push(url)
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function (reqList, url) {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1)
      break
    }
  }
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
  let cancel
  // 设置cancelToken对象
    config.cancelToken = new axios.CancelToken(function(c) {
      cancel = c
    })
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    stopRepeatRequest(reqList, config.url, cancel, `${config.url} 请求被中断`)
    return config
  },
  err => Promise.reject(err)
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 增加延迟，相同请求不得在短时间内重复发送
    setTimeout(() => {
      allowRequest(reqList, response.config.url)
    }, 1000) // 上一次请求返回后过1s才允许再次请求
    // ...请求成功后的后续操作
    // successHandler(response)
    return response
  },
  error => {
    if (axios.isCancel(error)) {
      console.log(error.message);
    } else {
      // 增加延迟，相同请求不得在短时间内重复发送
      setTimeout(() => {
        allowRequest(reqList, error.config.url)
      }, 1000) // 请求失败返回后过1s才允许再次请求
    }
    // 对请求错误做些什么(比如返回401、403如何处理)
    return Promise.reject(error);
    // ...请求失败后的后续操作
    // errorHandler(error)
  }
)