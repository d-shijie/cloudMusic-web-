<template>
  <div class="search">
    <ControlBar class="control"
                @controlClick="control"
                :items="items"></ControlBar>
    <scroll class="content" ref="scroll">
      <keep-alive>
    <router-view :search-info="searchInfo"
                 :singer-info="singerInfo"
                 :album-info="albumInfo"
                 :video-info="videoInfo"
                 :lyric-info="lyricInfo"
                 :dj-info="djInfo"
                 :user-info="userInfo"
                 :music-male-info="musicMaleInfo"
                 @getMusicId="getMusicId">
    </router-view>
      </keep-alive>
    </scroll>
  </div>
</template>

<script>
import ControlBar from "@/components/ControlBar";
import Scroll from "@/components/Scroll";
import PageList from "@/components/PageList";
export default {
  name: "Search",
  components:{
    ControlBar,
    Scroll,
    PageList
  },
  props:{
    searchInfo:{
      type:Array,
      default(){
        return []
      }
    },
    singerInfo:{
      type:Array,
      default() {
        return [];
      }
    },
    albumInfo:{
      type:Array,
      default(){
        return []
      }
    },
    videoInfo:{
      type:Array,
      default(){
        return []
      }
    },
    musicMaleInfo:{
      type:Array,
      default(){
        return []
      }
    },
    lyricInfo:{
      type:Array,
      default(){
        return []
      }
    },
    djInfo:{
      type:Array,
      default(){
        return []
      }
    },
    userInfo:{
      type:Array,
      default(){
        return []
      }
    },
    myOffset:{
      type:Number,
    }
  },
  data(){
    return {
      // searchInfo:[]
      items:["单曲","歌手","专辑","视频","歌单","歌词","主播电台","用户"],
      musicId:"",
      offset:0
    }
  },
  methods:{
    next(offset){
      this.$emit("next",offset)
      this.$refs.scroll.scrollTo(0,0,0)
    },
    pre(offset){
      this.$emit("pre",offset)
      this.$refs.scroll.scrollTo(0,0,0)
    },
    getMusicId(musicId){
      this.musicId=musicId
      this.$emit("getMusicId",musicId)
    },
    control(index){
      switch (index){
        case 0:
          this.$router.push("singleMusic")
          break;
        case 1:
          this.$router.push("searchSinger")
          break;
        case 2:
          this.$router.push("album")
          break;
        case 3:
          this.$router.push("searchVideo")
          break;
        case 4:
          this.$router.push("searchMusicMale")
          break;
        case 5:
          this.$router.push("lyric")
          break;
        case 6:
          this.$router.push("searchDj")
          break;
        case 7:
          this.$router.push("searchUser")
          break;
      }
    },
    searchClick() {
    }
  },
}
</script>

<style scoped>
.search {
  padding: 0 40px;
}
.search {
  height: 300px;
}
.content {
  height: calc(100% + 100px);
}
.control {
  position: relative;
  z-index: 1000;
  background-color: #fff;
}
</style>
