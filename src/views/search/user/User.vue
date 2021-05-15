<template>
  <div class="user">
    <div class="item" v-for="(item,index) in userInfo">
      <div class="img">
        <img :src="item.avatarUrl" alt="">
        <img class="logo" v-if="item.anchor" src="../../../assets/img/navbar/logo.png" alt="">
      </div>
      <div class="user-name">{{item.nickname}}</div>
      <div class="desc" v-if="item.anchor">网易音乐人</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props:{
    userInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.item {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.item:nth-child(even){
  background-color: #f2f2f2;
}
img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.img {
  position: relative;
  width: 10%;
}
.logo {
  position: absolute;
  width: 20px;
  bottom: 0;
  right: 20px;
  height: 20px;
}
.user-name {
  font-size: 15px;
  width: 55%;
}
.desc {
  color: #6f6d6d;
  font-size: 13px;
  flex: 1;
  text-align: center;
}
</style>
