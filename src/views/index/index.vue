<template>
  <div class="index">
      <!-- 首屏大图 -->
      <div class="banner-box">
          <!-- 大图待定 悬浮窗待做 -->
          <div class="banner-float">
          </div>
      </div>
      <!-- icon小图标列表 -->
      <div class="icon">
          <ul class="icon-list">
              <li class="icon-item"
              v-for="(item,index) in iconList" :key="index"
              @mouseover="mouseOver(index)"
              @mouseleave="mouseLeave(index)"
              >
              <router-link
              :to="item.url">
              <div class="icon-image">
                 <img :src="item.path">
              </div>
              <p class="icon-title">{{item.title}}</p>
              </router-link>
              </li>
          </ul>
      </div>
      <!-- 轮播 -->
      <div class="carousel">
            <hbanner></hbanner>
      </div>
      <!-- 应用案例 -->
      <div class="application">
          <p class="application-title">应用案例</p>
          <div class="application-list clearfix">
              <router-link to="/solution/soldetail?type=financial">
                <div class="application-item">
                  <p class="item-first">保险快速理赔</p>
                </div>
              </router-link>
              <router-link to="/solution/soldetail?type=move">
              <div class="application-image">
                  <img src="@/assets/image/jiaojingbig.png" alt="" class="application-img">
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=warehouse">
              <div class="application-item">
                  <p class="item-first">仓储管理应用</p>
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=expressage">
              <div class="application-image">
                  <img src="@/assets/image/wuliubig.png" alt="" class="application-img">
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=financial">
              <div class="application-image">
                  <img src="@/assets/image/baoxianbig.png" alt="" class="application-img">
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=move">
              <div class="application-item1">
                  <p class="item-first">交通移动执法</p>
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=warehouse">
              <div class="application-image">
                  <img src="@/assets/image/cangchubig.png" alt="" class="application-img">
              </div>
              </router-link>
              <router-link to="/solution/soldetail?type=expressage">
              <div class="application-item1">
                  <p class="item-first">快递物流应用</p>
              </div>
              </router-link>
          </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="partner">
          <p class="partner-title">合作伙伴</p>
          <ul class="partner-list">
              <li class="partner-item"
              v-for="(item,index) in partnerList" :key="index"
              >
                  <img :src="item.url" alt="" class="partner-img">
              </li>
          </ul>
      </div>
      <!-- 联系我们 -->
      <div class="contact">
          <div class="contact-box">
              <div class="contact-left">
              <p class="contact-title">联系我们</p>
              <p class="contact-address">上海市浦东新区新金桥路1299号1号楼601室</p>
              <p class="message">电话：021-61645760</p>
              <p class="message">邮箱：sales@jqtek.com</p>
              <p class="message">时间：周一至周五  09:00-18:00</p>
          </div>
          <div class="contact-right">
              <subfrom></subfrom>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import Subfrom from "../../components/subfrom/subfrom.vue"
import Hbanner from "../../components/hbanner/hbanner.vue"

