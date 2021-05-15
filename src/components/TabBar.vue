<template>
  <div class="tab-bar">
    <ul>
      <li @click="itemClick(index)" :class="{active:currentIndex===index}" v-for="(item,index) in tabBarItem">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TabBar",
  props:{
    tabBarItem:{
      type:Array,
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit("TabClick",index)
      switch (index){
        case 0:
          this.$router.push("/find")
          break;
        case 1:
          this.$router.push("/video")
          break;
        case 2:
          this.$router.push("/friend")
          break;
        case 3:
          this.$router.push("/living")
          break;
        case 4:
          this.$router.push("/fm")
          break;
      }
    }
  }
}
</script>

<style scoped>
.tab-bar {
  width: 20%;
  height: 100vh;
  border-right: 1px solid #cccccc;
}
ul {
  margin: 10px 10px;
}
li {
  padding: 10px 10px;
  margin: 2px 0;
}
.active {
  background-color: #f2f2f2;
  font-weight: 800;
}
</style>
