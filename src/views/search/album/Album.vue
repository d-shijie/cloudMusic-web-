<template>
  <div class="album">
    <div class="item" v-for="(item,index) in albumInfo">
      <div class="img"><img :src="item.picUrl" alt=""></div>
      <div class="album-name">{{item.name}}</div>
      <div class="artist">{{item.artist.name}}{{item.artist.alia[0]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props:{
    albumInfo:{
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
.item:nth-child(even) {
  background-color: #f2f2f2;
}
img {
  width: 65px;
  height: 65px;
  border-radius: 10px;
}
.album-name {
  margin-left: 10px;
  width: 20%;
  font-size: 16px;
}
.artist {
  margin-left: 200px;
  font-size: 12px;
  color: #959494;
}
</style>
