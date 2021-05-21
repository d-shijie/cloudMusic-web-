<template>
  <div class="page-list">
    <div class="item" @click="itemClick(index)" :class="{active:currentIndex===index}" v-for="(item,index) in items">
        {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "PageList",
  data(){
    return {
     currentIndex:0
    }
  },
  props:{
    items:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit("itemClick",index)
    }
  }
}
</script>

<style scoped>
.page-list {
  display: flex;
  margin: 10px 0;
}
.item {
  margin: 0 15px;
  color: #787777;
  font-size: 14px;
}
.item:hover {
  cursor: pointer;
}
.active {
  color: #000000;
  font-weight: 600;
}
</style>
