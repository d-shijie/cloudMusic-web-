import {request} from "@/network/request";
export function getMusicList(cat,limit,offset){
    return request({
        url:"/top/playlist",
        params:{
            cat,
            limit,
            offset
        }
    })
}
export function getPlayList(){
    return request({
        url:"/playlist/catlist"
    })
}
