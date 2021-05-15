import {request} from "@/network/request";
export function getSong(id){
    return request({
        url:"/song/url",
        params:{
            id
        }
    })
}
