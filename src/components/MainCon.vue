<template>
  <div class="acontent">
    <div class="contentdiv">
      <div class="contentdiv-title">
        <p>澳洲房屋购买 – 合同细节详解</p>
        <div>
          <button class="btn-hlgtk">贷款指南</button>
          <router-link to="">2019-10-10</router-link>
        </div>
      </div>
<!--      <div class="contentdiv-content" v-html="i" v-for="i in msg">-->
      <div class="contentdiv-content" v-html="msg">
        {{msg}}
      </div>
      <div class="contentdiv-footer">
        <div>
          分享文章到：
          <img src="" alt="WeChat">
          <img src="" alt="WeiBo">
          <img src="" alt="Facebook">
          <img src="" alt="ins">
        </div>

        <div class="contentdiv-footer-relatedart">
          <span>相关文章</span>
          <ul>
            <li><router-link to="">澳洲留学贷款指南——澳洲留学需知</router-link></li>
            <li><router-link to="">澳洲房屋贷款小知识补充——为您更好的贷款体验作铺垫</router-link></li>
            <li><router-link to="">澳洲购置房产您还需要了解哪些？</router-link></li>
            <li><router-link to="">澳洲信用贷款体系及相关贷款事宜解析</router-link></li>
            <li><router-link to="">为什么在澳洲申请贷款会失败？原因竟然是…</router-link></li>
          </ul>
        </div>

        <div>
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
            <a class="btn-black" href="http://getau.com.au/free-quote">获取免费报价
            </a>
          </section>
        </div>

      </div>
    </div>
    <div class="advdiv">
      <img src="" alt="Booking.com缤客">
    </div>
  </div>
</template>

<script>
  // import { getInfo } from "../utils/api";
  // import info from './info.json';
  // import axios from "axios"
  export default {
    name: "Content",
    data(){
      return {
        msg: ''
      }
    },
    created() {
      //获取数据
      this.axios("/api/wp-json/getau/v1/posts/61102").then(res =>{
      // this.axios("https://getau.com.au/wp-json/getau/v1/posts/61102").then(res =>{ //这样是可以获取的正确接口数据
        this.msg = res.data.content;
        console.log(res.data);
        // this.msg = res.data.title;
        // this.msg = res.data.content;
        // this.msg = res.data.content;
      })
    }
  }
</script>

<style scoped>
  .acontent{
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: row;
  }
  .contentdiv{
    display: flex;
    flex-direction: column;
    /*justify-content: flex-start;*/
  }
  .contentdiv-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
  }
  .contentdiv-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .contentdiv-footer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .contentdiv-footer-relatedart{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  li{
    text-align: left;
  }
  li a{
    color: orange;
  }
  .advdiv{

  }
  a{
    text-decoration: none;
    color: gray;
  }
  .router-link-active{
    text-decoration: none;
  }
  .btn-hlgtk{
    color: gray;
    background-color: white;
    border-radius: 5px;
    border: 1px gray solid;
  }
</style>
