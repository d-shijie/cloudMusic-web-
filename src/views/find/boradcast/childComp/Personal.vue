<template>
  <div class="personal">
    <div class="item" v-for="(item,index) in personalInfo">
      <div class="img">
        <div class="nickname">{{item.name}}</div>
        <img :src="item.picUrl" alt="">
      </div>
      <div class="desc">{{item.rcmdText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  props:{
    personalInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.personal {
  display: flex;
  font-weight: normal;
  justify-content: space-between;
}
.item {
  width: 19%;
}
.img{
  position: relative;
  width: 100%;
}
.img img {
  border-radius: 10px;
  width: 100%;
}
.nickname {
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: #ffffff;
  font-size: 13px;
}
.desc {
  margin: 10px 0;
  font-size: 15px;
}
</style>
