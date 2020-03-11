import Vue from 'vue'
import Router from 'vue-router'
import Article from '../page/article/Article'
import HelloWorld from "../components/HelloWorld";
import MainCon from "../components/MainCon";
import TestDemo from "../page/article/TestDemo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/helloworld",
      component: HelloWorld
    },
    {
      path: '/',
      component: Article
    },
    {
      path: "/maincon",
      component: MainCon
    },
    {
      path: '/testdemo',
      component: TestDemo
    }
  ]
})
