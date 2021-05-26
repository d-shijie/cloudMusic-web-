<template>
  <div class="music-list">
    <ul>
      <li>
        <div class="title">音乐标题</div>
        <div class="singer">歌手</div>
        <div class="album">专辑</div>
        <div class="time">时长</div>
      </li>
      <li v-for="(item,index) in musicList" @click="sendId(item.id)">
        <div class="title">{{item.name}}</div>
        <div class="singer">{{item.ar[0].name}}</div>
        <div class="album">{{item.al.name}}</div>
        <div class="time">{{item.dt |Show}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props:{
    musicList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    sendId(id){
      this.$bus.$emit("getId",id)
    }
  },
  filters:{
    Show(value){
      return (value/1000/60).toFixed(2)
    }
  }
}
</script>

<style scoped>

li {
  display: flex;
  padding: 10px 0;
  font-size: 13px;
}
li:nth-child(1){
  color: #aaaaaa;
}
li:nth-child(even){
  background-color: #f6f5f5;
}
ul li:hover {
  background-color: #f2f2f2;
}
.title {
  padding-left: 100px;
  width: 50%;
}
.singer {
  width: 20%;
}
.album {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 20%;
}
.time {
  width: 10%;
}
</style>
