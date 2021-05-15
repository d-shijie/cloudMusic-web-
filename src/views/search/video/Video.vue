<template>
  <div class="video">
    <div class="item" v-for="(item,index) in videoInfo">
      <div class="img">
        <div class="play-time"><img class="icon" src="../../../assets/img/goodslist/播放icon.png" alt="">{{item.playTime | playTime}}</div>
        <img :src="item.coverUrl" alt="">
        <div class="duration">{{item.durationms | duration}}</div>
      </div>
      <div class="desc">{{item.title}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Video",
  props:{
    videoInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  filters:{
    playTime(value){
      if(value<10000){
        return value
      }else {
        return (value/10000).toFixed(0)+"万"
      }
    },
    duration(value){
      return (value/1000/60).toFixed(2)
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.video {
display: flex;
  flex-wrap: wrap;
}
.desc {
  margin-top: 10px;
  font-size: 14px;
}
.img {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.icon {
  width: 15px;
}
.play-time {
  color: #ffffff;
  position: absolute;
  font-size: 14px;
  top: 3px;
  right: 3px;
}
.duration {
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  bottom: 3px;
  right: 3px;
}
.item {
  width: 220px;
  margin: 20px 20px;
}
img {

  width: 100%;
}
</style>
