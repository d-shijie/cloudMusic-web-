<template>
  <div class="title">
   <div class="title-item"><slot name="title"></slot></div>
    <img src="../assets/img/navbar/下一步(1).png" alt="">
  </div>
</template>

<script>
export default {
  name: "LittleTitle"
}
</script>

<style scoped>
.title {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.title:hover{
  cursor: pointer;
}
.title-item {
  color: #3d3d3d;
  font-size: 19px;
  font-weight: 800;
}
.title-item:hover {
  color: #000000;
}
img{
  width: 30px;
}
</style>
