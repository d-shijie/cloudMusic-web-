<template>
  <div class="play-list">
    <div class="top-info">
      <div class="img">
        <img :src="playlistInfo.coverImgUrl" alt="">
      </div>
      <div class="main-info">
        <div class="play-list-name">
          <i>歌单</i>{{playlistInfo.name}}
        </div>
        <div class="creator">
          <img class="head" :src="playlistInfo.creator.avatarUrl" alt="">
          <div class="nickname">{{playlistInfo.creator.nickname}}</div>
          <div class="create-time">{{playlistInfo.createTime}}创建</div>
        </div>
        <div class="btns">
          <div class="btn">播放全部</div>
          <div class="btn">收藏({{playlistInfo.subscribedCount |Show}})</div>
          <div class="btn">分享({{playlistInfo.shareCount |Show}})</div>
          <div class="btn">下载全部</div>
        </div>
        <div class="tag">
          <span>标签：</span>{{playlistInfo.tags[0]}}
        </div>
        <div class="counts">
          <span>歌曲:{{playlistInfo.trackCount}}</span>
          <span>播放:{{playlistInfo.playCount |Show}}</span>
        </div>
        <div class="desc">
          简介:{{playlistInfo.description}}
        </div>
      </div>
    </div>
    <control-bar class="control" :items="items" @controlClick="control"></control-bar>
    <Scroll class="content" ref="scroll">
      <MusicList v-if="flag1" :music-list="musicList"></MusicList>
      <Comment v-if="flag2" :comments="comments"><div slot="title">最新评论</div></Comment>
      <div v-if="flag3" class="collect">
        <h2>收藏</h2>
      </div>
    </Scroll>
  </div>
</template>

<script>
import {getPlayListDetail} from "@/network/playlist";
import {getComment} from "@/network/playlist";
import MusicList from "@/components/MusicList";
import ControlBar from "@/components/ControlBar";
import Scroll from "@/components/Scroll";
import Comment from "@/components/Comment";
export default {
  name: "PlayList",
  data(){
    return {
      id:"",
      playlistInfo:{},
      items:["歌曲列表","评论","收藏者"],
      musicList:[],
      musicId:"",
      flag1:true,
      flag2:false,
      flag3:false,
      comments:[]
    }
  },
  components:{
    ControlBar,
    MusicList,
    Scroll,
    Comment
  },
  methods:{
    getComment(){
      getComment(this.id,50).then(res=>{
        console.log(res.data.comments)
        this.comments=res.data.comments
      })
    },
    control(index){
      switch (index){
        case 0:
          this.flag1=true
          this.flag2=false
          this.flag3=false
          break;
        case 1:
          this.flag1=false
          this.flag2=true
          this.flag3=false
          break;
        case 2:
          this.flag1=false
          this.flag2=false
          this.flag3=true
          break;
      }
    }
  },
  filters:{
    Show(value){
      return value>10000? (value/10000).toFixed(0)+"万" : value
    }
  },
  created() {
    this.id=this.$route.params.id
    getPlayListDetail(this.id).then(res=>{
      this.playlistInfo=res.data.playlist
      this.musicList=res.data.playlist.tracks
    })
    this.getComment()
  }
}
</script>

<style scoped>

.content {
  overflow: hidden;
  height: calc(100% - 200px);
}
.control {
  position: relative;
  z-index: 10000;
  background-color: #fff;
  margin-top: 230px;
  font-size: 14px;
}
.desc {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.counts {
  font-size: 14px;
  margin: 5px 0;
}
.counts span:nth-child(1) {
  margin-right: 10px;
}
.tag {
  margin-top: 10px;
  font-size: 14px;
  color: #6262ec;
}
.tag span {
  color: #000000;
}
.btns {
  display: flex;
}
.btn{
  margin-right: 20px;
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
  border: 1px solid #aaaaaa;
  background-color: #f2f2f2;
}
.btn:hover {
  color: #ffffff;
  background-color: #d5d5d5;
  cursor: pointer;
}
.top-info {
  position: relative;
  z-index: 10000;
  background-color: #fff;
  padding: 0 40px;
  margin: 40px 0;
}
.head {
  position: relative;
  bottom: 4px;
}
.nickname {
  font-size: 13px;
  color: #6969ec;
  margin-right: 10px;
}
.create-time {
  font-size: 13px;
}
.img {
  width: 30%;
  float: left;
}
.main-info {
  width: 70%;
  float: right;
}
.play-list-name {
  font-weight: 700;
  font-size: 22px;
}
.creator {
  display: flex;
  margin: 15px 0 5px 0;
}
img {
  vertical-align: middle;
}
.main-info img {
  width: 25px;
  margin-right: 5px;
  border-radius: 50%;
}
.img>img {
  border-radius: 10px;
  width: 180px;
}
i {
  font-size: 14px;
  color: #f83131;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid #f52626;
  margin-right: 10px;
  position: relative;
  bottom: 5px;
}

</style>
