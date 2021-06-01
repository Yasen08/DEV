import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'
import Product from '../views/product/product.vue'
import Contact from '../views/contact/contact.vue'
import Solution from '../views/solution/solution.vue'
import Soldetail from '../views/solution/soldetail.vue'
import Support from '../views/support/support.vue'
import About from '../views/about/about.vue'
import Intro from '../views/about/intro.vue'
import Course from '../views/about/course.vue'
import Aptitude from '../views/about/aptitude.vue'
import Prodetail from '../views/product/prodetail.vue'
import News from '../views/news/news.vue'
import Newdetail from '../views/news/newdetail.vue'
import Faq from '../views/support/faq.vue'
import Sales from '../views/support/sales.vue'
import Warranty from '../views/support/warranty.vue'
import Online from '../views/support/online.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'navigation',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: Index,
      },
      {
        path: 'product',
        name: '产品中心',
        component: Product,
      },
      {
        path: 'product/detail',
        name: '产品详情',
        component:Prodetail,
      },
      {
        path: 'solution',
        name: '解决方案',
        component: Solution,
      },
      {
        path: 'solution/soldetail',
        name: '解决方案详情',
        component: Soldetail,
      },
      {
        path: 'support',
        name: '服务支持',
        component: Support,
        redirect: 'support/faq',
        children:[
          {
            path: 'faq',
            name: '常见FAQ',
            component:Faq,
          },
          {
            path: 'sales',
            name: '售后服务',
            component:Sales,
          },
          {
            path: 'warranty',
            name: '保修承诺',
            component:Warranty,
          },
          {
            path: 'online',
            name: '在线保修',
            component:Online,
          },
        ]
      },
      {
        path: 'news',
        name: '新闻动态',
        component:News
      },
      {
        path: 'news/detail',
        name: '新闻动态详情',
        component:Newdetail
      },
      {
        path: 'about',
        name: '关于我们',
        component:About,
        redirect: 'about/intro',
        children:[
          {
            path: 'intro',
            name: '公司简介',
            component:Intro,
          },
          {
            path: 'course',
            name: '发展历程',
            component:Course,
          },
          {
            path: 'aptitude',
            name: '荣誉资质',
            component:Aptitude,
          },
        ]
      },
      {
        path: 'contact',
        name: '联系我们',
        component:Contact
      },
    ]
  }, 
  {
    path: '/page',
    name: '重定向',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/page/56/',
        name: '重定',
        component: Index,
        redirect: '/index',
      },
      {
        path: '/page/:id/',
        name: '重',
        component: Index,
        redirect: '/index',
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
