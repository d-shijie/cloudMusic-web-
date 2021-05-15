<template>
  <div class="single-music">
    <div class="songs-sum">
      找到{{searchInfo.length}}首单曲
    </div>
    <ul>
      <li class="title"><span>音乐标题</span><span>歌手</span><span>专辑</span><span>时长</span><span>热度</span></li>
      <li v-for="(item,index) in searchInfo" @click="play(item.id)">
        <span class="song-name">{{index+1+"."+item.name}}
          <img src="../../../assets/img/newMusic/热门.png" alt="">
          <img v-if="item.mvid!=0" src="../../../assets/img/newMusic/MV.png" alt="">
        </span>
        <span>{{item.artists[0].name}}</span>
        <span>{{item.album.name}}</span>
        <span>{{item.duration |duration}}</span>
        <span>1111</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "SingleMusic",
  props:{
    searchInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
     play(musicId){
       this.$emit("getMusicId",musicId)
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
.songs-sum {
  margin: 5px 0;
  font-size: 16px;
  font-weight: 600;
}
ul {
  width: 100%;
}
li {
  padding: 7px 10px;
  width: 100%;
  display: flex;
}
span {
  color: #a0a0a0;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 5px;
}
li sapn:nth-child(1){
  width: 50%;
}
li sapn:nth-child(2){
  width: 15%;
}
li sapn:nth-child(3){
  width: 20%;
}
li sapn:nth-child(4){
  width: 5%;
}
li sapn:nth-child(5){
  width: 10%;
}
.title {
  font-size: 14px;
  color: #868686;
}
.song-name{
  display: flex;
  justify-content: space-between;
  color: #000000;
}
.song-name img{
  width: 20px;
}
li:nth-child(even){
  background-color: #f2f2f2;
}
</style>
