import {request} from "@/network/request";
// 新歌速递
// 全部:0
// 华语:7
// 欧美:96
// 日本:8
// 韩国:16
export function getNewMusic(type){
    return request({
        url:"/top/song",
        params:{
            type
        }
    })
}
// 新碟上架
// limit: 取出数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
// type : new:全部 hot:热门,默认为 new
// year : 年,默认本年
// month : 月,默认本月
export function getNewAlbum(offset,area,limit,year,month){
    return request({
        url:"/top/album",
        params:{
            offset,
            area,
            limit,
            year,
            month
        }
    })
}
