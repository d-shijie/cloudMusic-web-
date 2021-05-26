<template>
  <div class="video-list">
    <div class="titles">
      <div class="tag">{{titles[currentIndex]}}  ></div>
      <div class="title-item"
           :class="{active:currentIndex===index}"
           @click="itemClick(index)"
           v-for="(item,index) in titles">{{item}}</div>
    </div>

    <h2>{{testInfo}}</h2>
  </div>
</template>

<script>
import {getCategoryList} from "@/network/video";
import {getVideo} from "@/network/video";
import axios from "axios";
export default {
  name: "VideoList",
  data(){
    return {
      titles:["翻唱","听BGM","生活","游戏","ACG音乐","最佳饭制","现场","舞蹈","MV",],
      // 可以使用服务器拿取id与name 但是地址一直报301 时好时坏
      // titles:[]
      currentIndex:0,
      videos:{
        60100:[],
        58101:[],
        2100:[],
        2103:[],
        57104:[],
        1105:[],
        58100:[],
        1101:[],
        1000:[]
      },
      testInfo:[]
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    },
    getVideo(){
      axios.get("/api/video/group?id=1000").then(res=>{
        console.log(res)
      })
     // getVideo(1000).then(res=>{
     //   this.testInfo=res.data.datas
     //   console.log(res)
     // })
    }
  },
  mounted() {
    this.getVideo()
    // this.getVideo(60100)
    // this.getVideo(58101)
    // this.getVideo(2100)
    // this.getVideo(2103)
    // this.getVideo(57104)
    // this.getVideo(1105)
    // this.getVideo(58100)
    // this.getVideo(1101)
    // this.getVideo(1000)
    // getCategoryList().then(res=>{
    //   console.log(res)
    // })
  }
}
</script>

<style scoped>
.titles {
  display: flex;
  align-items: center;
  padding: 0 30px;
}
.tag {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  margin-right: 120px;
  background-color: #f2f2f2;
  border: 1px solid #aaaaaa;
}
.title-item {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
}
.active {
  color: #f63838;
  background-color: #dcdcdc;
}
</style>
