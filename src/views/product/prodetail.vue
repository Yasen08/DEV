<template>
<div class="prodetail-prodetail">
<position :positionList="positionList"></position>
   <div class="prodetail">
       <div class="prodetail-left">
            <div class="navleft">
                        <div class="navleft-box">
                            <div class="navleft-item">
                                <router-link :to="navleftList.homeUrl">
                                <div class="item-first">
                                    <div class="first-img">
                                    <img :src="navleftList.iconurl" width="34px" height="34px">
                                    </div>
                                    <p>{{navleftList.title}}</p>
                                </div>
                                </router-link>
                                <router-link 
                                v-for="(item,index) in navleftList.list" :key="index"
                                :to="{path: `${item.path}` + item.id}"
                                class="item-other"
                                >
                                <p>{{item.txt}}</p>
                                </router-link>
                            </div>
                        </div>
            </div>
       </div>
       <div class="prodetail-box">
           <!-- 详情页上部分 轮播+简介 -->
           <div class="prodetail-up">
               <div class="carousel">
                    <div class="block">
                        <el-carousel height="274px">
                        <el-carousel-item v-for="(item,index) in aaList.carouselList" :key="index">
                            <h3 class="small"><img :src="item.url" width="307px" height="244px"></h3>
                        </el-carousel-item>
                        </el-carousel>
                    </div>
               </div>
               <div class="prodetail-title">
                   <p class="prodetail-name">{{aaList.title}}</p>
                   <p class="prodetail-antistop" 
                    v-for="(item,index) in aaList.antistop" :key="index"
                   >
                   {{item}}
                   </p>
               </div>
           </div>
           <!-- 详情页中部分 详细介绍 -->
           <div class="prodetail-centre">
               <p class="prodetail-text">{{aaList.text}}</p>
           </div>
           <!-- 详情页下部分 Tab切换 -->
           <div class="prodetail-below">
               <div class="tab-header">
                   <ul class="tab-box">
                       <li class="header-item" @mouseover="change(0)" :class="[current === 0 ? 'activ': '']">产品参数</li>
                       <li class="header-item" @mouseover="change(1)" :class="[current === 1 ? 'activ': '']">相关配件</li>
                       <li class="header-item" @mouseover="change(2)" :class="[current === 2 ? 'activ': '']">技术支持</li>
                       <li class="header-item" @mouseover="change(3)" :class="[current === 3 ? 'activ': '']" v-show="aaList.certification != ''">产品认证</li>
                   </ul>
               </div>
                <div class="content-box">
                        <!-- 产品参数 -->
                       <div class="parameter" v-show="current === 0">
                           <img :src="aaList.parameter" width="934px">
                           <p class="parameter-txt">*以上参数仅供选型参考</p>
                       </div>
                       <!-- 相关配件 -->
                       <div class="parts" v-show="current === 1">
                           <ul class="parts-box">
                               <li class="parts-item"
                               v-for="(item,index) in aaList.Accessories" :key="index"
                               >
                                   <div class="parts-img">
                                       <img :src="item.url" alt="" width="169px" height="154px">
                                   </div>
                                   <p class="parts-txt">{{item.title}}</p>
                                   <p class="parts-txt">{{item.txt}}</p>
                               </li>
                           </ul>
                       </div>
                       <!-- 技术支持 -->
                       <div class="skill" v-show="current === 2">
                           <div class="skill-box">
                               <div class="skill-item" v-show="aaList.firstDowlond != ''">
                                   <div class="skill-image"></div>
                                   <div class="skill-content">
                                       <p class="content-title">
                                           开发手册
                                       </p>
                                       <p class="content-text">
                                           本手册描述了如何通过手持终端驱动{{aaList.type}}便携式票据打印，建议移动系统集成商、软件开发人员、产品工程师下载
                                       </p>
                                   </div>
                                   <div class="skill-but"><router-link :to="aaList.firstDowlond" class="skill-but-txt" target="_blank">点击下载</router-link></div>
                               </div>
                               <div class="skill-item" v-show="aaList.twoDowlond != ''">
                                   <div class="skill-imageZIP"></div>
                                   <div class="skill-content">
                                       <p class="content-title">
                                           驱动安装
                                       </p>
                                       <p class="content-text">
                                           {{aaList.type}}打印机驱动{{aaList.youzheng}}
                                       </p>
                                   </div>
                                   <div class="skill-but"><router-link :to="aaList.twoDowlond" class="skill-but-txt" target="_blank">点击下载</router-link></div>
                               </div>
                           </div>
                       </div>
                       <!-- 产品认证 -->
                       <div class="approve" v-show="current === 3">
                           <ul class="approve-box">
                               <li class="approve-item"
                               v-for="(item,index) in aaList.certification"
                               :key="index"
                               >
                                   <div class="approve-img">
                                       <img :src="item.url" alt="" width="216px" height="302px">
                                   </div>
                                   <div class="approve-title">
                                       {{item.title}}
                                   </div>
                               </li>
                           </ul>
                       </div>
                </div>
           </div>
       </div>
   </div>
   </div>
