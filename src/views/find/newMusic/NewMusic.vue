<template>
  <div class="new-music">
    <MusicOrAlbum/>
    <page-list :items="titles" @itemClick="titleClick"></page-list>
    <router-view :album-info="weekData" :new-music-info="newMusicInfo"></router-view>
  </div>
</template>

<script>
import {getNewAlbum,getNewMusic} from "@/network/newMusic";
import PageList from "@/views/find/newMusic/childComp/PageList";
import MusicOrAlbum from "@/views/find/newMusic/childComp/MusicOrAlbum";
export default {
  name: "NewMusic",
  components:{
    PageList,
    MusicOrAlbum
  },
  data(){
    return {
      titles:["全部","华语","欧美","韩国","日本"],
      newMusicInfo:[],
      weekData:[],
      type:0,
      offset:0,
      currentType:"ALL"
    }
  },
  methods:{
    titleClick(index){
      switch (index){
        case 0:
          this.type=0
          this.currentType="ALL"
          break;
        case 1:
          this.type=7
          this.currentType="ZH"
          break;
        case 2:
          this.type=96
          this.currentType="EA"
          break;
        case 3:
          this.type=16
          this.currentType="KR"
          break;
        case 4:
          this.type=8
          this.currentType="JP"
          break;
      }
      this.getNewMusic()
    },
    getNewMusic(){
      const type=this.type
      getNewMusic(type).then(res=>{
        this.newMusicInfo=res.data.data
      })
    },
    getNewAlbum(area){
      const offset=this.offset*50
      getNewAlbum(offset,area,30).then(res=>{
        this.weekData=res.data.weekData
      })
    }
  },
  created() {
    this.getNewMusic()
    this.getNewAlbum("ALL")
    this.getNewAlbum("ZH")
    this.getNewAlbum("EA")
    this.getNewAlbum("KR")
    this.getNewAlbum("JP")
  }
}
</script>

<style scoped>
.new-music{
  padding: 0 40px;
}
</style>
