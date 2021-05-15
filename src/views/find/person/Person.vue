<template>
  <div class="person">
    <Scroll class="content" ref="scroll">
      <swiper :image-list="swiperList"></swiper>
      <little-title class="little-title">
        <div slot="title">
          推荐歌单
        </div>
      </little-title>
      <goods-list class="goods-list"
                  :goods="musicList"></goods-list>
      <little-title class="little-title">
        <div slot="title">
          独家放送
        </div>
      </little-title>
      <personlized :personlized-image="personlizedImage"></personlized>
      <little-title class="little-title">
        <div slot="title">
          最新音乐
        </div>
      </little-title>
      <person-new-music :new-music="newSongs"></person-new-music>
      <little-title class="little-title">
        <div slot="title">
          推荐MV
        </div>
      </little-title>
      <personlized-m-v :personlized-m-v="personlizedMv"></personlized-m-v>
      <little-title class="little-title">
        <div slot="title">
          主播电台
        </div>
      </little-title>
      <PersonDjProgram :person-dj-program="personDjProgram"></PersonDjProgram>
      <little-title class="little-title">
        <div slot="title">
          听听
        </div>
      </little-title>
      <PersonHotDj :hot-djs="hotDjs"></PersonHotDj>
      <little-title class="little-title">
        <div slot="title">
          看看
        </div>
      </little-title>
      <PersonHotDj :hot-djs="hotDjs"></PersonHotDj>
    </Scroll>
  </div>
</template>

<script>
import {getBanner} from "@/network/banner"; // 轮播图数据
import {getPersonNewSong} from "@/network/person"; // 新歌数据
import {getMusicList} from "@/network/person"; // 歌单数据
import {getPersonalized} from "@/network/person"; //
import {getPersonlizedMV} from "@/network/person"; //mv数据
import {getDjProgram} from "@/network/person"; // 电台数据
import  {getDjhot} from "@/network/person"; // 热门电台
import Scroll from "@/components/Scroll";
import Swiper from "@/components/Swiper"; // 轮播图
import LittleTitle from "@/components/LittleTitle"; // 小标题
import GoodsList from "@/components/GoodsList";
import Personlized from "@/views/find/person/childComp/Personlized";
import PersonNewMusic from "@/views/find/person/childComp/PersonNewMusic";
import PersonlizedMV from "@/views/find/person/childComp/PersonlizedMV";
import PersonDjProgram from "@/views/find/person/childComp/PersonDjProgram";
import PersonHotDj from "@/views/find/person/childComp/PersonHotDj";
export default {
  name: "Person",
  data(){
    return {
      swiperList:[], // 轮播图图片
      musicList:[], // 歌单
      newSongs:[], // 新歌
      personlizedImage:[], // 独家推送
      personlizedMv:[], // mv
      personDjProgram: [],// 电台
      hotDjs:[]  // 热门电台
    }
  },
  components: {
    Scroll,
    Swiper,
    LittleTitle,
    GoodsList,
    Personlized,
    PersonNewMusic,
    PersonlizedMV,
    PersonDjProgram,
    PersonHotDj
  },
  methods:{
    // 获取数据 固定方法 参数官方文档有说明
    getBanner(type){
      getBanner(this.type).then(res=>{
        this.swiperList=res.data.banners
      })
    },
    getPersonNewSong(limit){
      getPersonNewSong(12).then(res=>{
        this.newSongs=res.data.result
      })
    },
    getMusicList(limit){
      getMusicList(10).then(res=>{
        this.musicList=res.data.result
      })
    },
    getPersonalized(limit){
      getPersonalized(3).then(res=>{
        this.personlizedImage=res.data.result
      })
    },
    getPersonlizedMV(){
      getPersonlizedMV().then(res=>{
        this.personlizedMv=res.data.result
      })
    },
    getDjProgram(){
      getDjProgram().then(res=>{
        this.personDjProgram=res.data.result
      })
    },
    getDjHot(limit){
      getDjhot(5).then(res=>{
        this.hotDjs=res.data.djRadios
      })
    }
  },
  created() {
    this.getBanner(2)
    this.getPersonNewSong(12)
    this.getMusicList(10)
    this.getPersonalized(3)
    this.getPersonlizedMV()
    this.getDjProgram()
    this.getDjHot(5)
  }
}
</script>

<style scoped>
.person{
  padding: 0 40px;
  height: calc(100vh - 140px);
}
.content {
  height: calc(100% - 120px);
}
.little-title {
  margin-top: 15px;
}

</style>
