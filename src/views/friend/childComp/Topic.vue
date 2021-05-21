<template>
  <div class="topic">
    <user></user>
    <hot-topic></hot-topic>
  </div>
</template>

<script>
import {getHotTopic} from "@/network/friend";
import User from "@/views/friend/childComp/User";
import HotTopic from "@/views/friend/childComp/HotTopic";
export default {
  name: "Topic",
  data(){
    return {
    hotTopic:[]
    }
  },
  components:{
    User,
    HotTopic
  },
  methods:{
    // getHotTopic(){
    //   getHotTopic().then(res=>{
    //     console.log(res.data.hot)
    //     this.hotTopic=res.data.hot
    //   })
    // }
  },
  created() {
    // this.getHotTopic()
  }
}
</script>

<style scoped>
.topic {
  width: 243px;
  height: 11100px;
  float: right;
  border-left: 1px solid #cccccc;
}
</style>
