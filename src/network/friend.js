import {request} from "@/network/request";
export function getHotTopic(limit,offset){
    return request({
        url:"/hot/topic",
        params:{
            limit,
            offset
        }
    })
}
export function Test(limit){
    return request({
        url:"/album/list",
        params:{
            limit
        }
    })
}
