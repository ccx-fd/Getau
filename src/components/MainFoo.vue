<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-left">发现身边的澳洲，享受品质生活</div>
      <div class="footer-top-right">
        <router-link to="">品牌推广</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">广告投放</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">商业合作</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">意见反馈</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">关于我们</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">联系我们</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        Copyright 2019 知澳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="">隐私条例</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .footer{
    /*margin: auto;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-top{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .footer-top-right{
    display: flex;
    justify-content: space-between;
  }
  .footer-bottom{
    width: 100%;
    margin: auto;
    /*justify-content: space-between;*/
    background-color: gainsboro;
    color: #000;
  }
  .footer-bottom-content{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
  }
  .footer-bottom-content a{
    color: black;
  }
  a{
    text-decoration: none;
    color: gray;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>