export default {
    components:{
        Subfrom,
        Hbanner
    },
    data(){
        return{
            carouselList:[
                {url: require("../../assets/image/342.png")},
                {url: require("../../assets/image/352.png")},
                {url: require("../../assets/image/451.png")}
            ],
            iconList:[
                { title: "移动政务", path: require("@/assets/image/zhengwu.png"),url:"/solution/soldetail?type=move"},
                { title: "快递物流", path: require("@/assets/image/wuliu.png"),url:"/solution/soldetail?type=expressage"},
                { title: "金融保险", path: require("@/assets/image/baoxian.png"),url:"/solution/soldetail?type=financial"},
                { title: "水电抄表", path: require("@/assets/image/zu.png"),url:"/solution/soldetail?type=water"},
                { title: "资产盘点", path: require("@/assets/image/zichanpandian.png"),url:"/solution/soldetail?type=property"},
                { title: "仓库", path: require("@/assets/image/cangku.png"),url:"/solution/soldetail?type=warehouse"},
                { title: "零售超市", path: require("@/assets/image/chaoshi.png"),url:"/solution/soldetail?type=retail"},
                { title: "mpos", path: require("@/assets/image/shuaqia.png"),url:"/solution/soldetail?type=mpos"}
            ],
            iconbList:[
                { title: "移动政务", path: require("@/assets/image/zhengwu.png")},
                { title: "快递物流", path: require("@/assets/image/wuliu.png")},
                { title: "金融保险", path: require("@/assets/image/baoxian.png")},
                { title: "水电抄表", path: require("@/assets/image/zu.png")},
                { title: "资产盘点", path: require("@/assets/image/zichanpandian.png")},
                { title: "仓库", path: require("@/assets/image/cangku.png")},
                { title: "零售超市", path: require("@/assets/image/chaoshi.png")},
                { title: "mops", path: require("@/assets/image/shuaqia.png")}
            ],
            iconwList:[
                { title: "移动政务", path: require("@/assets/image/zhengwuw.png")},
                { title: "快递物流", path: require("@/assets/image/wuliuw.png")},
                { title: "金融保险", path: require("@/assets/image/baoxianw.png")},
                { title: "水电抄表", path: require("@/assets/image/zuw.png")},
                { title: "资产盘点", path: require("@/assets/image/zichanpandianw.png")},
                { title: "仓库", path: require("@/assets/image/cangkuw.png")},
                { title: "零售超市", path: require("@/assets/image/chaoshiw.png")},
                { title: "mops", path: require("@/assets/image/shuaqiaw.png")}
            ],
            partnerList:[
                {url: require("../../assets/image/dianwang.png")},
                {url: require("../../assets/image/nongye.png")},
                {url: require("../../assets/image/weisheng.png")},
                {url: require("../../assets/image/yinlian.png")},
                {url: require("../../assets/image/zhongguo.png")},
                {url: require("../../assets/image/youzheng.png")},
                {url: require("../../assets/image/geli.png")},
                {url: require("../../assets/image/yidong.png")},
                {url: require("../../assets/image/dianxin.png")},
                {url: require("../../assets/image/liantong.png")},
                {url: require("../../assets/image/jiaotong.png")},
                {url: require("../../assets/image/xinda.png")},
                {url: require("../../assets/image/dongfang.png")},
                {url: require("../../assets/image/dongji.png")},
                {url: require("../../assets/image/shanghai.png")},
                {url: require("../../assets/image/hainan.png")},
                {url: require("../../assets/image/chongqing.png")},
                {url: require("../../assets/image/guangzhou.png")},
                {url: require("../../assets/image/changjiang.png")},
                {url: require("../../assets/image/7fresh.png")},
                {url: require("../../assets/image/shuanghui.png")},
                {url: require("../../assets/image/huawei.png")},
                {url: require("../../assets/image/vivo.png")},
                {url: require("../../assets/image/lenovo.png")},
                {url: require("../../assets/image/dadi.png")},
                {url: require("../../assets/image/meibang.png")},
                {url: require("../../assets/image/haiwang.png")},
                {url: require("../../assets/image/kele.png")},
            ],
                }
    },
    methods:{
    // icon小图标列表（解决方案）鼠标经过事件
    mouseOver(index){
        // console.log(this.iconList[0].path)
        this.iconList[index].path = this.iconwList[index].path
    },
    mouseLeave(index){
        this.iconList[index].path = this.iconbList[index].path
    }
    }
}
</script>

