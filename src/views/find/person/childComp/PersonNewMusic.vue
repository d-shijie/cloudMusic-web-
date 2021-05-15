<template>
  <div class="person-new-music">
    <div class="item" v-for="(item,index) in newMusic">
      <div class="imgBox"><img class="play" src="../../../../assets/img/goodslist/播放.png" alt="">
        <img class="img" :src="item.picUrl" alt=""></div>
      <div >
        <span class="name">{{item.name}}</span>
       <div class="icon">
         <img src="../../../../assets/img/newMusic/热门.png" alt="">
         <img v-if="item.song.exclusive" src="../../../../assets/img/newMusic/VIP.png" alt="">
         <img v-if="item.song.mvid!=0" src="../../../../assets/img/newMusic/MV.png" alt="">
         {{item.song.artists[0].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonNewMusic",
  props:{
    newMusic:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.img {
  border-radius: 5px;
  width: 50px;
  height: 50px;
}
.person-new-music {
  display: flex;
  flex-wrap: wrap;
}
.imgBox{
  position: relative;
  cursor: pointer;
}
.item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  width: 33%;
}
.icon img {
  width: 17px;
  margin: 0 2px;
}
.icon {
  margin-top: 5px;
  color: #cccccc;
  font-size: 13px;
}
.name {
  margin-left: 3px;
  font-size: 13px;
  color: #0c0c0c;
}
.play {
  position: absolute;
  width: 35px;
  top: 7px;
  left: 7px;
}
</style>
