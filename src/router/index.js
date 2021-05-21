import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
//起始页左侧五个主路由
const Find=()=>import("../views/find/Find")
const Video=()=>import("../views/video/Video")
const FM=()=>import("../views/fm/FM")
const Friend=()=>import("../views/friend/Friend")
const Living=()=>import("../views/living/Living")
const Search=()=>import("../views/search/Search")
// 发现音乐的6个子路由
const Person=()=>import("../views/find/person/Person")
const MusicMale=()=>import("../views/find/musicMale/MusicMale")
const Broadcast=()=>import("../views/find/boradcast/Boradcast")
const Rank=()=>import("../views/find/rank/Rank")
const Singer=()=>import("../views/find/singer/Singer")
const NewMusic=()=>import("../views/find/newMusic/NewMusic")
const NewMusicList=()=>import("../views/find/newMusic/NewMusicList")
const NewAlbum=()=>import("../views/find/newMusic/NewAlbumList")
// 搜索页面的子路由
const SingleMusic=()=>import("../views/search/singleMuisc/SingleMusic")
const Album=()=>import("../views/search/album/Album")
const Lyric=()=>import("../views/search/lyric/Lyric")
const SearchVideo=()=>import("../views/search/video/Video")
const SearchUser=()=>import("../views/search/user/User")
const SearchDj=()=>import("../views/search/livingDj/LivingDj")
const SearchSinger=()=>import("../views/search/singer/Singer")
const SearchMusicMale=()=>import("../views/search/musicMale/MusicMale")
const routes=[
    {
        path:"",
        redirect:"/find"
    },
    {
        path:"/find",
        component:Find,
        children:[
            {
                path:"",
                redirect:"person"
            },
            {
                path:"person",
                component:Person
            },
            {
                path: "musicMale",
                component:MusicMale
            },
            {
                path: "broadcast",
                component:Broadcast
            },
            {
                path: "rank",
                component:Rank
            },
            {
                path: "singer",
                component:Singer
            },
            {
                path: "newmusic",
                component:NewMusic,
                children:[
                    {
                        path:"",
                        redirect:"newMusicList"
                    },
                    {
                        path: "newMusicList",
                        component:NewMusicList
                    },
                    {
                        path:"newAlbum",
                        component:NewAlbum
                    }
                ]
            }
        ]
    },
    {
        path: "/video",
        component:Video
    },
    {
        path: "/friend",
        component:Friend
    },
    {
        path: "/living",
        component:Living
    },
    {
        path: "/fm",
        component:FM
    },
    {
        path:"/search",
        component:Search,
        children: [
            {
                path: "",
                redirect: "singleMusic"
            },
            {
                path:"singleMusic",
                component:SingleMusic
            },
            {
                path:"searchSinger",
                component:SearchSinger
            },
            {
                path: "album",
                component:Album
            },
            {
                path:"searchVideo",
                component:SearchVideo
            },
            {
                path: "searchMusicMale",
                component:SearchMusicMale
            },
            {
                path: "lyric",
                component:Lyric
            },
            {
                path:"searchDj",
                component:SearchDj
            },
            {
                path:"searchUser",
                component:SearchUser
            }

        ]
    }
]
const router=new VueRouter({
    routes,
    mode:"history"
})

export default router
