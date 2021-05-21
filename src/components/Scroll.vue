<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "Scroll",
  // 由使用它的组件决定使用下面的功能
  props:{
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    probeType:{
      type:Number,
      default: 0
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true, //允许点击
      pullUpLoad:this.pullUpLoad, // 下拉加载
      probeType:this.probeType // 滑动显示坐标
    })
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullingUp")
    })
  },
  methods:{
    // 滑动到固定区域
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    // 刷新
    refresh(){
      this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
