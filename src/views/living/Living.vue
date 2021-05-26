<template>
 <div class="living">
   <scroll class="content" ref="scroll"
           :pull-up-load="true"
           @scroll="contentScroll"
           @pullingUp="loadMore">
   <top class="top"/>
   <goods :goods="hotDjs"></goods>
   </scroll>
 </div>
</template>

<script>
import {getHotDjs} from "@/network/living";
import Scroll from "@/components/Scroll";
import Top from "@/views/living/childComp/Top";
import Goods from "@/views/living/childComp/Goods";
export default {
  name: "Living",
  data(){
    return {
      hotDjs:[],
      limit:30
    }
  },
  components:{
    Top,
    Goods,
    Scroll
  },
  methods:{
    // contentScroll(position){
    //   console.log(position)
    // },
    loadMore(){
      this.limit+=20
      this.$refs.scroll.finishPullUp()
    },
    getHotDjs(limit){
      limit=this.limit
      getHotDjs(limit).then(res=>{
        this.hotDjs=res.data.data.list
        limit+=100
      })
    }
  },
  created() {
    this.getHotDjs()
  }
}
</script>

<style scoped>
.top {
  padding: 20px 30px;
}
.living {
  height: 100%;
}
.content {
  height: calc(100% - 110px);
}
</style>
