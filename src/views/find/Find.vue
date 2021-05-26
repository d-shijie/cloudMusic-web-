<template>
  <div class="find">
    <control-bar @controlClick="controlClick"
                 class="control"
                 :items="controlItems"></control-bar>
    <scroll class="content"
            @pullingUp="loadMore"
            ref="scroll"
            :pull-up-load="true">
      <keep-alive><router-view ref="router"></router-view></keep-alive>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll"; // 滑动组件
import ControlBar from "@/components/ControlBar"; // 上方控制栏组件
export default {
  name: "Find",
  data(){
    return {
      controlItems:["个性推荐","歌单","主播电台","排行榜","歌手","最新音乐"], // 控制栏选项
    }
  },
  components:{
    ControlBar,
    Scroll
  },
  methods:{
    loadMore(){
      // this.$refs.router.getSinger()
      this.$refs.scroll.finishPullUp()
    },
    imageLoad(){
      this.$bus.$on("imageLoad",()=>{
        this.$refs.scroll.refresh()
      })
    },
    // 通过下标值改变路径（暴力方法需改进）
    controlClick(index){
      switch (index){
        case 0:
          this.$router.push("/find/person")
          break;
        case 1:
          this.$router.push("/find/musicMale")
          break;
        case 2:
          this.$router.push("/find/broadcast")
          break;
        case 3:
          this.$router.push("/find/rank")
          break;
        case 4:
          this.$router.push("/find/singer")
          break;
        case 5:
          this.$router.push("/find/newmusic")
          break;
      }
    }
  },

}
</script>

<style scoped>
.control {
  position: relative;
  z-index: 1000;
  margin-left: 1px;
  background-color: #fff;
}

.content {
  height: calc(100% - 150px);
}

</style>