<style lang="scss" scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .banner-box{
        width: 100%;
        height:660px;
        background: url('../../assets/image/banner.png') no-repeat center;
        position: relative;
        .banner-float{
            position: absolute;
        }
    }
    .icon{
        margin-bottom: 60px;
        width: 100%;
        height: 300px;
        .icon-list{
            width: 1280px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            margin: 0 auto;
            padding-top: 75px;
            .icon-item{
                width: 160px;
                height: 170px;
                color: #808080;
                font-size: 20px;
                text-align: center;
                padding-top: 40px;
                .icon-image{
                    width: 65px;
                    height: 65px;
                    margin: 0 auto;
                }
                p{
                    color: #808080;
                    margin-top: 32px;
                }
            }
            .icon-item:hover{
                    background:#7F7F7F;
                    border-radius:30px;
                    color: #FFFFFF;
                }
            .icon-item:hover .icon-title{
                    color: #FFFFFF;
                }
        }
    }
    .medium{
        text-align: center;
        p{
            font-size: 30px;
            font-weight: bold;
        }
        .carousel-img{
            width: 540px;
            height: 428px;
        }
    }
    .application{
        padding-top: 117px;
        width: 100%;
        background: #F5F5F5;
        .application-title{
            font-size: 30px;
            color: #000000;
            position: relative;
            text-align: center;
            margin-bottom: 100px;
        }
        .application-title::after{
                content: "";
                display: block;
                position: absolute;
                bottom: -10px;
                left: 50%;
                margin-left: -50px;
                width: 100px;
                height: 3px;
                background: #000000;
        }
        .application-list{
            font-size: 0;
            width: 1280px;
            margin: 0 auto;
            .application-item{
                position: relative;
                width: 320px;
                height: 292px;
                background: #FFFFFF;
                text-align: center;
                float: left;
                z-index: 1;
                .item-first{
                    font-size: 24px;
                    line-height: 292px;
                    color: #000000;
                    font-weight:bold;
                }
                .item-two{
                    font-size: 24px;
                    line-height: 70px;
                    color: #808080;
                }
            }
            .application-item1{
                position: relative;
                width: 320px;
                height: 292px;
                background: #FFFFFF;
                text-align: center;
                float: left;
                margin: 0;
                .item-first{
                    font-size: 24px;
                    line-height: 292px;
                    color: #000000;
                    font-weight:bold;
                }
                .item-two{
                    font-size: 24px;
                    line-height: 70px;
                    color: #808080;
                }
            }
            .application-image{
                width: 320px;
                height: 292px;
                float: left;
                overflow: hidden;
                .application-img{
                    transition: all 0.6s;
                }
                .application-img:hover{
                    transform: scale(1.2);
            }
            }
        }
    }
    .application-item::after{
        content: "";
        display: block;
        position: absolute;
        bottom: -50px;
        left: 50%;
        margin-left: -25px;
        border:25px solid;
        border-color: #ffffff transparent transparent;
    }
    .application-item1::after{
        content: "";
        display: block;
        position: absolute;
        top:-50px;
        left: 50%;
        margin-left: -25px;
        border:25px solid;
        border-color:transparent transparent #ffffff;
    }
    .clearfix::after{
        content: "." ;
        display: block ;
        height: 0 ;
        clear: both ;
        visibility: hidden ;
    }
    .partner{
        padding-top: 119px;
        width: 100%;
        background: #F5F5F5;
        .partner-title{
            font-size: 30px;
            color: #000000;
            position: relative;
            text-align: center;
            margin-bottom: 68px;
        }
        .partner-title::after{
                content: "";
                display: block;
                position: absolute;
                bottom: -10px;
                left: 50%;
                margin-left: -50px;
                width: 100px;
                height: 3px;
                background: #000000;
        }
        .partner-list{
            width: 1280px;
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            margin: 0 auto;
            padding-bottom: 66px;
            .partner-item{
                width: 178px;
                height: 70px;
                margin: 0 4px 19px 0;
                .partner-img{
                    width: 178px;
                    height: 70px;
                }
                .partner-img:hover{
                    transform: scale(1.2);
                }
            }
        }
    }
    .contact{
        width: 100%;
        padding-top: 95px;
        .contact-box{
            width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: start;
            .contact-left{
                margin-right:290px;
                .contact-title{
                    font-size: 24px;
                    color: #000000;
                    font-weight: bold;
                    position: relative;
                    margin-bottom: 20px;
                    margin-left: 5px;
                }
                .contact-title::after{
                content: "";
                display: block;
                position: absolute;
                top: -11px;
                left: 0;
                width: 60px;
                height: 3px;
                background: #000000;
                }
                .contact-address{
                    font-size: 20px;
                    margin-bottom: 40px;
                }
                .message{
                    font-size: 20px;
                    margin-bottom: 20px;
                }
            }
            .contact-righr{
                font-size: 20px;
            }
        }
    }
    .carousel{
        width: 1280px;
        padding-bottom: 100px;
        margin: 0 auto;
    }
</style>