<template>
  <div class="new-music-list">
    <div class="item"
         :class="{active:currentIndex===index}"
         @mouseenter="itemEnter(index)"
         @mouseleave="itemLeave" v-for="(item,index) in newMusicInfo">
      <div class="number">{{1+index}}</div>
      <div class="img">
        <img class="play" src="../../../assets/img/goodslist/播放.png" alt="">
        <img :src=item.album.picUrl alt="">
      </div>
      <div class="music-name">
        {{item.name}}
        <img class="mv-logo" v-if="item.mvid!=0" src="../../../assets/img/newMusic/MV.png" alt="">
      </div>
      <div class="artist">{{item.artists[0].name}}</div>
      <div class="album-name">{{item.album.name}}</div>
      <div class="play-count">{{item.duration|Show}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMusicList",
  data(){
    return {
      currentIndex:""
    }
  },
  props:{
    newMusicInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  filters:{
    Show(value){
      return (value/1000/60).toFixed(2)
    }
  },
  methods:{
    itemEnter(index){
      this.currentIndex=index
    },
    itemLeave(){
      this.currentIndex=""
    }
  }
}
</script>

<style scoped>
.active {
  background-color: #dcdbdb;
}
.item {
  color: #666666;
  font-size: 13px;
  display: flex;
 padding: 10px 0;
  align-items: center;
}
.mv-logo {
  width: 20px;
}
.img {
  position: relative;
  width: 10%;
}
.img .play {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
}
.number {
  margin-right: 10px;
}
.img img {
  border-radius: 10px;
  width: 100%;
}
.music-name {
  color: #313131;
  font-size: 14px;
  padding-left: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 40%;
}
.artist {
  width: 20%;
}
.album-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 20%;
}
.play-count {
  color: #acacac;
  width: 10%;
  text-align: center;
}
.item:nth-child(odd){
  background-color: #f1f0f0;
}
</style>
