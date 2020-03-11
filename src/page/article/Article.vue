<template>
  <div class="article">
    <div class="mainnavigation">
      <main-nav></main-nav>
    </div>
    <div class="mainlink">
      <router-link to="">首页</router-link>
      >
      澳洲房屋购买 – 合同细节详解
    </div>
    <div class="maincontent">
      <main-con></main-con>
    </div>
    <div class="mainfooter">
      <main-foo></main-foo>
    </div>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav.vue'
  import MainFoo from '../../components/MainFoo.vue'
  import MainCon from '../../components/MainCon.vue'
  export default {
    name: "Article",
    components: {MainCon, MainNav, MainFoo }
  }
</script>

<style scoped>
  .article{
    color: gray;
    /*margin: auto;*/
  }
  a{
    color: gray;
  }
  .router-link-active{
    text-decoration: none;
  }
  .mainnavigation{
    border-bottom: 1px solid gray;
  }
  .mainlink{
    display: flex;
    justify-content: left;
    width: 60%;
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .maincontent{
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .mainfooter{

  }
</style>
