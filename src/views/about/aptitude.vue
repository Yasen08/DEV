<template>
  <div class="aptitude">
      <div class="certificate">
        <div class="certificate-title">荣誉证书</div>
        <div class="certificate-banner">
              <abanner :dataList="certificateList"></abanner>
        </div>
      </div>
      <div class="certification">
        <div class="certification-title">资质认证</div>
        <div class="certification-banner">
              <bbanner :dataList="certificationList"></bbanner>
        </div>
      </div>
  </div>
</template>

<script>

import Abanner from "@/components/abanner/abanner.vue"
import Bbanner from "@/components/abanner/bbanner.vue"

export default {
  components:{
    Abanner,
    Bbanner
  },
  data(){
    return{
      certificateList:[
        {url: require("../../assets/image/wuliuhuiyuan.jpg"),title:"会员单位",txt:"中国物流与采购联合会"},
        {url: require("../../assets/image/huiyuandanwei.jpg"),title:"会员单位",txt:"中国通信工业协会物联网应用分会"},
        {url: require("../../assets/image/jishuzhuangbei.jpg"),title:"优秀技术装备大奖",txt:"中国通电子商务物流"},
        {url: require("../../assets/image/lianxianghezuo.jpg"),title:"合作伙伴",txt:"联想中国区移动互联"},
        {url: require("../../assets/image/annengyouxiu.jpg"),title:"优秀供应商",txt:"安能优秀供应商"}
      ],
      certificationList:[
        {url: require("../../assets/image/RYJQ1.jpg"),title:"JQ商标"},
        {url: require("../../assets/image/RYJQ2.jpg"),title:"济强商标"},
        {url: require("../../assets/image/RYJQ3.jpg"),title:"ISO9001质量管理体系认证证书"},
        {url: require("../../assets/image/RYJQ4.jpg"),title:"ISO9001质量管理体系认证证书"},
        {url: require("../../assets/image/RYJQ5.jpg"),title:"济强ULT系列便携式打印机软件V1.0"},
        {url: require("../../assets/image/RYJQ6.jpg"),title:"济强VMP系列打印控制平台软件V1.0"},
        {url: require("../../assets/image/RYJQ7.jpg"),title:"济强JLP系列打印控制平台软件V1.0"},
        {url: require("../../assets/image/RYJQ8.jpg"),title:"实用新型专利权证书-便携式标签打印机"},
        {url: require("../../assets/image/RYJQ9.jpg"),title:"标签打印机外观-专利权证书"},
        {url: require("../../assets/image/RYJQ10.jpg"),title:"低电压驱动的热敏标签打印机-专利"},
        {url: require("../../assets/image/RYJQ11.jpg"),title:"对外贸易经营者备案登记"}
      ],
    }
  }
}
</script>

<style lang="scss">
    .aptitude{
      .certificate{
        padding-top: 20px;
        margin-bottom: 50px;
        .certificate-title{
          font-size: 24px;
          margin-bottom: 24px;
        }
      }
      .certification{
        .certification-title{
          font-size: 24px;
          margin-bottom: 50px;
        }
      }
    }
</style>