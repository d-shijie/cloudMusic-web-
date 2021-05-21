<template>
  <div class="broadcast">
    <swiper :image-list="swiperImages" class="living-swiper"></swiper>
    <category :categories="categories"></category>
    <little-title><div slot="title">听听</div></little-title>
    <Look :look-info="lookInfo"></Look>
    <little-title><div slot="title">付费精品</div></little-title>
    <Pay :pay-info="payInfo"></Pay>
    <div class="personal">个性推荐</div>
    <Personal :personal-info="personalInfo"></Personal>
    <little-title><div slot="title">创作翻唱</div></little-title>
    <recommend :recommend-info="recommendInfo[2001]"></recommend>
    <little-title><div slot="title">声之剧场</div></little-title>
    <recommend :recommend-info="recommendInfo[10001]"></recommend>
    <little-title><div slot="title">音乐故事</div></little-title>
    <recommend :recommend-info="recommendInfo[2]"></recommend>
    <little-title><div slot="title">情感调频</div></little-title>
    <recommend :recommend-info="recommendInfo[3]"></recommend>
    <little-title><div slot="title">声音恋人</div></little-title>
    <recommend :recommend-info="recommendInfo[3001]"></recommend>
  </div>
</template>

<script>
import {getBanner} from "@/network/living";
import  {getCategory} from "@/network/living";
import {getListen} from "@/network/living";
import {getPay} from "@/network/living";
import {getPersonal} from "@/network/living";
import {getRecommend} from "@/network/living";
import Swiper from "@/components/Swiper";
import LittleTitle from "@/components/LittleTitle";
import Look from "@/views/find/boradcast/childComp/Look";
import Pay from "@/views/find/boradcast/childComp/Pay";
import Personal from "@/views/find/boradcast/childComp/Personal";
import Recommend from "@/views/find/boradcast/childComp/Recommend";
import Category from "@/views/find/boradcast/childComp/Category";
export default {
  name: "Boradcast",
  data(){
    return {
    swiperImages:[],
      lookInfo:[],
      payInfo:[],
      personalInfo: [],
      recommendInfo: {
        2001:[],
        10001:[],
        2:[],
        3:[],
        3001:[]
      },
      coverInfo:[],
      voiceInfo:[],
      storyInfo:[],
      emotionInfo:[],
      loverInfo:[],
      categories:[]
    }
  },
  components:{
    Swiper,
    LittleTitle,
    Look,
    Pay,
    Personal,
    Recommend,
    Category
  },
  created() {
    getBanner().then(res=>{
      this.swiperImages=res.data.data
    })
    getCategory().then(res=>{
      this.categories=res.data.categories
    })
    this.getListen()
    this.getPay()
    this.getPersonal()
    this.getRecommend(2001)
    this.getRecommend(10001)
    this.getRecommend(2)
    this.getRecommend(3)
    this.getRecommend(3001)
  },
  methods:{
    getListen(){
      getListen(5).then(res=>{
        this.lookInfo=res.data.data.list
      })
    },
    getPay(){
      getPay(4).then(res=>{
        this.payInfo=res.data.data.list
      })
    },
    getPersonal(){
      getPersonal(5).then(res=>{
        this.personalInfo=res.data.data
      })
    },
    getRecommend(type){
      getRecommend(type).then(res=>{
       this.recommendInfo[type].push(...res.data.djRadios)
      })
    }
  }
}
</script>

<style scoped>
.broadcast {
  padding: 0 40px;
}
.personal {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
}

</style>
