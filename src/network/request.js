import axios from "axios";
export function request(config){
    const instance=axios.create({
        baseURL:"/api",
        timeout:300000000,
        // headers:{
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
    return instance(config)
}
