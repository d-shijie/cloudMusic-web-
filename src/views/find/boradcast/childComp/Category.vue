<template>
  <div class="category">
    <div class="item" v-for="(item,index) in categories">
      <div class="img"><img :src="item.pic56x56Url" alt=""></div>
      <div class="text">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.category {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

}
.item {
  margin-top: 10px;
}
.img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: #f2f2f2;
}
.img img {
  width: 70%;
}
.text {
  margin: 10px 0;
  font-size: 12px;
  color: #939393;
}
.img:hover {
  cursor: pointer;
  background-color: #faaeae;
}
</style>
