import {request} from "@/network/request";
export function getBanner(){
    return request({
        url:"/dj/banner"
    })
}
// 听听
export function getListen(limit){
    return request({
        url:"/dj/toplist/newcomer",
        params:{
            limit
        }
    })
}
// 付费精品
export function getPay(limit){
    return request({
        url:"/dj/toplist/pay",
        params:{
            limit
        }
    })
}
// 个性推荐
export function getPersonal(limit){
    return request({
        url:"/dj/personalize/recommend",
        params:{
            limit
        }
    })
}
// 分类推荐  创作翻唱2001 声之剧场10001 音乐故事2 情感调频3 声音恋人3001
export function getRecommend(type){
    return request({
        url:"/dj/recommend/type",
        params:{
            type
        }
    })
}
export function getCategory(){
    return request({
        url:"/dj/catelist"
    })
}
export function getHotDjs(limit){
    return request({
        url:"/dj/toplist/popular",
        params:{
            limit
        }
    })
}
