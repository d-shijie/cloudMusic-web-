<template>
  <div class="recommend">
     <div class="item" v-for="(item,index) in recommendInfo.slice(0,5)">
       <div class="img">
         <div class="nickname">{{item.dj.nickname}}</div>
         <img :src="item.picUrl" alt="">
       </div>
       <div class="text">{{item.rcmdtext}}</div>
     </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommendInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
 display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 19%;
}
.item:hover{
  cursor: pointer;
}
.img {
  position: relative;
  width: 100%;
}
.nickname {
  color: #ffffff;
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 5px;
}
.img img {
  border-radius: 10px;
  width: 100%;
}
.text {
  margin: 10px 0;
  font-size: 14px;
}
</style>
