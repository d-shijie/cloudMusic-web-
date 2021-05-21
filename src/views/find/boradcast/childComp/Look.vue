<template>
  <div class="look">
    <div class="item" v-for="(item,index) in lookInfo">
      <div class="img"><img :src="item.avatarUrl" alt=""></div>
      <div class="nickname">{{item.nickName}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Look",
  props:{
    lookInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.look{
  display: flex;
  justify-content: space-between;
}
.item {
  width: 19%;
}
.item:hover{
  cursor: pointer;
}
.img {
  width: 100%;
}
.img img{
  border-radius: 10px;
  width: 100%;
}
.nickname {
  margin: 10px 0;
  font-size: 13px;
  color: #797979;
}
</style>
