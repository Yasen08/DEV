import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueAMap);
Vue.use(ElementUI);
VueAMap.initAMapApiLoader({
  key: 'ca86c13b8b183274c44d85b82236ae75',
  plugin: ['AMap.CircleEditor'],
  v: '1.4.4'
});
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
