import {request} from "@/network/request";
export function getHotComments(id,type,limit){
    return request({
        url:"/comment/hot",
        params:{
            id,
            type,
            limit
        }
    })
}
export function getNewComments(id,type,pageNo,pageSize,sortType){
    return request({
        url:"/comment/new",
        params:{
            id,
            type,
            pageNo,
            pageSize,
            sortType
        }
    })
}
