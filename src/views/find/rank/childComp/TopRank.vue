<template>
 <div class="top-rank">
   <div class="img">
     <img :src="topRankInfo.coverImgUrl" alt="">
   </div>
   <div class="musics">
     <ul>
       <li v-for="(item,index) in topRankInfo.tracks.slice(0,5)">
         <i class="number">{{index+1}}</i><i>-</i>{{item.name}}
       </li>
     </ul>
     <div class="more">查看全部 ></div>
   </div>
 </div>
</template>

<script>
export default {
  name: "TopRank",
  props:{
    topRankInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.top-rank {
  display: flex;
  margin: 10px 0 40px 0;
}
.img {
  width: 24%;
}
img {
  border-radius: 10px;
  width: 100%;
}
.musics {
  flex: 1;
  margin-left: 20px;
}
.img:hover {
  cursor: pointer;
}
ul {
  height: 100%;
  flex-direction: column;
  width: 100%;
}
li {
  padding: 10px 0 10px 5px;
  font-size: 13px;
  color: #5e5d5d;
  width: 100%;
}
ul li:hover{
  cursor: pointer;
  background-color: #bfbfbf;
}
li:nth-child(odd){
  background-color: #f2f2f2;
}
i {
  margin-right: 10px;
}
li:nth-child(1) .number,
li:nth-child(2) .number,
li:nth-child(3) .number{
  color: #ee1f1f;
}
.more {
  font-size: 12px;
  color: #9c9c9c;
}
.more:hover{
  cursor: pointer;
  color: #747474;
}
</style>
