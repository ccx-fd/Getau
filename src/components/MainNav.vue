<template>
  <main-nav align="center">
    <table >
      <tr>
        <td>
          <ul style="float: right; list-style-type: none;">
            <li>
              <router-link to="">登录</router-link>&nbsp;&nbsp;
              <router-link to="" >用户注册</router-link>&nbsp;&nbsp;
              <button class="btn-register" @click="register">商家免费注册</button>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <ul style="float: left; list-style-type: none;">
            <li >
              知澳图标
              <input value="搜索你想了解的澳洲" type="text">
              <button class ="btn-search">
                搜索
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;全部分类&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="">折扣信息</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="">发现</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          </ul>
        </td>
      </tr>
    </table>
    <hr/>
  </main-nav>
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
    background-color: orange;
  }
  input{
    border: 2px solid #cccccc;
  }
</style>
