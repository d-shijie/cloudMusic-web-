<template>
  <div class="swiper" @mouseenter="Enter" @mouseleave="Leave">
    <div class="img">
      <span @click="goto(preIndex)" v-if="isShow"><img src="../assets/img/navbar/上一步(1).png" alt=""></span>
      <span @click="goto(nextIndex)" v-if="isShow"><img src="../assets/img/navbar/下一步(1).png" alt=""></span>
      <img class="swiper-img" :src="imageList[currentIndex].imageUrl" alt="">
      <div class="swiper-bottom">
        <ul>
          <li v-for="(item,index) in imageList"
              :class="{active:currentIndex===index}"
              @click="goto(index)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:{
    imageList:{
      type:Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0, // 当前显示图片的下标
      isShow:false, // 控制是否显示上一张下一张图片
      timer:null // 定时器
    }
  },
  methods:{
    // 鼠标经过停止定时器 显示图标
    Enter(){
      this.isShow=true
      clearInterval(this.timer)
    },
    // 鼠标离开在打开定时器 隐藏图标 定时器函数直接执行goto方法
    Leave(){
      this.isShow=false
      this.timer=setInterval(()=>{
        this.goto(this.nextIndex)
      },3000)
    },

    goto(index){
      this.currentIndex=index
    }
  },
  created() {
    this.timer=setInterval(()=>{
      this.goto(this.nextIndex)
    },3000)
  },
  computed:{
    // 判断当前图片下标
    preIndex(){
      if(this.currentIndex==0){
        return this.imageList.length-1
      }else {
        return this.currentIndex-1
      }
    },
    nextIndex(){
      if(this.currentIndex==this.imageList.length-1){
        return 0
      }else {
        return this.currentIndex+1
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  padding: 0 40px;

}
li {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  float: left;
  margin: 0 8px;
  background-color: #e8e8e8;
}
ul {
  position: absolute;
  margin: 0 auto;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
}
.swiper-bottom {
  position: relative;
  height: 30px;
}
.swiper-img {
  border-radius: 15px;
  width: 100%;
}
.img {
  position: relative;
}
span {
  display: inline-block;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.5);
}
span:hover {
  cursor: pointer;
}
span:nth-child(1){
  position: absolute;
  left: 27px;
  top: calc(50% - 40px);
  transform: translate(-50%);
}
span:nth-child(2){
  right: 0;
  position: absolute;
  top: calc(50% - 40px);
  transform: translate(-50%);
}
span img{
  width: 30px;
  height: 30px;
}
.active {
  background-color: #fd0505;
}
</style>
