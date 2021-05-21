<template>
  <div class="singer">
    <page-list @itemClick="itemClick1" :items="area"><div slot="title">语种:</div></page-list>
    <PageList @itemClick="itemClick2" :items="type"><div slot="title">分类:</div></PageList>
    <page-list @itemClick="itemClick3" :items="initial"><div slot="title">筛选:</div></page-list>
    <goods :goods-info="goodsInfo"></goods>
  </div>
</template>

<script>
import {getSinger} from "@/network/singer";
import PageList from "@/views/find/singer/childComp/PageList";
import Goods from "@/views/find/singer/childComp/Goods";
import Scroll from "@/components/Scroll";
export default {
  name: "Singer",
  data(){
    return {
      type:["全部","男歌手","女歌手","乐队组合"],
      area:["全部","华语","欧美","日本","韩国","其他"],
      initial:["A","B","C","D","E","F","G","H","I","J",
        "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      goodsInfo:[],
      offset:0,
      areaNumber:-1,
      typeNumber:-1,
      initialIndex:0
    }
  },
  components:{
    Scroll,
    PageList,
    Goods
  },
  methods:{
    itemClick1(index){
      switch (index) {
        case 0:
          this.areaNumber = -1
          break;
        case 1:
          this.areaNumber = 7
          break;
        case 2:
          this.areaNumber = 96
          break;
        case 3:
          this.areaNumber = 8
          break;
        case 4:
          this.areaNumber = 16
          break;
        case 5:
          this.areaNumber = 0
      }
      this.getSinger()
    },
    itemClick2(index){
      switch (index){
        case 0:
          this.typeNumber=-1
          break;
        case 1:
          this.typeNumber=1
          break;
        case 2:
          this.typeNumber=2
          break;
        case 3:
          this.typeNumber=3
          break;
      }
      this.getSinger()
    },
    itemClick3(index){
      this.initialIndex=index
      this.getSinger()
    },
    getSinger(){
      const offset=this.offset*30
      const type=this.typeNumber
      const area=this.areaNumber
      const initialIndex=this.initialIndex
      getSinger(offset,type,area,this.initial[initialIndex]).then(res=>{
        this.goodsInfo.push(...res.data.artists)
        // this.goodsInf=res.data.artists
           this.offset+=1
      })
    }
  },
  created() {
    this.getSinger()
  }
}
</script>

<style scoped>
.singer {
  padding: 0 40px;
}

</style>
