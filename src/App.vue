<template>
  <div id="app" v-if="isShow">
    <nav-bar class="nav-bar">
      <div slot="left">
        <img src="./assets/img/navbar/logo.png" alt="">
        网易云音乐</div>
      <div slot="center" class="center">
        <div class="back" @click="back"><img src="./assets/img/navbar/上一步.png" alt=""></div>
        <div class="next" @click="go"><img src="./assets/img/navbar/下一步.png" alt=""></div>
        <div><input @keyup.enter="todo"
                    @keyup.enter.stop="searchClick"
                    v-model="query" type="text"
                    placeholder="  搜索" ></div>
        <div><img src="./assets/img/navbar/话筒.png" alt=""></div>
      </div>
      <div slot="right" class="right">
        <div><img src="./assets/img/navbar/头像.png" alt=""></div>
        <div><img src="./assets/img/navbar/衣服.png" alt=""></div>
        <div><img src="./assets/img/navbar/设置.png" alt=""></div>
        <div><img src="./assets/img/navbar/模式.png" alt=""></div>
        <div><img @click="close"  src="./assets/img/navbar/最小化.png" alt=""></div>
        <div><img src="./assets/img/navbar/最大化.png" alt=""></div>
        <div><img @click="close" src="./assets/img/navbar/关闭.png" alt=""></div>
      </div>
    </nav-bar>
    <div class="main">
      <tab-bar class="tab-bar" :tab-bar-item="tabBarItem" ></tab-bar>
      <keep-alive>
        <router-view :search-info="searchInfo"
                     :singer-info="singerInfo"
                     :album-info="albumInfo"
                     :video-info="videoInfo"
                     :music-male-info="musicMaleInfo"
                     :lyric-info="lyricInfo"
                     :dj-info="djInfo"
                     :user-info="userInfo"
                     @getMusicId="getMusicId"
                     :my-offset="myOffset"
                     class="router-view"></router-view></keep-alive>
      <div v-if="this.$route.path.indexOf('search')!=-1" class="pre-next">
        <img src="./assets/img/navbar/上一步.png" @click="pre" alt="">
        <img src="./assets/img/navbar/下一步.png" @click="next" alt="">
      </div>
      <div class="audio">
        <audio :src="musicUrl" controls autoplay loop></audio></div>
    </div>
  </div>
</template>

