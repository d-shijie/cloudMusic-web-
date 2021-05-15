import axios from "axios";
export function request(config){
    const instance=axios.create({
        baseURL:"https://nicemusic-api.lxhcool.cn/",
        timeout:30000
    })
    return instance(config)
}
