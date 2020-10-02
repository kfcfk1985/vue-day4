import axios from 'axios'

//ok
//这里封装一个函数库
export default {
    login(user){        
        return axios.get('/api/login',      //这里的 字符建议单独抽出来，放到一个独立的文件中
                        {params:user})      //`params` 是即将与请求一起发送的 URL 参数
    }
}