import {request} from "@/network/request";
export function getRankList(){
    return request({
        url:"/toplist"
    })
}
