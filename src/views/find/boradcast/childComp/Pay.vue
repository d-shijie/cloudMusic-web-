<template>
  <div class="pay">
     <div class="item" v-for="(item,index) in payInfo">
       <div class="img"><img :src="item.picUrl" alt=""></div>
       <div class="desc">
         <div class="pay-name">{{item.name}}</div>
         <div class="nickname"><i>by</i>{{item.creatorName}}</div>
         <div class="score">{{item.score}}</div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  props:{
    payInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.pay {
  display: flex;
  flex-wrap: wrap;
}
.item {
  position: relative;
  margin: 10px 10px 5px 0;
  display: flex;
  width: 48%;
}
.img {
  width: 50%;
}
.img img{
  width: 100%;
  border-radius: 10px;
}
.desc {
  margin-left: 10px;
}
.pay-name {
  margin: 10px 0;
  font-size: 15px;
}
i {
  margin-right: 3px;
}
.nickname {
  margin-top:  20px;
  font-size: 13px;
  color: #a09f9f;
}
.score {
  position: absolute;
  bottom: 5px;
  font-size: 13px;
  color: #747474;
}
</style>
