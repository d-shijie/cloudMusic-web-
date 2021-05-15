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
.title-item {
  color: #000000;
  font-size: 19px;
  font-weight: 800;
}
img{
  width: 30px;
}
</style>
