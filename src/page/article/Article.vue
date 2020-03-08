<template>
  <div class="article">
    <div>
      <main-nav></main-nav>
      <div>
        <ul>
          <li>
            <router-link to="">首页</router-link>
            >
            澳洲房屋购买 – 合同细节详解
          </li>
        </ul>
        <ul>
          <hr>
        </ul>

      </div>
    </div>

    <main-con></main-con>
    <main-foo></main-foo>

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
  .article div ul{
    width: 60%;
    float: left;
    list-style-type: none;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>
