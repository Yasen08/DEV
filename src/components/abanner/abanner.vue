<template>
  <div class="banner-box">
      <div class="banner">
      <swiper :options="swiperOption"  ref="mySwiper">
          <!-- 添加的图片 -->
          <swiper-slide class="swiper-item"
          v-for="(item,index) in dataList" :key="index"
          >
            <img class="swiper-slide" :src="item.url" width="268px" height="186px"/>
            <p class="swiper-title"> {{item.title}}</p>
            <p class="swiper-txt"> {{item.txt}}</p>
          </swiper-slide>
      </swiper>
      </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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
        slidesPerView: 3,
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
    }
    .swiper-title{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .banner-box /deep/ .swiper-button-prev{
        width: 40px;
        height: 83px;
        left: -45px;
        background-image: url('../../assets/image/prev.png');
        top: 30%;
    }
    .banner-box /deep/ .swiper-button-next{
        width: 40px;
        height: 83px;
        right: -30px;
        background-image: url('../../assets/image/next.png');
        top: 30%;
    }
    .banner-box{
      position: relative;
    }
    .banner /deep/ .swiper-slide{
      height: auto;
    }
</style>