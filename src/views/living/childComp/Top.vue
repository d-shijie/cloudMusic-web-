<template>
  <div class="top">
    <span class="title">LOOK直播 <i>在这里，看见音乐</i></span>
    <span class="more">更多 ></span>
  </div>
</template>

<script>
export default {
name: "Top"
}
</script>

<style scoped>
.title {
  float: left;
  font-size: 20px;
  font-weight: 600;
}
.title i {
  font-size: 12px;
  font-weight: normal;
}
.more {
  float: right;
  color: #9e9d9d;
  font-size: 13px;
}
.more:hover {
  cursor: pointer;
  color: #797979;
}
</style>
