<template>
  <div class="rank">
    <div class="title">官方榜</div>
    <TopRank :top-rank-info="topList[19723756]"></TopRank>
    <TopRank :top-rank-info="topList[3779629]"></TopRank>
    <TopRank :top-rank-info="topList[2884035]"></TopRank>
    <TopRank :top-rank-info="topList[3778678]"></TopRank>
    <div class="title">全球榜</div>
    <world :world-info="worldInfo"></world>
  </div>
</template>

<script>
import {getRankList} from "@/network/rank";
import {getMaleDetail} from "@/network/muiscMale";
import TopRank from "@/views/find/rank/childComp/TopRank";
import World from "@/views/find/rank/childComp/World";
export default {
  name: "Rank",
  components:{
    TopRank,
    World
  },
  data(){
    return {
      topList:{
        19723756:{},
        3779629:{},
        2884035:{},
        3778678:{},
      },
      worldInfo:[]
    }
  },
  created() {
    getRankList().then(res=>{
      this.worldInfo=res.data.list
    })
    // 飙升
    this.getMaleDetail(19723756)
    // 新歌
    this.getMaleDetail(3779629)
    // 原创
    this.getMaleDetail(2884035)
    // 热歌
    this.getMaleDetail(3778678)
  },
  methods:{
    getMaleDetail(id){
      getMaleDetail(id).then(res=>{
        this.topList[id]=res.data.playlist
      })
    }
  }
}
</script>

<style scoped>
.rank {
  padding: 0 40px;
}
.title {
  margin: 10px 0;
  font-size: 19px;
  font-weight: 800;
}
</style>
