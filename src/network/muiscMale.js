import {request} from "@/network/request";
export function getMaleDetail(id){
    return request({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}
