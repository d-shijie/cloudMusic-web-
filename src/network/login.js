import {request} from "@/network/request";
export function Phone(phone,password){
    return request({
        url:"/login/cellphone",
        params:{
            phone,
            password
        }
    })
}
export function getStatus(){
    return request({
        url:"/login/status"
    })
}
export function getUserDetail(uid){
    return request({
        url:"/user/detail",
        params:{
            uid
        }
    })
}
export function getAccount(){
    return request({
        url:"/user/account"
    })
}
export function getSubCount(){
    return request({
        url:"/user/subcount"
    })
}
export function getUserPlayList(uid){
    return request({
        url:"/user/playlist",
        params:{
            uid
        }
    })
}
export function logout(){
    return request({
        url:"/logout"
    })
}
