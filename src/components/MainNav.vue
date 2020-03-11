<template>
  <div class="header">
    <div class="header-first">
      <div class="header-first-right">
        <router-link to="">登录</router-link>
        <router-link to="" class="user-register">用户注册</router-link>
        <button class="btn-register">商家免费注册</button>
      </div>
    </div>
    <div class="header-second">
      <img src="" alt="知澳|专业服务搜索平台">
      <div>
        <input value="搜索你想了解的澳洲" type="text">
        <button class ="btn-search">
          搜索
        </button>
      </div>
      <router-link to="">全部分类</router-link>
      <router-link to="">折扣信息</router-link>
      <router-link to="">发现</router-link>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .btn-register{
    border: 0px;
    background: goldenrod;
    color: white;
  }
  .btn-search{
    border:0px;
    margin-top: 10px;
    width: 100px;
    height: 40px;
    color: white;
    border-radius: 5px;
    background-color: gold;
  }
  .user-register{
    color: orange;
  }
  input{
    border: 2px solid #cccccc;
    width: 300px;
    height: 40px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .router-link-active{
    text-decoration: none;
  }
  .header{
    /*background-color: red;*/
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .header-first{
    display: flex;
    justify-content: flex-end;
  }
  .header-first-right{
    width: 30%;
    /*flex-direction: row-reverse;*/

    display:flex;
    justify-content: space-between;
  }
  .header-second{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
