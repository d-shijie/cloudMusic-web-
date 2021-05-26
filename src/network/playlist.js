import {request} from "@/network/request";
export function getPlayListDetail(id){
    return request({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}
export function getComment(id,limit,offset,before){
    return request({
        url:"/comment/playlist",
        params:{
            id,
            limit,
            offset,
            before
        }
    })
}
