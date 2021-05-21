<template>
 <div class="friend">
   <top class="top"></top>
   <scroll class="content" ref="scroll">
   <trends class="trend"></trends>
   <Topic class="topic"></Topic>
   </scroll>
 </div>
</template>

<script>
import Scroll from "@/components/Scroll";
import Top from "@/views/friend/childComp/Top";
import Topic from "@/views/friend/childComp/Topic";
import Trends from "@/views/friend/childComp/Trends";
export default {
  name: "Friend",
  data(){
    return {
    hotTopic:[]
    }
  },
  components:{
    Scroll,
    Top,
    Topic,
    Trends
  },
  methods:{

  },
  created() {

  }
}
</script>

<style scoped>
.friend {
  overflow: hidden;
}
.content {
  height: calc(100% - 90px);
}
.top {
  position: fixed;
  top: 110px;
  background-color: #fff;
  z-index: 9999;
}
.trend {
float: left;
}
.topic {
float: right;
}
</style>
