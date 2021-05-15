<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 60px;
}
.center img {
  width: 23px;

}
.left {
  color: #ffffff;
  font-size: 18px;
  width: 25%;
  display: flex;
}
.center {
  line-height: 60px;
  width: 30%;
}
.right {

  width: 45%;
}
.right img{
  width: 23px;
}
.left img {
  height: 60px;
}
</style>
