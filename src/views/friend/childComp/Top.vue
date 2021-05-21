<template>
   <div class="top">
     <div class="title">动态</div>
     <div class="add">➕ 写动态</div>
   </div>
</template>

<script>
export default {
name: "Top"
}
</script>

<style scoped>
.title{
  float: left;
  font-size: 20px;
  font-weight: 800;
  margin-left: 20px;
}
.add {
  float: right;
  margin-left: 370px;
  background-color: #f63030;
  font-size: 13px;
  color: #ffffff;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  margin-top: 15px;
  border-radius: 20px;
}
.top {
  border-left: 1px solid #cccccc;
  line-height: 60px;
  height: 60px;
}
</style>
