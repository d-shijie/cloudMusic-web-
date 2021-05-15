<template>
 <div class="personlized">
    <div class="item" v-for="(item,index) in personlizedImage">
      <div class="img">
        <img class="play" src="../../../../assets/img/goodslist/播放.png" alt="">
        <img :src="item.picUrl" alt="">
        <div class="text">{{item.name}}</div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
name: "Personlized",
  props:{
  personlizedImage:{
    type:Array,
    default(){
      return []
    }
  }
  }
}
</script>

<style scoped>
.personlized {
  display: flex;
  justify-content: space-between;
}
img {
  border-radius: 10px;
  width: 100%;
  height: 140px;
}
.img {
  position: relative;
  width: 96%;
}
.text {
  margin: 7px 0;
}
.item:hover {
  cursor: pointer;
}
.play{
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
}
</style>
