<template>
  <div class="page-size">
    <ul>
      <li><</li>
      <li v-for="(item,index) in items">
        {{index+1}}
      </li>
      <li>></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageSize",
  props:{
    items:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.page-size{
  text-align: center;
}
ul {
  display: inline-block;
}
li {
  float: left;
  background-color: #ffffff;
  padding: 5px 7px;
  cursor: pointer;
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #aaaaaa;
  margin-right: 5px;
}
li:hover{
  background-color: #f2f2f2;
}
</style>
