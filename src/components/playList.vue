<template>
  <div class="play-list">
    <div class="item"
         @mouseleave="itemLeave(index)"
         @mouseenter="itemEnter(index)"
         v-for="(item,index) in playList">
      <div class="img">
        <div v-if="currentIndex===index" class="play"><img src="../assets/img/goodslist/播放.png" alt=""></div>
        <span class="play-count"><img src="../assets/img/goodslist/播放icon.png" alt="">{{item.playCount | Show}}</span>
        <span class="nickname"><img src="../assets/img/navbar/头像.png" alt="">{{item.creator.nickname}}</span>
        <img :src="item.coverImgUrl" alt="" @load="imageLoad">
      </div>
      <div class="desc">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playList",
  data(){
    return {
      currentIndex:""
    }
  },
  props:{
    playList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit("imageLoad")
    },
    itemEnter(index){
    this.currentIndex=index
    },
    itemLeave(index){
      this.currentIndex=""
    }
  },
  filters:{
    Show(value){
      if(value>10000){
        return (value/10000).toFixed(0)+"万"
      }else  {
        return  value
      }
    }
  }
}
</script>

<style scoped>
.play-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 24%;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
}
.item:hover{
  cursor: pointer;
}
.img img {
  border-radius: 10px;
  width: 100%;
}
.desc {
  margin-top: 10px;
  font-size: 14px;
}
.img {
  position: relative;
}
.play {
  width: 40px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.nickname {
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: #ffffff;
  font-size: 12px;
}
.play-count {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 12px;
  color: #ffffff;
}
.play-count img,
.nickname img{
  width: 10px;
}
</style>
