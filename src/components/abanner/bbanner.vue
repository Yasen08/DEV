<template>
<div class="banner-box">
  <div class="banner">
    <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 添加的图片 -->
        <swiper-slide class="swiper-item"
        v-for="(item,index) in dataList" :key="index"
        >
          <img class="swiper-slide" :src="item.url" width="179px" height="239px"/>
          <p class="swiper-title"> {{item.title}}</p>
          <p class="swiper-txt"> {{item.txt}}</p>
        </swiper-slide>
    </swiper>
    </div>
    <div class="swiper-button-pre" slot="button-prev"></div>
    <div class="swiper-button-nex" slot="button-next"></div>
    </div>
</template>

<script>
export default {
  props:{
    dataList:{
      type:Array
    }
  },
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
      //可见图片张数
        slidesPerView: 4,
       // 默认选中中间一张
        // centeredSlides: true,
        // //无限循环
        loop: true,
        //小圆点（我此处没使用，列出供参考）
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        //自动轮播
        // autoplay: {
        //   stopOnLastSlide: true
        // },
        //上下按钮点击轮播效果
    nextButton: '.swiper-button-nex',
    prevButton: '.swiper-button-pre',
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
    .swiper-txt{
      font-size: 20px;
      text-align: center;
      width: 192px;
      margin: 0 auto;
    }
    .banner{
        width: 940px;
        overflow: hidden;
    }
    .banner /deep/ .swiper-wrapper{
      width: 900px!important;
      margin: 0 auto;
    }
    .swiper-title{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .banner-box /deep/ .swiper-button-pre{
        position: absolute;
        width: 40px;
        height: 83px;
        left: -45px;
        background-image: url('../../assets/image/prev.png');
        background-repeat:no-repeat;
        background-size:24px 43px;
        top: 40%;
        margin-top: -42px;
    }
    .banner-box /deep/ .swiper-button-nex{
        position: absolute;
        width: 40px;
        height: 83px;
        right: -30px;
        background-image: url('../../assets/image/next.png');
        background-repeat:no-repeat;
        background-size:24px 43px;
        top: 40%;
        margin-top: -35px;
    }
    .swiper-slide{
        width: 179px;
    }
    .banner-box{
        position: relative;
    }
    .swiper-title{
        width: 179px;
        font-size: 20px;
    }
    .banner /deep/ .swiper-slide{
      height: auto;
    }
</style>