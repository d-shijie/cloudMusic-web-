<template>
  <div class="music-male">
    <div class="titles">
      <div class="tag">{{titles[currentIndex]}}  ></div>
      <div class="title-item"
           :class="{active:currentIndex===index}"
           @click="itemClick(index)"
           v-for="(item,index) in titles">{{item}}</div>
    </div>
    <play-list :play-list="musicList[currentType].list"></play-list>
    <div class="goto">
      <img @click="pre" class="pre" src="../../../assets/img/navbar/上一步(1).png" alt="">
      <img @click="next" class="next" src="../../../assets/img/navbar/下一步(1).png" alt=""></div>
  </div>
</template>

<script>
import {getPlayList} from "@/network/musicList";
import {getMusicList} from "@/network/musicList";
import playList from "@/components/playList";
export default {
  name: "MusicMale",
  components:{
    playList
  },
  data(){
    return {
      currentIndex:0,
      offset:0,
      currentType:"华语",
      titles:["华语","流行","摇滚","民谣","电子","说唱","轻音乐","综艺","影视原声","ACG"],
      musicList:{
        "华语":{list:[],offset:0},
        "流行":{list:[],offset:0},
        "摇滚":{list:[],offset:0},
        "民谣":{list:[],offset:0},
        "电子":{list:[],offset:0},
        "说唱":{list:[],offset:0},
        "轻音乐":{list:[],offset:0},
        "综艺":{list:[],offset:0},
        "影视原声":{list:[],offset:0},
        "ACG":{list:[],offset:0},
      }
    }
  },
  created() {
    this.getMusicList("华语")
    this.getMusicList("流行")
    this.getMusicList("摇滚")
    this.getMusicList("民谣")
    this.getMusicList("电子")
    this.getMusicList("说唱")
    this.getMusicList("轻音乐")
    this.getMusicList("综艺")
    this.getMusicList("影视原声")
    this.getMusicList("ACG")
  },
  methods:{
    pre(){
      this.offset--
      this.getMusicList(this.currentType)
    },
    next(){
      this.offset++
      this.getMusicList(this.currentType)
    },
    itemClick(index){
      this.currentIndex=index
      switch (index){
        case 0:
          this.currentType="华语"
          break;
        case 1:
          this.currentType="流行"
          break;
        case 2:
          this.currentType="摇滚"
          break;
        case 3:
          this.currentType="民谣"
          break;
        case 4:
          this.currentType="电子"
          break;
        case 5:
          this.currentType="说唱"
          break;
        case 6:
          this.currentType="轻音乐"
          break;
        case 7:
          this.currentType="综艺"
          break;
        case 8:
          this.currentType="影视原声"
          break;
        case 9:
          this.currentType="ACG"
          break;
      }
    },
    getMusicList(cat){
      const offset=this.offset*100
      getMusicList(cat,100,offset).then(res=>{
        this.musicList[cat].list.push(...res.data.playlists)
      })
    }
  }
}
</script>

<style scoped>
.music-male {
  padding: 0 30px;
}
.titles {
  display: flex;
  align-items: center;
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
.goto {
  position:fixed;
  left: 350px;
  bottom: 1px;
  z-index: 10000;
}
.goto img {
  width: 25px;
  background-color: #cccccc;
  border-radius: 50%;
}
</style>
