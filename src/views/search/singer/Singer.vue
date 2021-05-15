<template>
  <div class="search-singer">
    <div class="item" v-for="(item,index) in singerInfo">
      <img :src="item.img1v1Url" alt="">{{item.name}}{{item.alia}}
    </div>
  </div>
</template>

<script>
export default {
name: "Singer",
  props:{
  singerInfo:{
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
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 10px 0;
}
.item:nth-child(even){
  background-color: #f2f2f2;
}
img {
  margin-right: 10px;
  width: 65px;
  height: 65px;
  border-radius: 10px;
}

</style>
