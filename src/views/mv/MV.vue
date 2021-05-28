<template>
  <scroll class="content" ref="scroll">
    <div class="mv">
      <div class="left">
        <div class="title">< MV详情</div>
        <video :src="url" controls loop autoplay></video>
        <div class="artist">
          <i>by</i>{{mvInfo.artists[0].name}}
        </div>
        <div class="mv-name">
          {{mvInfo.name}}
        </div>
        <div class="publish">
          <span>发布:{{mvInfo.publishTime}}</span>
          <span>播放:{{mvInfo.playCount}}</span>
        </div>
        <div class="other">
          <div class="choice"><img src="../../assets/img/comment/点赞.png" alt="">赞（{{otherInfo.likedCount}}）</div>
          <div class="choice"><img src="../../assets/img/comment/收藏.png" alt="">收藏</div>
          <div class="choice"><img src="../../assets/img/comment/转发.png" alt="">分享({{otherInfo.shareCount}})</div>
          <div class="choice"><img src="../../assets/img/comment/下载.png" alt="">下载MV</div>
          <a>举报</a>
        </div>
        <div class="comment">
          <div class="title">评论({{otherInfo.commentCount}})</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button class="comment-btn">评论</button>
        </div>
        <comment class="comments" :comments="hotComments">
          <div slot="title">精彩评论</div>
        </comment>
        <div class="more">
          <span>更多精彩评论 ></span>
        </div>
        <comment class="comments" :comments="newComments">
          <div slot="title">最新评论</div>
        </comment>
        <page-size :items="[1,2,3,4,5,6]"></page-size>
      </div>
      <div class="right">
        <div class="recommend">
          <div>相关推荐</div>
          <div class="video">
            <div class="videos" v-for="(item,index) in relatedVideo.slice(0,3)">
              <img :src="item.coverUrl" alt="">
              <div class="desc">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import {getVideoUrl} from "@/network/video";
import {getMvUrl} from "@/network/video";
import {getMvDetail} from "@/network/video";
import {getMvInfo} from "@/network/video";
import {getHotComments} from "@/network/comments";
import {getNewComments} from "@/network/comments";
import {getRelatedMv} from "@/network/video";
import Scroll from "@/components/Scroll";
import Comment from "@/components/Comment";
import Video from "@/views/search/video/Video";
import PageSize from "@/components/PageSize";
export default {
  name: "MV",
  data(){
    return {
      url:"",
      mvInfo:{},
      otherInfo:{},
      hotComments:[],
      newComments:[],
      relatedVideo:[]
    }
  },
  components:{
    Scroll,
    Comment,
    Video,
    PageSize
  },
  created() {
    getMvUrl(this.$route.params.id).then(res=>{
      this.url=res.data.data.url
    })
    getMvDetail(this.$route.params.id).then(res=>{
      this.mvInfo=res.data.data
    })
    getMvInfo(this.$route.params.id).then(res=>{
      this.otherInfo=res.data
    })
    getHotComments(this.$route.params.id,1,10).then(res=>{
      this.hotComments=res.data.hotComments
    })
    getNewComments(this.$route.params.id,1,1,20,3)
        .then(res=>{
          this.newComments=res.data.data.comments
        })
    getRelatedMv(this.$route.params.id).then(res=>{
      console.log(res.data.data)
      this.relatedVideo=res.data.data
    })
  }
}
</script>

<style scoped>
.mv {
  height: 3200px;
  padding: 10px 20px;
}
.more {
  text-align: center;
  padding: 5px 10px;
}
.more span {
  border: 1px solid #aaaaaa;
  padding: 5px 20px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 13px;
}
.more span:hover{
  background-color: #f2f2f2;
}
.comment {
  margin: 20px 0;
}
.comments {
  padding: 0;
  width: 100%;
}
.comment-btn {
  float: right;
  padding: 5px 10px;
  background-color: #ffffff;
  outline: none;
  border: none;
  border: 1px solid #aaaaaa;
  border-radius: 15px;
  cursor: pointer;
}
.comment-btn:hover {
  background-color: #f2f2f2;
}
textarea {
  resize: none;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  outline: none;
  border-radius: 10px;
}
.content {
  height: calc(100%)
}
.other {
  display: flex;
  margin: 10px 0;
}
.other a {
  margin-left: 60px;
  font-size: 13px;
  cursor: pointer;
  color: #aaaaaa;
  margin-top: 10px;
  text-decoration: underline;
}
.choice a:hover {
  color: #343434;
}
.choice {
  cursor: pointer;
  margin-right: 30px;
  border-radius: 15px;
  padding: 5px 10px;
  text-align: center;
  border: 1px solid #aaaaaa;
}
.choice img {
  width: 20px;
  vertical-align: middle;
}
.choice:hover {
  background-color: #f1f1f1;
}
.publish {
  color: #848383;
  font-size: 13px;
}

.publish span {
  margin-right: 10px;
}
i {
  color: #aaaaaa;
  margin-right: 5px;
}
.artist {
  color: #000000;
  font-size: 16px;
}
.mv-name {
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0;
}
.title,.recommend {
  font-size: 18px;
  font-weight: 600;
}
.recommend {
  margin-top: -20px;
}
video{
  margin-top: -20px;
  width: 600px;
  height: 400px;
}
.right {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 180px;
}
.video {
  padding: 0 20px 0 0;
}
.right .videos {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  font-weight: normal;
  font-size: 13px;
}
.desc {
  width: 140px;
  margin-top: -20px;
  white-space: nowrap;
  overflow: hidden;
  height: 50px;
  text-overflow: ellipsis;
}
.right .videos img{
  width: 150px;
  float: left;
  margin: 10px 0;
  border-radius: 10px;
  padding-right: 10px;
}
</style>
