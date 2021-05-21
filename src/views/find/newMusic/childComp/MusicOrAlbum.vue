<template>
  <div class="music-album">
    <div class="main">
      <div :class="{active:currentIndex===1}" @click="itemClick1" class="music">新歌速递</div>
      <div :class="{active:currentIndex===2}" @click="itemClick2" class="album">新碟上架</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicOrAlbum",
  data(){
    return {
      currentIndex:1
    }
  },
  methods:{
    itemClick1() {
      this.currentIndex=1
      this.$router.push("newMusicList")
    },
    itemClick2() {
      this.currentIndex=2
      this.$router.push("newAlbum")
    }
  }
}
</script>

<style scoped>
.music-album {
  width: 200px;
  height: 40px;
  margin: 10px auto;
}
.main {
  border: 1px solid #aaaaaa;
  width: 100%;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
}
.music,.album {
  width: 50%;
  padding: 10px 10px;
  border-radius: 20px;
  text-align: center;
  color: #555555;
  font-size: 13px;
}
.music:hover,.album:hover{
  background-color: #f2f2f2;
}
.active {
  background-color: #c9c9c9;
  color: #ffffff;
}
</style>
