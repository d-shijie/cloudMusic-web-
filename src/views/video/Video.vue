<template>
  <div class="video">
    <control-bar :items="items" @controlClick="controlClick"></control-bar>
    <keep-alive><router-view></router-view></keep-alive>
    <h2></h2>
  </div>
</template>

<script>
import {getCategory} from "@/network/video";
import ControlBar from "@/components/ControlBar";
export default {
  name: "Video",
  data(){
    return{
      items:["视频","MV"],

    }
  },
  components: {ControlBar},
  methods:{
    controlClick(index){
      switch (index){
        case 0:
          this.$router.push("videoList")
          break;
        case 1:
          this.$router.push("mvList")
          break;
      }
    },
  },
  created() {
    // getCategory().then(res => {
    //   console.log(res)
    // })

  }
}
</script>

<style scoped>

</style>
