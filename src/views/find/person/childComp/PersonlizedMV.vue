<template>
 <div class="personlized-mv">
   <div class="item" v-for="(item,index) in personlizedMV"
        @mouseenter="Show(index)"
        @mouseleave="NotShow(index)"
   >
     <div class="img">
        <div class="title" v-if="currentIndex===index">
          {{item.copywriter}}
        </div>
       <img class="icon" src="../../../../assets/img/goodslist/播放icon.png" alt="">
       <i>{{item.playCount}}</i>
       <img :src="item.picUrl" alt="">
     </div>
     <div class="name">{{item.name}}</div>
     <div class="artistName">{{item.artistName}}</div>
   </div>
 </div>
</template>

<script>
export default {
  name: "PersonlizedMV",
  props:{
    personlizedMV:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:""
    }
  },
  methods:{
    // 参数播放的图片 根据现在的下标值判断
    Show(index){
    this.currentIndex=index
    },
    NotShow(index){
      this.currentIndex=""
    }
  },
  computed:{
    // Name(){
    //   let name=""
    //   for(let i of this.personlizedMV){
    //     for(let j of i.artists){
    //       name+=j.name+"/"
    //     }
    //   }
    //   return name
    // }
  }
}
</script>

<style scoped>
.personlized-mv{
  display: flex;
  justify-content: space-between;
}
.item {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  width: 24%;
}
.item img {
  border-radius: 10px;
  width: 100%;
}
.name{
  font-size: 14px;
  margin: 5px 5px;
}
i {
  position: absolute;
  right: 5px;
  top: 5px;
  color: #ffffff;
  font-size: 8px;
}
.artistName {
  font-size: 13px;
  margin-left: 5px;
  color: #cccc;
}
.img{
  position: relative;
}
.img .icon{
  position: absolute;
  width: 12px;
  right: 30px;
  top: 5px;
}
.title {
  position: absolute;
  top: 0;
  height: 30px;
  width: 100%;
  color: #ffffff;
  padding: 0 0 0 5px;
  line-height: 30px;
  font-size: 12px;
  background-color:rgba(0,0,0,.3);
}
</style>
