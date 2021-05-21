<template>
  <div class="user">
    <img src="../../../assets/img/navbar/头像.png" alt="">
    <div class="login">登录查看动态</div>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
.user {
  padding: 10px 0;
 text-align: center;
  background-color: #eae9e9;
}
img {
  width: 50px;
}
.login {
  margin: 10px 0;
  text-align: center;
  color: #7b7b7b;
  font-size: 15px;
}
.login:hover{
  cursor: pointer;
}
</style>