</template>

<script>

import Navleft from "../../components/navleft/navleft.vue"
import Position from "../../components/position/position.vue"

export default {
    components:{
        Navleft,
        Position
    },
    data(){
        return{
            positionList:[
                {title:'产品中心',url:'/product'}
            ],
            navleftList:{
                homeUrl:'/product',
                iconurl:require("@/assets/image/chanpin-3.png"),
                title:"产品中心",
                list:[
                    {txt:"便携式票据打印机",path:"/product?type=",id:"PJ"},
                    {txt:"便携式标签打印机",path:"/product?type=",id:"BQ"},
                    {txt:"桌面标签打印机",path:"/product?type=",id:"TS"}
                ],
                },
            aaList:{},
            current:0,
            detailList:{
                "JLP451":{
                title:"便携式标签打印机_VJLP451",
                antistop:[
                    "蓝牙通讯" ,
                    "超长待机",
                    "智能省电",
                    "工业级别 "
                ],
                text:"超长电池续航：7.4V/2600mAh大容量锂电池及自动休眠智能省电技术，工作时间更长久多种通讯方式：支持蓝牙，全面支持各种智能手机、PDA及专用终端进行打印支持标签和票据打印机：支持不干胶标签/条码打印，也支持各种票据打印机支持二维条码打印：完美支持各类一维、二维条码打印，也支持各种符号、图形、曲线打印 工业级设计：防水防尘等级达到IP54，即使遭遇大雨仍能在户外正常工作，抗摔能力可靠。",
                parameter:require("../../assets/image/PJLP451.png"),
                Accessories:[
                    {url:require("../../assets/image/J01.png"),title:"充电器-ZA01",txt:"（标准配件）"},
                    {url:require("../../assets/image/J02.png"),title:"可充电电池-JL42400",txt:"（标准配件）"},
                    {url:require("../../assets/image/J03.png"),title:"热敏标签纸-LP7640",txt:"（选购件）"}
                ],
                type:"JLP451",
                download:"",
                certification:[
                        {url:require("../../assets/image/ZJLP4511.png"),title:"JLP451 CCC认证"},
                        {url:require("../../assets/image/ZJLP4512.png"),title:"济强JLP系列软件认证"},
                        {url:require("../../assets/image/ZJLP4513.png"),title:"JLP451 软件著作权"},
                        {url:require("../../assets/image/ZJLP4514.png"),title:"JLP451 外观专利证书"},
                        {url:require("../../assets/image/ZJLP4515.png"),title:"JLP451 硬件检测报告"},
                    ],
                carouselList:[
                    {url: require("../../assets/image/BJLP4511.png")},
                    {url: require("../../assets/image/BJLP4512.png")},
                    {url: require("../../assets/image/BJLP4513.png")}
                ],
                firstDowlond:'/down/开发手册之JLP指令手册V1.1.pdf',
                twoDowlond:''
                },
                "VMP02":{
                title:"便携式票据打印机_VMP02",
                antistop:[
                    "体积超小,便于携带" ,
                    "低功耗设计、待机休眠",
                    "蓝牙/红外/串口可选",
                    "大容量GBK字库 ",
                    "支持android、ios、Win CE系统"
                ],
                text:"VMP02便携式票据打印机是VMP01系列微型打印机的升级版，除了具有VMP01系列微型打印机同样出色的性能外，在打印质量以及使用方便性上有了提升，该票据打印机采用3 2位ARM CPU作为中央处理器及先进的富士通打印机芯，大大提高了打印速度。为了避免各种票据打印中频繁出现的生僻字(特别是人名),采用了包含2万多汉字的大容量GBK字库。 ",
                parameter:require("../../assets/image/PVMP02.png"),
                Accessories:[
                    {url:require("../../assets/image/P021.png"),title:"充电器-ZA02",txt:"（标准配件）"},
                    {url:require("../../assets/image/P022.png"),title:"可充电电池-ZBL1450",txt:"（标准配件）"},
                    {url:require("../../assets/image/P023.png"),title:"皮套",txt:"（选购件）"},
                    {url:require("../../assets/image/P024.png"),title:"热敏标签纸-TP230",txt:"（选购件）"},
                    {url:require("../../assets/image/P025.png"),title:"数据线-VMC",txt:"（选购件）"}
                ],
                type:"VMP02",
                download:"",
                certification:[
                    {url:require("../../assets/image/VMP021.png"),title:"VMP02 CCC认证"},
                    {url:require("../../assets/image/VMP022.png"),title:"VMP02 软件著作权"},
                    {url:require("../../assets/image/VMP023.png"),title:"VMP02 硬件测试报告"}
                ],
                carouselList:[
                {url: require("../../assets/image/BVMP021.png")},
                {url: require("../../assets/image/BVMP022.png")}
            ],
                firstDowlond:'/down/开发手册之JLP指令手册V1.1.pdf',
                twoDowlond:''
            },
                "JLP352":{
                title:"便携式标签打印机_JLP352",
                antistop:[
                    "强劲芯动力" ,
                    "定位精确拒绝卡纸",
                    "智能省电超长待机",
                    "工业级别IP54 "
                ],
                text:"超长电池续航：7.4V/2400mAh大容量锂电池及自动休眠智能省电技术，工作时间更长久多种通讯方式：支持蓝牙/WIFE通讯方式，支持各种智能手机、PDA及专用终端进行打印支持标签和票据打印机：支持不干胶标签/条码打印，也支持各种票据打印机支持二维条码打印：完美支持各类一维、二维条码打印，也支持各种符号、图形、曲线打印 工业级设计：防水防尘等级达到IP54，即使遭遇大雨仍能在户外正常工作，抗摔能力可达2.0m（水泥地面）",
                parameter:require("../../assets/image/PJLP352.png"),
                Accessories:[
                    {url:require("../../assets/image/J01.png"),title:"充电器-ZA01",txt:"（标准配件）"},
                    {url:require("../../assets/image/JL2400.png"),title:"可充电电池-JL2400",txt:"（标准配件）"},
                    {url:require("../../assets/image/J03.png"),title:"热敏标签纸 — LP7640",txt:"（选购件）"}
                ],
                type:"JLP352",
                download:"",
                certification:[
                    {url:require("../../assets/image/ZJLP3521.png"),title:"JLP352 CCC认证"},
                    {url:require("../../assets/image/ZJLP3522.png"),title:"济强JLP系列软件认证"},
                    {url:require("../../assets/image/ZJLP3523.png"),title:"JLP352 硬件检测报告"}
                ],
                carouselList:[
                {url: require("../../assets/image/BJLP3521.png")},
                {url: require("../../assets/image/BJLP3522.png")},
                {url: require("../../assets/image/BJLP3523.png")},
                {url: require("../../assets/image/BJLP3524.png")}
            ],
                firstDowlond:'/down/开发手册之JLP指令手册V1.1.pdf',
                twoDowlond:''
            },
            "EXP342":{
                title:"便携式标签打印机_EXP342",
                antistop:[
                    "超有力马达驱动" ,
                    "大容量锂电池",
                    "智能省电超长待机",
                    "工业级别IP54 ",
                    "多功能打印",
                    "工业级别"
                ],
                text:"EXP342打印机是一款最大可打印80mm(可打印区域72mm)纸宽的便携三合一多功能打印机采用32位高性能ARM微控制器,2500mAh/7.4V 大容量锂电池及整机的低功耗设计，使它能高速、长时间打印。超有力的马达驱动，自带2500mAh大容量锂电池，180天超长时间待机可充电；机身优化改良，小巧便携。支持串口，蓝牙通讯模式，标签缝定位机制使它能胜任各种标签纸打印。OLED 显示屏清晰显示打印机各种状态，提供友好的人机界面。新颖的按键开盖设计使用更方便。它轻巧耐用，可手持或者挂在腰间使用。",
                parameter:require("../../assets/image/PEXP342.png"),
                Accessories:[
                    {url:require("../../assets/image/J01.png"),title:"充电器-ZA01",txt:"（标准配件）"},
                    {url:require("../../assets/image/JL42400.png"),title:"可充电电池-JL42400",txt:"（标准配件）"},
                    {url:require("../../assets/image/J03.png"),title:"热敏标签纸 — LP7640",txt:"（选购件）"}
                ],
                type:"EXP342",
                download:"",
                certification:[
                    {url:require("../../assets/image/ZEXP3421.png"),title:"EXP342 CCC认证"},
                    {url:require("../../assets/image/ZEXP3422.png"),title:"济强EXP系列软件认证"},
                    {url:require("../../assets/image/ZEXP3423.png"),title:"EXP342 软件著作权"},
                    {url:require("../../assets/image/ZEXP3424.png"),title:"EXP342 硬件检测报告"}
                ],
                carouselList:[
                {url: require("../../assets/image/BEXP3421.png")},
                {url: require("../../assets/image/BEXP3422.png")},
                {url: require("../../assets/image/BEXP3423.png")}
            ],
                firstDowlond:'/down/开发手册之JLP指令手册V1.1.pdf',
                twoDowlond:''
            },
            "JMD451":{
                title:"桌面标签打印机_JMD451",
                antistop:[
                    "2.7大尺寸OLED屏" ,
                    "支持多种语言",
                    "多功能打印",
                    "工业级别"
                ],
                text:"JMD451打印机是一款有效打印区域达108mm纸宽的桌面式多功能打印机。采用32位高性能ARM微控制器,150mm/s打印速度。达到高效、高速，高质的打印效果。外接24V/2.5A移动适配器，内置大功率步进电机以及散热风扇，让打印动力更强，打印更持续持久。全打印机支持USB、蓝牙通讯。让桌面打印机变成可移动通讯的打印设备，让您的工作更方便快捷，省时省力。",
                parameter:require("../../assets/image/PJMD451.png"),
                Accessories:[
                    {url:require("../../assets/image/P11.png"),title:"充电器",txt:""},
                    {url:require("../../assets/image/P12.png"),title:"电源适配器",txt:""},
                    {url:require("../../assets/image/P13.png"),title:"数据线",txt:""}
                ],
                youzheng:"(邮政专用)",
                type:"JMD451",
                download:"",
                certification:'',
                // [
                //     {url:require("../../assets/image/ZEXP3421.png"),title:"EXP342 CCC认证"},
                //     {url:require("../../assets/image/ZEXP3422.png"),title:"济强EXP系列软件认证"},
                //     {url:require("../../assets/image/ZEXP3423.png"),title:"EXP342 软件著作权"},
                //     {url:require("../../assets/image/ZEXP3424.png"),title:"EXP342 硬件检测报告"}
                // ],
                carouselList:[
                {url: require("../../assets/image/BJMD4511.png")},
                {url: require("../../assets/image/BJMD4512.png")}
            ],
                firstDowlond:'',
                twoDowlond:'/down/Label Printer Driver Setup Ver1.0.2.rar'
            },
            "P1":{
                title:"桌面标签打印机_涅槃P1",
                antistop:[
                    "2.7大尺寸OLED屏" ,
                    "支持多种语言",
                    "独特灯带设计",
                    "多功能打印",
                    "工业级别"
                ],
                text:"涅槃P1打印机是一款有效打印区域达108mm纸宽的桌面式多功能打印机。采用32位高性能ARM微控制器,150mm/s打印速度。达到高效、高速，高质的打印效果。外接24V/2.5A移动适配器，内置大功率步进电机以及散热风扇，打印动力更强，打印更加持续持久。打印机支持USB、蓝牙、WiFi以及4G全网通移动通讯。在网络通讯上，支持云数据传输的打印模式，打印机能实现更加复杂的通讯环境。高精准触摸按键，进出纸口氛围灯光，工作状态语音播报，超大OLED显示屏幕，让打印变得更有科技感。",
                parameter:require("../../assets/image/PP1.png"),
                Accessories:[
                    {url:require("../../assets/image/P11.png"),title:"充电器",txt:""},
                    {url:require("../../assets/image/P12.png"),title:"电源适配器",txt:""},
                    {url:require("../../assets/image/P13.png"),title:"数据线",txt:""}
                ],
                type:"P1",
                download:"",
                certification:[
                    {url:require("../../assets/image/ZP11.png"),title:"P1 CCC认证"},
                ],
                carouselList:[
                {url: require("../../assets/image/BP11.png")},
                {url: require("../../assets/image/BP12.png")},
                {url: require("../../assets/image/BP13.png")}
            ],
                firstDowlond:'',
                twoDowlond:'/down/Label Printer Driver Setup Ver1.0.2.rar'
            },
            "CP3":{
                title:"便携式标签打印机_CP3",
                antistop:[
                    "LED墨水屏+OLED双屏互动" ,
                    "44-80mm可自由调节纸仓",
                    "多功能打印",
                    "工业级别"
                ],
                text:"CP3打印机是一款全新概念的打印机，纸仓宽度44—80mm可自由调节，适用于不同规格的执法文书。LED墨水屏+OLED双屏互动，显示屏灵活多样。设备小巧，方便携带。可同时支持NFC+蓝牙通讯无忧。可选配件丰富：支持Type-C通讯接口，通讯、充电更便捷。支持充电宝充电。",
                parameter:require("../../assets/image/PCP3.png"),
                Accessories:[
                    {url:require("../../assets/image/J01.png"),title:"充电器-ZA01",txt:"（标准配件）"},
                    {url:require("../../assets/image/JL42400.png"),title:"可充电电池-JL42400",txt:"（标准配件）"},
                    {url:require("../../assets/image/J03.png"),title:"热敏标签纸 — LP7640",txt:"（选购件）"}
                ],
                type:"CP3",
                download:"",
                certification:[
                    {url:require("../../assets/image/ZCP31.png"),title:"CP3 CCC认证"},
                    {url:require("../../assets/image/ZCP32.png"),title:"CP3 硬件检测报告"},
                ],
                carouselList:[
                {url: require("../../assets/image/BCP31.png")},
                {url: require("../../assets/image/BCP32.png")},
                {url: require("../../assets/image/BCP33.png")}
            ],
                firstDowlond:'/down/开发手册之JLP指令手册V1.1.pdf',
                twoDowlond:''
            }
            }
        }
    },
    methods: {
        change(index){
            this.current = index
        }
    },
    created(){
        let select = this.$route.query.type
        this.aaList = this.detailList[select]
        var obj = {
            title:select,
            url:this.$route.fullPath
        }
        this.positionList.push(obj)
        // console.log(this.positionList)
        // for (const key in this.detailList) {
        //     // console.log(key)
        //     // console.log(this.detailList[key])
        //     if(select = key){
        //         this.aaList = this.detailList[key]
        //         console.log(this.aaList)
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
    .prodetail{
        width: 1280px;
        margin: 0 auto;
        display: flex;
        padding-top: 50px;
        .prodetail-left{
            margin-right: 60px;
            height: 100%;
        }
    }
    .prodetail-box{
        width: 940px;
        margin: 0 auto;
        .prodetail-up{
            display: flex;
            margin-bottom: 40px;
            .carousel{
                width: 338px;
                height: 274px;
                margin-right: 31px;
                border:1px solid rgba(153,153,153,1);
            }
            .prodetail-title{
                    padding-top: 8px;
                .prodetail-name{
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 33px;
                }
                .prodetail-antistop{
                    font-size: 18px;
                    line-height: 40px;
                }
            }
        }
        .prodetail-centre{
            width: 939px;
            margin-bottom: 50px;
            .prodetail-text{
                font-size: 18px;
                line-height: 50px;
            }
        }
        .prodetail-below{
            .tab-header{
                .tab-box{
                    display: flex;
                    border-bottom:1px solid #F3F3F3;
                    .header-item{
                        width: 160px;
                        height: 50px;
                        font-size: 18px;
                        text-align: center;
                        line-height: 50px;
                        margin-right: 14px;
                    }
                }
            }
            .content-box{
                padding-top: 20px;
                .parameter{
                    width: 940px;
                    // height: 636px;
                    .parameter-item{
                        width: 460px;
                        margin-top:-1px;
                        border: 1px solid rgb(225, 225, 232);
                        display: flex;
                        align-items: center;
                        .item-name{
                            padding: 8px 12px;
                            font-size: 18px;
                            color: #999999;
                            width: 98px;
                            border-right: 1px solid rgb(225, 225, 232);
                            margin-right: -1px;
                        }
                        .item-price{
                            padding: 8px 12px;
                            width: 310px;
                            font-size: 18px;
                            color: #000000;
                            border-left: 1px solid rgb(225, 225, 232);
                        }
                    }
                    .parameter-txt{
                        font-size: 20px;
                        margin: 20px;
                    }
                }
                .parts{
                    width: 940px;
                    .parts-box{
                        width: 940px;
                        display: flex;
                        flex-wrap: wrap;
                        margin-bottom: 30px;
                        .parts-item{
                            width: 169px;
                            margin-left: 6px;
                            margin-right: 13px;
                            .parts-img{
                                width: 169px;
                                height: 154px;
                            }
                            .parts-txt{
                                font-size: 18px;
                                text-align: center;
                            }
                        }
                    }
                }
                .approve{
                    width: 940px;
                    .approve-box{
                        display: flex;
                        flex-wrap: wrap;
                        .approve-item{
                            width: 216px;
                            height: 350px;
                            margin-bottom: 30px;
                            margin-left: 5px;
                            margin-right: 50px;
                            .approve-img{
                                width: 216px;
                                height: 302px;
                                margin-bottom: 20px;
                            }
                            .approve-title{
                                text-align: center;
                                font-size:18px;
                            }
                        }
                    }
                }
                .skill{
                    .skill-box{
                        width: 940px;
                        .skill-item{
                            width: 935px;
                            height: 150px;
                            border:1px solid rgba(153,153,153,1);
                            margin-bottom: 20px;
                            display: flex;
                            align-items: center;
                            position: relative;
                        .skill-image{
                            width: 95px;
                            height: 98px;
                            background: url("../../assets/image/PDF.png");
                            background-size:95px 98px ;
                            margin-left: 35px;
                            margin-right: 27px;
                        }
                        .skill-imageZIP{
                            width: 95px;
                            height: 98px;
                            background: url("../../assets/image/ZIP.png");
                            background-size:95px 98px ;
                            margin-left: 35px;
                            margin-right: 27px;
                        }
                        .skill-content{
                            width: 550px;
                                .content-title{
                                    font-size: 18px;
                                    font-weight: bold;
                                    line-height: 33px;
                                }
                                .content-text{
                                    font-size: 18px;
                                }
                            }
                        .skill-but{
                                    width: 180px;
                                    height: 50px;
                                    border-radius:25px;
                                    border:1px solid rgba(0,0,0,1);
                                    line-height: 50px;
                                    text-align: center;
                                    position: absolute;
                                    right: 21px;
                                    font-size: 18px;
                                    .skill-but-txt{
                                        display: block;
                                        width: 180px;
                                        height: 50px;
                                        border-radius:25px;
                                        // border:1px solid rgba(0,0,0,1);
                                    }
                                    .skill-but-txt:hover{
                                        background: #000;
                                        color: #ffffff;
                                    }
                                }
                        }
                    }
                }
            }
        }
    }
    .activ{
        color: #ffffff;
        background: #000;
    }
    .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
    .small{
        padding: 14px;
    }
    .el-carousel__item h3{
        opacity:1;
    }
    /deep/.el-carousel__indicators--horizontal{
        bottom: 13px;
    }
    /deep/.el-carousel__button{
        background-color: #000;
    }
</style>