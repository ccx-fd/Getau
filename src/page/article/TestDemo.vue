<template>
  <div class="testdemo">

    <div class="nav">nav</div>
    <div class="content">content</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
    export default {
        name: "TestDemo"
    }
</script>

<style scoped>
  .testdemo{
    width: 60%;
    margin: auto;
    /*display: flex;*/
    /*flex-direction: column;*/
  }

  .nav{
    background-color: #42b983;
    /*display: flex;*/
  }
  .content{
    background-color: yellow;
    /*display: flex;*/
  }
  .footer{
    background-color: black;
    /*display: flex;*/
  }
  a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>
