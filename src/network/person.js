import {request} from "@/network/request";
export function getPersonNewSong(limit){
    return request({
        url:"/personalized/newsong",
        params:{
            limit
        }
    })
}
export function getPersonDjprogram(){
    return request({
        url:"/personalized/djprogram"
    })
}
export function getMusicList(limit){
    return request({
        url:"/personalized",
        params:{
            limit
        }
    })
}
export function getPersonalized(limit){
    return request({
        url:"/personalized/privatecontent/list",
        params:{
            limit
        }
    })
}
export function getPersonlizedMV(){
    return request({
        url:"/personalized/mv"
    })
}
export function getDjProgram(){
    return request({
        url:"/personalized/djprogram"
    })
}
export function getDjhot(limit){
    return request({
        url:"/dj/hot",
        params:{
            limit
        }
    })
}
