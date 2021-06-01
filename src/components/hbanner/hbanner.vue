<template>
  <div class="banner">
    <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 添加的图片 -->
           <swiper-slide class="swiper-item"
            v-for="(item,index) in bannerList" :key="index"
            >
            <router-link 
            :to="{path: `/product/detail?type=` + item.type}"
            >
                <p class="swiper-title"> {{item.title}}</p>
                <span class="swiper-type">{{item.type}}</span>
              <img class="swiper-slide" :src="item.url" width="490px" height="390px"/>
            </router-link>
            </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
        bannerList:[
            {title:"便携式标签打印机",url: require("../../assets/image/EXP342.png"),type:"EXP342"},
            {title:"便携式标签打印机",url: require("../../assets/image/JLP451.png"),type:"JLP451"},
            {title:"桌面标签打印机",url: require("../../assets/image/JMD451.png"),type:"JMD451"},
            {title:"便携式票据打印机",url: require("../../assets/image/VMP02.png"),type:"VMP02"},
            {title:"桌面标签打印机",url: require("../../assets/image/P1.png"),type:"P1"},
            {title:"便携式标签打印机",url: require("../../assets/image/JLP352.png"),type:"JLP352"}
        ],
      swiperOption: {
      //可见图片张数
        slidesPerView: 3,
       // 默认选中中间一张
        centeredSlides: true,
        // //无限循环
        loop: true,
        loopAdditionalSlides : 1,
        //小圆点（我此处没使用，列出供参考）
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        //自动轮播
        // autoplay: {
        //   stopOnLastSlide: true
        // },
        //上下按钮点击轮播效果
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
    .banner{
        width: 1280px;
        overflow: hidden;
        margin: 0 auto;
    }
    .banner /deep/ .swiper-slide{
      height: auto;
    }
    .swiper-slide{
      transform: scale(0.85);
      -ms-transform: scale(0.85);
    }
    .swiper-slide-active,.swiper-slide-duplicate-active {
        transform: scale(1.2);
        -ms-transform: scale(1.2);
    }
    .swiper-title{
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        line-height: 99px;
    }
    .banner /deep/ .swiper-button-prev{
        width: 40px;
        height: 83px;
        left: 385px;
        background-image: url('../../assets/image/prev.png');
    }
    .banner /deep/ .swiper-button-next{
        width: 40px;
        height: 83px;
        right: 385px;
        background-image: url('../../assets/image/next.png');
    }
    .swiper-type{
        position: absolute;
        bottom: 30px;
        right: 65px;
        z-index: 50;
        font-size: 20px;
    }
    .swiper-item{
      height: 100%!important;
    }
</style>