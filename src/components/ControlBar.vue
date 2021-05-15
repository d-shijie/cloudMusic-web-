<template>
  <div class="control-bar">
    <ul>
      <li @click="itemClick(index)"
          :class="{active:currentIndex===index}" v-for="(item,index) in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ControlBar",
  props:{
    items:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    // 向父组件传值
    itemClick(index) {
      this.currentIndex=index
      this.$emit("controlClick",index)
    }
  }
}
</script>

<style scoped>
ul {
  margin-left: 20px;
  padding: 10px 0px;
  display: flex;
}
li {
  margin: 5px 15px;
  padding: 10px 0;

}
.active {
  border-bottom: 3px solid #db0707;
  color: #000000;
  font-weight: 800;
  font-size: 19px;
}
</style>
