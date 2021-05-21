<template>
  <div class="world">
    <div class="item" @mouseenter="itemEnter(index)"
         @mouseleave="itemLeave"
         v-for="(item,index) in worldInfo.slice(4,worldInfo.length)">
      <div class="img">
        <div class="play-count">{{item.playCount|Show}}</div>
        <div v-if="currentIndex==index" class="play"><img src="../../../../assets/img/goodslist/播放.png" alt=""></div>
        <img :src="item.coverImgUrl" alt="">
      </div>
      <div class="desc">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "World",
  data(){
    return {
      currentIndex:""
    }
  },
  props:{
    worldInfo:{
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
    itemLeave() {
      this.currentIndex=""
    }
  },
  filters:{
    Show(value){
      return value>10000? (value/10000).toFixed(0)+"万" : value
    }
  }
}
</script>

<style scoped>
.world {
  display: flex;
  flex-wrap: wrap;
}
.item {

  width: 19%;
  margin: 10px 7px 10px 0;
}
.item:hover {
  cursor: pointer;
}
.img {
  position: relative;
  width: 100%;
}
.play-count {
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 12px;
  color: #ffffff;
}
.play {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 50%;
  margin: -17px 0 0 1px;
}
.play img {
  width: 35px;
}
.img>img{
  border-radius: 10px;
  width: 100%;
}
.desc {
  margin: 5px;
  font-size: 14px;
  color: #393939;
}
</style>
