<template>
  <div class="goods">
    <div class="item" v-for="(item,index) in goodsInfo">
      <img :src="item.img1v1Url" alt="">
      <div class="artist">{{item.name}}
        <img v-if="item.accountId" class="head" src="../../../../assets/img/navbar/头像.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props:{
    goodsInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 19%;
}
img {
  border-radius: 10px;
  width: 100%;
}
.artist {
  position: relative;
  width: 100%;
  margin: 3px 0 15px 0;
  font-size: 13px;
}
.head {
  position: absolute;
  right: 5px;
  bottom: 0;
  width: 15px;
  background-color: red;
}
</style>
