<template>
  <div class="music-male">
    <div class="item" v-for="(item,indx) in musicMaleInfo">
      <div class="img"> <img :src="item.coverImgUrl" alt=""></div>
      <div class="desc">{{item.name}}</div>
      <div class="count">{{item.trackCount}}首</div>
      <div class="artist"><i>by</i>{{item.creator.nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicMale",
  props:{
    musicMaleInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
img {
  border-radius: 10px;
  width: 65px;
  height: 65px;
}
.item{
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.item:nth-child(even){
  background-color: #f2f2f2;
}
.img {
  width: 10%;
}
.desc {
  font-size: 15px;
  width: 40%;
}
.count {
  font-size: 13px;
  color: #747474;
  width: 20%;
}
i {
  margin-right: 3px;
  font-size: 12px;
  color: #7f7f7f;
}
.artist {
  font-size: 13px;
}
</style>
