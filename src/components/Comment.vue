<template>
  <div class="comment">
    <h4 class="title">最新评论</h4>
   <div class="item" v-for="(item,index) in comments">
     <div class="img">
       <img :src="item.user.avatarUrl" alt="">
     </div>
     <div class="right-info">
       <div><i>{{item.user.nickname}}</i>:{{item.content}}</div>
       <div>{{item.time |Show}}
         <div class="choice">
           <img src="../assets/img/comment/点赞.png" alt="">{{item.likedCount}}
           <img src="../assets/img/comment/转发.png" alt="">
           <img src="../assets/img/comment/消息.png" alt="">
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props:{
    comments:{
      type:Array,
      default(){
        return []
      }
    }
  },
  filters:{
    Show(value){
      let date=new Date(value)
      let month=date.getMonth()+1
      if(month>=10){
        month=month
      }else  {
        month="0"+month
      }
      let day=date.getDate()
      if(day>=10){
        day=day
      }else  {
        day="0"+day
      }
      let hour=date.getHours()
      if(hour>=10){
        hour=hour
      }else  {
        hour="0"+hour
      }
      let mini=date.getMinutes()
      if(mini>=10){
        mini=mini
      }else  {
        mini="0"+mini
      }
      return month+"月"+day+"日"+hour+":"+mini
    }
  }
}
</script>

<style scoped>
.comment {
  padding: 0 40px;
}
.choice {
  position: absolute;
  right: 0;
  top: 3px;
}
.choice img{
  width: 17px;
  margin: 0 5px;
}
.choice img:hover {
  cursor: pointer;
}
.item {
  display: flex;
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid #eae9e9;
}
.img {
  margin-right: 10px;
  width: 5%;
}
.img img {
  border-radius: 50%;
  width: 100%;
}
.right-info {
  flex: 1;
  font-size: 13px;
}
.right-info i {
  color: #02026c;
  text-decoration: none;
}
.right-info div:nth-child(1){
  margin-bottom: 8px;
}
.right-info div:nth-child(2){
  position: relative;
  color: #aaaaaa;
}
</style>
