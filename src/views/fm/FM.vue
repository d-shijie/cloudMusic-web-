<template>
  <div class="fm">
    <div class="main">
        <div class="img">
          <img v-if="flag" :src="playImage[currentIndex]"
               @click="getUrl(music[currentIndex].id)"
               class="play">
          <img v-else
               :src="playImage[1]"
               @click="getUrl(music[currentIndex].id)"
               ref="pause"
               class="pause"
               :class="{active:flag=false}">
          <img :src="music[currentIndex].album.picUrl" >
          <div class="chose">
            <div class="btn">喜欢</div>
            <div class="btn">删除</div>
            <div class="btn" @click="next">下一首</div>
            <div class="btn">更多</div>
          </div>
        </div>
        <div class="info">
          <div class="top">
            {{music[currentIndex].name}}
          </div>
          <div class="album">
            <div>专辑:{{music[currentIndex].album.name}}</div>
            <div>歌手:{{music[currentIndex].album.artists[0].name}}</div>
          </div>
          <div class="lyric">
            <ul ref="lyricUL">
              <li v-for="(item, index) in lyricArr"
                  :class="{active: lyricIndex === index}"
                  :key="item.uid" :data-index='index' ref="lyric">{{item.lyric}}</li>
            </ul>
          </div>
        </div>
      </div>
      <audio ref="audio" autoplay loop controls
             @pause="pause"
             @play="play"
             :src="url" id="audio"
             @timeupdate="timeUpdate"></audio>
    </div>
</template>

<script>
// 没用组件化开发和vuex后续改进 先把功能做出
import {getFM} from "@/network/FM";
import {getSong} from "@/network/song";
import {getLyric} from "@/network/lyric";
export default {
  name: "FM",
  data(){
    return {
      currentIndex:0,
      flag:true,
      music:[],
      url:"",
      playImage:[require("../../assets/img/goodslist/播放.png"),require("../../assets/img/goodslist/暂停.png")],
      lyric:"",
      lyricArr:[],
      lineArr:[],
      lyricIndex:1
    }
  },
  methods:{
    pause(){
      this.flag=true
    },
    play(){
      this.flag=false
    },
    next(){
      if(this.currentIndex===this.music.length){
        this.currentIndex=0
      }else {
        this.currentIndex++
      }
    },
    getUrl(id){
      let audio=document.querySelector("#audio")
      if(this.flag===true){
        this.flag=false
        audio.play()
      }else {
        this.flag=true
        audio.pause()
      }
      getSong(id).then(res=>{
        this.url=res.data.data[0].url

      })
      getLyric(id).then(res=>{
        this.lyric=res.data.lrc.lyric
        this.lineArr= this.lyric.split("\n")
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/
        this.lineArr.forEach(item => {
          if (item === '') return
          const obj = {}
          const time = item.match(regTime)
          obj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim()
          obj.time = time ? this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0
          obj.uid = Math.random().toString().slice(-6)
          if (obj.lyric === '') {
          } else {
            this.lyricArr.push(obj)
          }
        })
      })

    },
    formatLyricTime (time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/
      const regSec = /:.*\./
      const regMs = /\./
      const min = parseInt(time.match(regMin)[0].slice(0, 2))
      let sec = parseInt(time.match(regSec)[0].slice(1, 3))
      const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3)
      if (min !== 0) {
        sec += min * 60
      }
      return Number(sec + '.' + ms)
    },
    timeUpdate(){
      let currentTime=this.$refs.audio.currentTime
      for (let i = 0; i < this.lyricArr.length; i++) {
        if (currentTime > (parseInt(this.lyricArr[i].time))) {
          const index = this.$refs.lyric[i].dataset.index
          if (i === parseInt(index)) {
            this.lyricIndex = i
            this.$refs.lyricUL.style.transform = `translateY(${170 - (30 * (i + 1))}px)`
          }
        }
      }
    }
  },
  created() {
    getFM().then(res=>{
      this.music=res.data.data
    })
  }
}
</script>

<style scoped>
.lyric {
  height: 400px;
  margin-top: 10px;
  overflow: hidden;
}
.main{
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
ul {
  height: 1000000%;
}
li {
  text-align: left;
  line-height: 30px;
  list-style: none;
  font-size: 16px;
  color: #959595;
}
.pause {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 80px;
}
audio {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.img {
  position: relative;
  float: left;

  width: 50%;
}
.play {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 160px;
  left: 130px;
}
.active {
  font-weight: 600;
  color: #000;
}
.info {
  overflow: hidden;
  float: right;
  width: 50%;
}
img {
  width: 300px;
  height: 300px;
  margin: 50px 0 50px 50px;
}
.chose {
  width: 100%;
  display: flex;
  margin: 0 40px;
}
.btn {
  margin: 0 15px;
  background-color: #cccccc;
  padding: 5px 10px;
  font-size: 13px;
  color: #ffffff;
  border-radius: 10px;
}
.top {
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
}
.album {
  font-size: 13px;
  display: flex;
  justify-content: space-around;
}
</style>
