<template>
  <div class="hot-dj">
    <div class="item" v-for="(item,index) in hotDjs">
      <div class="img">
        <div class="category">{{item.category}}</div>
        <img :src="item.picUrl" alt="">
      </div>
      <div class="copy-writer">
        {{item.copywriter}}
      </div>
      <div class="dj-name">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonHotDj",
  props:{
    hotDjs:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.hot-dj {
  display: flex;
  justify-content: space-between;
}
.item {
  border-radius: 7px;
  overflow: hidden;
  width: 19%;
}
.item:hover {
  cursor: pointer;
}
.img {
  position: relative;
}
.img img {
  width: 100%;
}
.category {
  position: absolute;
  top: 0;
  border-radius: 5px;
  font-size: 12px;
  padding: 4px;
  color: #ffffff;
  background-color: #fa6262;
}
.copy-writer{
  margin:7px 0;
  font-size: 14px;
}
.dj-name {
  color: #aaa;
  font-size: 13px;
}
</style>
