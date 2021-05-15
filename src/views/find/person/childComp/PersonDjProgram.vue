<template>
  <div class="person-dj">
    <div class="item" v-for="(item,index) in personDjProgram">
      <div class="img">
        <img :src="item.picUrl" alt="">
        <div class="dj-name">{{item.name}}</div>
      </div>
      <div class="copy-writer">
        {{item.copywriter}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonDjProgram",
  props:{
    personDjProgram:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.person-dj {
  display: flex;
  justify-content: space-between;
}
.item {
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  width: 16%;
}
.img{
  position: relative;
}
.img img {
  width: 100%;
}
.dj-name {
  width: 100%;
  height: 25px;
  position: absolute;
  bottom: 0;
  background-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis ;
  line-height: 25px;
  font-size: 13px;
  color: #ffffff;
}
.copy-writer {
  font-size: 14px;
  margin-top: 7px;
}
</style>
