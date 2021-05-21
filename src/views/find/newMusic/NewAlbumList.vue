<template>
  <div class="new-album">
    <div class="item" @mouseleave="itemLeave" @mouseenter="itemEnter(index)" v-for="(item,index) in albumInfo">
      <div class="img">
        <img v-if="currentIndex===index" class="play" src="../../../assets/img/goodslist/播放.png" alt="">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="album-name">{{item.name}}</div>
      <div class="artist">{{item.artist.name}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NewAlbumList",
  data(){
    return {
    currentIndex:""
    }
  },
  props:{
    albumInfo:{
      type:Array,
      default(){
        return []
      }
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
.new-album {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  margin: 10px 0;
  width: 21%;
}
.item:hover {
  cursor: pointer;
}
.img {
  width: 100%;
  position: relative;
}
.img img {
  width: 100%;
  border-radius: 10px;
}
.img .play {
  position: absolute;
  width: 60px;
  bottom: 55px;
  left: 55px;
}
.album-name {
  margin: 6px 0 0 0;
  color: #282828;
  font-size: 14px;
}
.artist {
  margin: 6px 0 0 0;
  color: #787878;
  font-size: 13px;
}
</style>
