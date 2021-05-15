<template>
   <div class="page-list">
     <img @click="pre" src="../assets/img/navbar/上一步(1).png" alt="">
       <img @click="next" src="../assets/img/navbar/下一步(1).png" alt="">
   </div>
</template>

<script>
export default {
  name: "PageList",
  props:{
    myOffset:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      offset:0
    }
  },
  methods:{
    // 无法对父组件传过来的prop直接进行处理
    pre(){
      this.offset--
      this.$emit("pre",this.offset)
    },
    next(){
      this.offset++
      this.$emit("next",this.offset)
    }
  },
}
</script>

<style scoped>
img {
  height: 30px;
  border-radius: 15px;
  margin: 10px 10px;
  background-color: #f2f2f2;
}
.page-list{
  height: 30px;
  width: 100px;
  margin-left: 250px;

}
</style>
