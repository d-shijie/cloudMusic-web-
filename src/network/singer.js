import {request} from "@/network/request";
export function getSinger(offset,type,area,initial){
    return request({
        url:"/artist/list",
        params:{
            offset,
            type,
            area,
            initial
        }
    })
}
