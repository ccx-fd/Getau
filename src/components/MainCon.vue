<template>
  <main-con>
    <div class="leftdiv">
      <div class="leftdiv-top">
        <ul>
          <li>澳洲房屋购买 – 合同细节详解</li>
          <li>
            <button>贷款指南</button>
            <router-link to="">2019-10-10</router-link>
          </li>
        </ul>
      </div>
      <div v-html="msg">{{msg}}</div>
      <div class="leftdiv-bottom">
        <div class="leftdiv-bottom-top">
          <p>分享文章到：</p>
        </div>
        <div class="leftdiv-bottom-center">
          <p>相关文章</p>
          <ul>
            <li><router-link to="">澳洲留学贷款指南——澳洲留学需知</router-link></li>
            <li><router-link to="">澳洲房屋贷款小知识补充——为您更好的贷款体验作铺垫</router-link></li>
            <li><router-link to="">澳洲购置房产您还需要了解哪些？</router-link></li>
            <li><router-link to="">澳洲信用贷款体系及相关贷款事宜解析</router-link></li>
            <li><router-link to="">为什么在澳洲申请贷款会失败？原因竟然是…</router-link></li>
          </ul>
        </div>
        <div class="leftdiv-bottom-bottom">
          <section id="free-quote-cta" style="background-image: url('http://getau.com.au/wp-content/themes/getau/img/oval.svg');">
            <h2>
              <img class=" lazyloaded" src="http://getau.com.au/wp-content/themes/getau/img/free-quote-icon.svg" alt="u514du8d39u62a5u4ef7" data-src="http://getau.com.au/wp-content/themes/getau/img/free-quote-icon.svg" />
              <noscript>
                <img src="http://getau.com.au/wp-content/themes/getau/img/free-quote-icon.svg" alt="u514du8d39u62a5u4ef7">
              </noscript>填写您的需求，最适合您的商家将为您免费报价。
            </h2>
            <select>
              <option value ="">选择服务类型</option>
            </select>
            <input value="输入邮编">
            <a class="btn btn-black" href="http://getau.com.au/free-quote">获取免费报价
            </a>
          </section>
        </div>
      </div>
    </div>
    <div class="rightdiv">
      图标
    </div>
  </main-con>
</template>

<script>
  // import { getInfo } from "../utils/api";
  import info from './info.json';
  export default {
    name: "Content",
    data(){
      return {
        msg:info.data.content
      }
    },
    created:()=>{
      //获取数据
      // getInfo().then(res=>{
      //   console.log(res)
      // })
    }
  }
</script>

<style scoped>
  .leftdiv {
    width: 80%;
    float: left;
  }
  .rightdiv {
    background-color: yellow;
    width: 20%;
    bottom: 0;
    float: right;
  }
  .router-link-active{
    text-decoration: none;
    color: #cccccc;
  }
  .leftdiv-top{
    height: 100px;
  }
  .leftdiv-top ul{
    float: left;
    list-style-type: none;
  }
  .leftdiv-bottom{
    height: 300px;
  }
  .leftdiv-bottom-top{
    height: 10%;
  }
  .leftdiv-bottom-center{
    height: 50%;
  }
  .leftdiv-bottom-bottom{
    height: 40%;
  }
  .leftdiv-bottom-top p{
    text-align: left;
  }
  .leftdiv-bottom-center p{
    text-align: left;
  }
  .leftdiv-bottom-center ul{
    float: left;
    text-align: left;
  }
</style>