<script>
import {getSearch} from "@/network/search";// 搜索页数据
import {getSong} from "@/network/song"; // 歌曲详情数据（url）
import NavBar from "@/components/NavBar"; // 最上方导航栏
import TabBar from "@/components/TabBar"; // 左侧导航栏
import PageList from "@/components/PageList"; // 分页(传值处理bug)
export default {
  name: 'App',
  data(){
    return {
      tabBarItem: ["发现音乐","视频","朋友","直播","私人FM"], //左侧导航栏选项
      isShow:true, // 控制整个app是否可见
      query:"", // 与keywords关键字绑定
      searchInfo:[], // 单曲数据
      musicId:"", // 歌曲id
      musicUrl:"",// 歌曲url
      myOffset:0, // 歌曲偏移量 控制分页跳转
      musicLength:"", // 所有搜索到数据的长度
      singerInfo:[],
      singerOffset:0,
      albumInfo:[],
      albumOffset:0,
      videoOffset:0,
      videoInfo:[],
      musicMaleOffset:0,
      musicMaleInfo:[],
      lyricOffset:0,
      lyricInfo:[],
      djOffset:0,
      djInfo:[],
      userOffset:0,
      userInfo:[]
    }
  },
  // 隐藏后一秒后自动再显示
  updated() {
    if(this.isShow===false){
      setTimeout(()=>{
        this.isShow=true
      },1000)
    }
  },
  // 生命周期函数 在页面创建后就开始加载数据
  created() {
    // 调用本组件的方法
    this.searchClick()
    // this.getSong(this.musicId)
  },
  methods:{
    todo(){
      if(this.$route.path.indexOf("search")==-1){
      this.$router.push("/search")
      }
    },
    // 上一页的图片 改变myOffset的值
    pre(){
      if(this.myOffset>0&&this.$route.path.indexOf("singleMusic")!=-1){
        this.myOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("searchSinger")!=-1){
        this.singerOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("album")!=-1){
        this.albumOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("searchVideo")!=-1){
        this.videoOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("searchMusicMale")!=-1){
        this.musicMaleOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("lyric")!=-1){
        this.lyricOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("searchDj")!=-1){
        this.djOffset--
        this.searchClick()
      }else if(this.$route.path.indexOf("searchUser")!=-1){
        this.userOffset--
        this.searchClick()
      }
    },
    // 下一页的图片
    next(){
      if(this.$route.path.indexOf("singleMusic")!=-1) {
        this.myOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("searchSinger")!=-1){
        this.singerOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("album")!=-1){
        this.albumOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("searchVideo")!=-1){
        this.videoOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("searchMusicMale")!=-1){
        this.musicMaleOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("lyric")!=-1){
        this.lyricOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("searchDj")!=-1){
        this.djOffset++
        this.searchClick()
      }else if(this.$route.path.indexOf("searchUser")!=-1){
        this.userOffset++
        this.searchClick()
      }
    },
    // 获得歌曲url方法 通过子组件传来的id
    getMusicId(musicId){
      getSong(musicId).then(res=>{
        this.musicUrl=res.data.data[0].url
      })
      // this.musicId=musicId
    },
    // 获取搜索页个子组件数据
    searchClick(){
      if(this.query!==""){
        // 单曲数据
        const offset=this.myOffset*100
        getSearch(this.query,100,offset,1).then(res=>{
          this.searchInfo=res.data.result.songs
        })
        // 专辑数据
        const albumOffset=this.albumOffset*20
        getSearch(this.query,20,albumOffset,10).then(res=>{
          this.albumInfo=res.data.result.albums
        })
        // 歌手数据
        const singerOffset=this.singerOffset*20
        getSearch(this.query,20,singerOffset,100).then(res=>{
          this.singerInfo=res.data.result.artists
        })
        // 视频数据
        const videoOffset=this.videoOffset*30
        getSearch(this.query,30,videoOffset,1014).then(res=>{
          this.videoInfo=res.data.result.videos
        })
        // 歌单数据
        const musicMaleOffset=this.musicMaleOffset*20
        getSearch(this.query,20,musicMaleOffset,1000).then(res=>{
          this.musicMaleInfo=res.data.result.playlists
        })
        // 歌词数据
        const lyricOffset=this.lyricOffset*20
        getSearch(this.query,20,lyricOffset,1006).then(res=>{
          this.lyricInfo=res.data.result.songs
        })
        // 电台数据
        const djOffset=this.djOffset*20
        getSearch(this.query,20,djOffset,1009).then(res=>{
          this.djInfo=res.data.result.djRadios
        })
        // 用户数据
        const userOffset=this.userOffset*20
        getSearch(this.query,20,userOffset,1002).then(res=>{
          this.userInfo=res.data.result.userprofiles
        })
      }
    },
    // 返回上一页面
    back(){
      this.$router.back()
    },
    // 去往下一页面
    go(){
      this.$router.go(1)
    },
    // 关闭页面 此处只是隐藏
    close(){
      this.isShow=false
    },
    // 获取歌曲url方法 通过每个歌曲特有的id
    // getSong(musicId){
    //   getSong(this.musicId).then(res=>{
    //     this.musicUrl=res.data.data[0].url
    //   })
    // }
  },
  components: {
    PageList,
    TabBar,
    NavBar
  }
}
</script>

<style>
@import "assets/css/base.css";
#app {
  position: relative;
  width: 1030px;
  height: 650px;
  overflow: hidden;
  box-shadow: 0px 1px 5px rgba(0,0,0,.3);
  margin: 50px auto;
}
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #e31e1e;
}
img {
  vertical-align: middle;
}
.center {
  display: flex;

}
.back img,.next img {
  border-radius: 50%;
  background-color: rgba(0,0,0,.3);
}
.next {
  margin: 0 10px;
}
input {
  border-radius: 20px;
  height: 23px;
  outline: none;
  margin-right: 10px;
}
.right {
  line-height: 60px;
  display: flex;
}
.right div {
  padding: 0 12px;
}
.right div:nth-child(1) {
  padding-right: 50px;
}
.right div:nth-child(3) {
  border-right: 1px solid #ccc;
  padding-right: 30px;
}
.right div:nth-child(4){
  margin-left: 30px;
}
.tab-bar{
  padding-top: 60px;
}
.router-view {
  width: 80%;
  height: 590px;
  float: right;
  position: absolute;
  top: 60px;
  left: 20%;
  right: 0;
}
.audio {
  height: 60px;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(0,0,0,.1);
}
audio {
  background-color: #f2f2f2;
  height: 60px;
  width: 100%;
}
.pre-next {
  display: flex;
  height: 50px;
  width: 100px;
  position: absolute;
  bottom: 60px;
  left: 500px;
}
.pre-next img {
  width: 30px;
  border-radius: 15px;
  background-color: #cccccc;
  margin: 10px 10px;
}
</style>
