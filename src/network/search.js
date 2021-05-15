import {request} from "@/network/request";
export function getSearch(keywords,limit,offset,type){
    return request({
        url:"/search",
        params:{
            keywords,
            limit,
            offset,
            type
        }
    })
}
export function getSearchAll(keywords,limit){
    return request({
        url:"/search",
        params:{
            keywords,
            limit
        }
    })
}
