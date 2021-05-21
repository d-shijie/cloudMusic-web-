<template>
  <div class="page-list">
    <div class="title"><slot name="title"></slot></div>
    <div class="items">
      <ul>
        <li @click="itemClick(index)" :class="{active:currentIndex===index}" v-for="(item,index) in items">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageList",
  data() {
    return {
      currentIndex: 0
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
  margin: 10px 0;
  font-size: 13px;
  display: flex;
}
.title {
  margin-right: 15px;
  padding: 3px 0;
  width: 5%;
}
li {
  float: left;
  margin-bottom: 10px;
  border-radius: 10%;
  padding: 3px 10px;
  text-align: center;
}
.active {
  background-color: #e5e5e5;
  color: #f52e2e;
}
</style>
