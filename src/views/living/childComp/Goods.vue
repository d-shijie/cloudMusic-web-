<template>
  <div class="goods">
    <div class="item"
         @mouseleave="itemLeave"
         v-for="(item,index) in goods"
         @mouseenter="itemEnter(index)">
      <div class="img">
<!--        <img class="icon" :src="item.avatarDetail.identityIconUrl" alt="">-->
        <img v-if="currentIndex===index" class="play" src="../../../assets/img/goodslist/播放.png" alt="">
        <img class="main" :src="item.avatarUrl" alt="">
      </div>
      <div class="nickname">
        {{item.nickName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data(){
    return {
    currentIndex:""
    }
  },
  props:{
    goods:{
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
.goods {
  padding: 0 30px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  margin: 10px 0;
  width: 23%;
}
.item:hover {
  cursor: pointer;
}
.img {
  position: relative;
  width: 100%;
}
.img .main {
  border-radius: 10px;
  width: 100%;
}
.img .play {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 50px;
}
.nickname {
  margin-top: 5px;
  font-size: 13px;
  color: #7d7c7c;
}
</style>
