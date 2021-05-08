// 封装网络请求方法

import {ref} from 'vue'
import axios from 'axios';
function usURLAxios(url, type) {
    const result = ref(null)
    const loading = ref(true)
    const loaded =ref(false)
    const error =ref(null)
    axios[type](url).then((res)=>{
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e=>{
        error.value = e
        loading.value = false
    })
    return {
        result, //响应成功结果
        loading, //加载状态
        loaded, //请求状态
        error // 错误信息
    }
}
export default usURLAxios