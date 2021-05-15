import {request} from "@/network/request";
export function getBanner(type){
    return request({
        url:"/banner",
        params:{
            type
        }
    })
}
