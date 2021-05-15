<template>
  <div class="lyric">
    <ul>
      <li class="title">
        <div class="lyric-name">音乐标题</div>
        <div class="artist">歌手</div>
        <div class="album">专辑</div>
        <div class="duration">时长</div>
      </li>
      <li v-for="(item,index) in lyricInfo"
          class="main">
        <div class="top">
          <div class="lyric-name">{{item.name}}</div>
          <div class="artist">{{item.artists[0].name}}</div>
          <div class="album">{{item.album.name}}</div>
          <div class="duration">{{item.duration|duration}}</div>
        </div>
        <div class="bottom" :class="{extend:currentIndex===index}">
          <div class="bottom-name">{{item.artists[0].name}}</div>
          <div class="lyric-text">{{item.lyrics.txt}}</div>
          <div class="btns">
            <button class="show" @click="btnClick(index)">展开歌词</button>
            <button class="copy">复制歌词</button>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Lyric",
  props:{
    lyricInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0,
      isExtend:false,
    }
  },
  methods:{
    btnClick(index){
      this.currentIndex=index
    }
  },
  filters:{
    duration(value){
      return (value/1000/60).toFixed(2)
    }
  }
}
</script>

<style scoped>
.main {
  padding: 15px 5px;
}
.main:nth-child(even){
  background-color: #f2f2f2;
}
.title {
  color: #787777;
  font-size: 13px;
  display: flex;
  margin-bottom: 10px;
}
.bottom-name {
  margin: 10px 0;
  color: #7d7c7c;
}
button:hover {
  background-color: #cccccc;
}
.bottom {
  font-size: 14px;
  position: relative;
  overflow: hidden;
  width: 90%;
  height: 115px;
}
.lyric-text {
  color: #808080;
  width: 70%;
}
.lyric-name {
  width: 40%;
}
.btns {
  position: absolute;
  right: 20px;
  top: 30px;
}
.main:hover {
  background-color: #cccccc;
}
button {
  color: #aaaaaa;
  border-radius: 10px;
  font-size: 13px;
  padding: 3px;
  margin: 0 5px;
  border: none;
  border: 1px solid #cccccc;
}
.artist {
  width: 20%;
}
.album {
  white-space: nowrap;
  overflow: hidden;
  width: 20%;
}
.duration {
  width: 10%;
  text-align: center;
}
.top {
  width: 100%;
  color: #4b4b4b;
  display: flex;
  font-size: 14px;
}
.active {
  background-color: #cccccc;
}
.extend {
  height: 210px;
}
</style>
