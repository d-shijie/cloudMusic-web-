import {request} from "@/network/request";
export function getCategory(){
    return request({
        url:"/video/group/list"
    })
}
export function getCategoryList(){
    return request({
        url:"/video/category/list"
    })
}
// 可以从getCategory里获取对应id 但一直报301
// id: 60100, name: "翻唱"
// id: 58101, name: "听BGM"
// id: 2100, name: "生活"
// id: 2103, name: "游戏"
// id: 57104, name: "ACG音乐"
// id: 1105, name: "最佳饭制"
// id: 58100, name: "现场"
// id: 1101, name: "舞蹈"
// id: 1000, name: "MV"
export function getVideo(id){
    return request({
        url:"/video/group",
        params:{
            id
        }
    })
}
