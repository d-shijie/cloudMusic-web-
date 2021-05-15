<template>
  <div class="living-dj">
    <div class="item" v-for="(item,index) in djInfo">
      <div class="img">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="dj-name">{{item.name}}</div>
      <div class="artist"><i>by</i>{{item.dj.nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LivingDj",
  props:{
    djInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
.item {
  font-size: 13px;
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.item:nth-child(odd){
  background-color: #f2f2f2;
}
img {
  width: 65px;
  height: 65px;
  border-radius: 10px;
}
.img {
  width: 10%;
}
.dj-name {
  width: 55%;
}
i {
  margin-right: 4px;
  color: #808080;
}
</style>
