<template>
  <div class="goods-list">
    <div class="item"
         v-for="(item,index) in goods"
         @mouseleave="NotShow(index)"
         @mouseenter="Show(index)">
      <div class="img">
        <img :src="item.picUrl" alt="">
        <img v-if="currentIndex===index" class="go" src="../assets/img/goodslist/播放.png" alt="">
      </div>
      <div class="text">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",

  data() {
    return {
      currentIndex:""
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
    computed: {},
    methods: {
    //根据下标值判断是否显示
      Show(index) {
        this.currentIndex = index
      },
      NotShow() {
        this.currentIndex=""
      }
    }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 130px
}
.item:hover{
  cursor: pointer;
}
.img {
  position: relative;
}
img {
  border-radius: 10px;
  width: 100%;
}
.text{
  margin: 5px 0;
  color: #585858;
  font-size: 14px;
}
.go {
  width: 25px;
  position: absolute;
  bottom:10px;
  right: 10px;
}
</style>
