<template>
  <div class="bottom">
      <div class="bottom-box">
          <div class="bottom-top">
          <ul class="bottom-list">
              <li class="bottom-list-item">
                  <div class="product-title">产品中心</div>
                  <div class="product-item"
                  v-for = "(item,index) in productList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
              <li class="bottom-list-item">
                  <div class="product-title">解决方案</div>
                  <div class="product-item"
                  v-for = "(item,index) in solutionList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
              <li class="bottom-list-item">
                  <div class="product-title">服务支持</div>
                  <div class="product-item"
                  v-for = "(item,index) in serviceList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
              <li class="bottom-list-item">
                  <div class="product-title">新闻动态</div>
                  <div class="product-item"
                  v-for = "(item,index) in newsList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
              <li class="bottom-list-item">
                  <div class="product-title">关于我们</div>
                  <div class="product-item"
                  v-for = "(item,index) in aboutList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
              <li class="bottom-list-item">
                  <div class="product-title">联系我们</div>
                  <div class="product-item"
                  v-for = "(item,index) in contactList" :key="index">                  
                  <router-link  
                  :to="item.url"
                  >
                  {{item.title}}</router-link></div>
              </li>
          </ul>
      </div>
      <div class="bottom-bot">
          <div class="bottom-company">
              <div class="company-left">
                  <img src="../../assets/image/smalllogo.png" width="48px" height="48px">
              </div>
              <div class="company-right">
                  <p class="company-name">上海济强电子科技有限公司</p>
                  <p class="company-eng">SHANGHAI JQ ELECTRONICAL.LTD</p>
              </div>
          </div>
          <div class="bottom-copyright">
              <p class="copyright-text">2013-2020 上海济强电子科技有限公司 <i class="copyright-icon"></i>上海工商 版权所有www.jqsh.com 济强科技 沪ICP备14024616号-1</p>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
                productList:[
                    {title:'便携式票据打印机',url:'/product?type=PJ'},
                    {title:'便携式标签打印机',url:'/product?type=BQ'},
                    {title:'桌面标签打印机',url:'/product?type=TS'}
                ],
                solutionList:[
                    {title:'移动政务',url:'/solution/soldetail?type=move'},
                    {title:'快递物流',url:'/solution/soldetail?type=expressage'},
                    {title:'金融保险',url:'/solution/soldetail?type=financial'},
                    {title:'仓储管理',url:'/solution/soldetail?type=warehouse'},
                    {title:'零售商超',url:'/solution/soldetail?type=retail'}
                ],
                serviceList:[
                    {title:'常见FAQ',url:'/support/faq'},
                    {title:'售后服务',url:'/support/sales'},
                    {title:'保修承诺',url:'/support/warranty'},
                    {title:'在线报修',url:'/support/online'}
                ],
                newsList:[
                    {title:'公司新闻',url:'/news'},
                    {title:'行业动态',url:'/news?type=industry'}
                ],
                aboutList:[
                    {title:'公司简介',url:'/about/intro'},
                    {title:'发展历程',url:'/about/course'},
                    {title:'荣誉资质',url:'/about/aptitude'}
                ],
                contactList:[
                    {title:'联系我们',url:'/contact'},
                    {title:'客户留言',url:'/contact'}
                ],
        }
    }
}
</script>

<style lang="scss">
    a{
        color: #000;
    }
    .bottom{
        background:rgba(245,245,245,1);
        width: 100%;
        padding-top: 29px;
        position: relative;
        .bottom-box{
            width: 1280px;
            margin: 0 auto;
            .bottom-top{
                .bottom-list{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 13px;
                    .bottom-list-item{
                        .product-title{
                            font-size: 20px;
                            font-weight: bold;
                            color: #000;
                            margin-bottom: 20px;
                        }
                        .product-item{
                            font-size:18px;
                            color: #000;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
            .bottom-bot{
                text-align: center;
                padding-top: 26px;
                .bottom-company{
                    width:365px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: start;
                    padding-bottom: 19px;
                    .company-right{
                        margin-top: 4px;
                        margin-left: 20px;
                        .company-name{
                            font-size: 20px;
                            font-weight: bold;
                        }
                        .company-eng{
                            font-size: 14px;
                        }
                    }
                }
                .bottom-copyright{
                    padding-bottom: 14px;
                    .copyright-text{
                        font-size: 18px;
                        line-height: 30px;
                        .copyright-icon{
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../assets/image/hainangongan.png") no-repeat 3px 8px;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
    .bottom:after{
            content: "";
            display: block;
            position: absolute;
            bottom: 145px;
            left: 0;
            width: 100%;
            height: 1px;
            background: #000000;
        }
</style>