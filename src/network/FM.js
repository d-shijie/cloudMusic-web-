import {request} from "@/network/request";
export function getFM(){
    return request({
        url:"/personal_fm"
    })
}
