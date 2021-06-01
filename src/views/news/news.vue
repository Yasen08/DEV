<template>
    <div class="news">
        <smallbanner></smallbanner>
        <position :positionList="positionList"></position>
        <div class="news-box">
            <div class="news-up">
                <div class="up-item">
                    <router-link to="/news" class="up-title" :class="[current === 0 ? 'active': '']">
                    公司新闻
                    </router-link>
                </div>
                <div class="up-item">
                <router-link to="/news?type=industry" class="up-title" :class="[current === 1 ? 'active': '']">
                行业动态
                </router-link>
                </div>
            </div>
            <div class="news-content">
                <ul class="content-box">
                    <li class="content-item"
                    v-for="(item,index) in employList" :key="index"
                    >
                        <div class="item-time">
                            <p class="time-day">{{item.day}}</p>
                            <p class="time-years">{{item.years}}</p>
                        </div>
                        <router-link
                        :to="{path: `${item.path}` + item.type}"
                        >
                            <div class="item-content">
                                <p class="icontent-title">{{item.title}}</p>
                                <p class="icontent-txt">{{item.txt}}</p>
                                <div class="icontent-but">查看详情</div>
                            </div>
                        </router-link>
                        <div class="item-img">
                            <img :src="item.url" width="280px" height="210px">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="product-paging">
                <div class="paging-box">
                    <div class="paging-prev" @click="prevPage()">上一页</div>
                    <div class="paging-num"
                    v-for="(item,index) in totalPage" :key="index"
                    @click="numPage(index+1)"
                    :class="[currentPage === index+1 ?'paging-sele' : '']"
                    >{{index+1}}</div>
                    <div class="paging-next" @click="nextPage()">下一页</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Position from "../../components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"

export default {
    components:{
        Position,
        Smallbanner
    },
    data(){
        return{
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 3, // 每页显示数量
            positionList:[
                {title:'新闻动态',url:'/news'}
            ],
            current:0,
            employ:[],
            employList:[],
            companyList:[
                {
                day:"05",years:"2019-06",title:"电子面单打印机与传统面单打印机的对比，电子面单打印机的特点性能",
                txt:"打印机在办公用品中十分常见，极大的方便了我们的日常工作，其中电子面单打印机是用来打印快递单子的，方便又快捷，应用很广泛。那么...",
                url:require("../../assets/image/2019060501.jpg"),
                path:'/news/detail?type=',
                type:'2019060501'
                },
                {
                day:"29",years:"2019-05",title:"电子面单打印机的产品特点及其具备的优势",
                txt:"电子面单打印机主要用于打印快递的面单，是顺应快递行业发展的一种新型的面单打印设备，有效地简化了人工填写面单的步骤，减少了出错率，节省了快递单填写的人工成本。那么，电子面单打印机的产品属性是怎样的呢？它有哪些方面的优势呢？下面我们就“电子面单打印机的产品属性与优势”来详细了解下。",
                url:require("../../assets/image/2019052901.jpg"),
                path:'/news/detail?type=',
                type:'2019052901'
                },
                {
                day:"17",years:"2019-05",title:"便携式打印机的使用方式及其要求的简介",
                txt:"在现实生活中，智能手机、平板电脑等移动设备可以让我们无时无刻随时随地的进行工作和休闲。似乎，我们进入了一个“移动化”的世界。为了满足我们的学习与工作，各大厂家发明了可以随身携带的便携式打印机。下面我们就“便携式打印机的使用方式及其要求的简介”来详细了解下。",
                url:require("../../assets/image/2019051701.jpg"),
                path:'/news/detail?type=',
                type:'2019051701'
                },
                {
                day:"25",years:"2019-04",title:"便携式打印机的类型以及相关知识说明",
                txt:"为了工作的方便，人们常常会使用便携式的机器，便携式打印机就是这样一种便于携带而且对人们工作带来巨大的帮助的机械设备。如果想要进一步了解便携式打印机的话，咱们就一起看看小编给大家整理的资料吧！以下关于“便携式打印机的类型以及相关知识说明”的介绍。",
                url:require("../../assets/image/2019042501.jpg"),
                path:'/news/detail?type=',
                type:'2019042501'
                }
            ],
            industryList:[
                {
                day:"04",years:"2019-06",title:"电子面单打印机的特点与功能优势",
                txt:"打印机在办公用品中十分常见，极大地方便了我们的日常工作，其中电子面单打印机是用来打印快递单子的，方便又快捷，应用很广泛。那么它到底有什么独特的功能呢？比起其他产品又有哪些优势呢？下面我们就“电子面单打印机的特点与功能优势”来详细了解下。",
                url:require("../../assets/image/2019060401.jpg"),
                path:'/news/detail?type=',
                type:'2019060401'
                },
                {
                day:"31",years:"2019-05",title:"蓝牙打印机的性能及设备特点介绍",
                txt:"蓝牙打印机大家应该都听说过，这是一种将传统打印设备与蓝牙技术相结合的新型装备。今天我就来和大家聊聊蓝牙打印机的相关话题。蓝牙打印机对于打印方式的改变有着重要的推动作用。蓝牙打印机到底具备什么样的性能特点？下面我们就“蓝牙打印机的性能及设备特点”来详细了解下。",
                url:require("../../assets/image/2019053101.jpg"),
                path:'/news/detail?type=',
                type:'2019053101'
                },
                {
                day:"27",years:"2019-05",title:"什么是快递打印机以及它的两大优势介绍",
                txt:"快递打印机它和普通的打印机是有一定的区别的，它归属于针式打印机系列，是其他普通的打印机所无法取代的，拥有它自己本身不同于其他打印机的性能优点。主要服务于电商类相关行业的客户。下面我们就“什么是快递打印机以及它常见的两大优势”来详细了解下。",
                url:require("../../assets/image/2019052701.jpg"),
                path:'/news/detail?type=',
                type:'2019052701'
                },
                {
                day:"24",years:"2019-05",title:"蓝牙打印机的业务范围及其特性说明",
                txt:"蓝牙打印机就是应用蓝牙技术，实现无线打印。它的技术发明，解决了打印机对空间要求的问题。在使用中可以将打印机放在任何位置，打印时只要打开它的蓝牙功能便可工作了。那么它的原理基于普通打印机又有什么不一样呢？下面我们就“蓝牙打印机的业务范围及其特性说明”来详细了解下。",
                url:require("../../assets/image/2019052401.jpg"),
                path:'/news/detail?type=',
                type:'2019052401'
                }
            ]
        }
    },
    mounted(){
        // 计算一共有几页
        this.totalPage = Math.ceil(this.employ.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    },
    methods:{
        // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
        setCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.employList = this.employ.slice(
                begin,
                end
            );
        },
        //上一页
        prevPage() {
            console.log(this.currentPage);
            if (this.currentPage == 1) return;
             this.currentPage--;
             this.setCurrentPageData();
            
        },
        // 下一页
        nextPage() {
            if (this.currentPage == this.totalPage)return ;
 
             this.currentPage++;
             this.setCurrentPageData();
            
        },
        //按页跳转
        numPage(index){
            this.currentPage = index
            this.setCurrentPageData();
        }
    },
    created(){
        switch (this.$route.query.type) {
            case undefined:
            this.employ = this.companyList
            this.current = 0
                break;
            case 'industry':
            this.employ = this.industryList
            this.current = 1
                break;
        }
        this.setCurrentPageData()
    }
}
</script>

<style lang="scss" scoped>
    .news{
        .news-box{
            width: 1280px;
            margin: 0 auto;
            padding-top: 50px;
            .news-up{
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                margin-bottom: 33px;
                .up-item{
                    width: 160px;
                    height: 50px;
                    font-size: 20px;
                    color: #000;
                    line-height: 50px;
                    text-align: center;
                    background:rgba(243,243,243,1);
                    margin-left: 20px;
                    .up-title{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .news-content{
                .content-box{
                    .content-item{
                        width: 1280px;
                        height: 210px;
                        display: flex;
                        margin-bottom: 74px;
                        .item-time{
                            width: 160px;
                            height: 210px;
                            padding-top: 35px;
                            text-align: center;
                            color: #999999;
                            margin-right: 20px;
                            .time-day{
                                font-size: 80px;
                                line-height: 92px;
                            }
                            .time-year{
                                font-size: 18px;
                            }
                        }
                        .item-content{
                            padding-top: 23px;
                            margin-right: 63px;
                            .icontent-title{
                                font-size: 20px;
                                font-weight: bold;
                                margin-bottom: 25px;
                            }
                            .icontent-txt{
                                width: 757px;
                                font-size: 18px;
                                line-height: 34px;
                                height: 68px;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                            }
                            .icontent-but{
                                width: 180px;
                                height: 50px;
                                color: #000;
                                line-height: 50px;
                                text-align: center;
                                font-size: 16px;
                                font-weight: bold;
                                border-radius:30px;
                                border:1px solid rgba(0,0,0,1);
                                margin-top: 10px;
                            }
                            .icontent-but:hover{
                                background: #000;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
    .active{
        background: #000!important;
        color: #ffffff!important;
    }
    .product-paging{
        width: 940px;
        position: relative;
        height: 30px;
        margin-bottom: 30px;
        .paging-box{
            display: flex;
            position: absolute;
            right: 0;
            .paging-prev{
                width:90px;
                height:30px;
                border:1px solid rgba(153,153,153,1);
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                margin-left: 10px;
            }
            .paging-next{
                width:90px;
                height:30px;
                border:1px solid rgba(153,153,153,1);
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                margin-left: 10px;
            }
            .paging-num{
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border:1px solid rgba(153,153,153,1);
                margin-left: 10px;
            }
        }
    }
    .paging-sele{
        background: #000000;
        color: #ffffff;
    }
    .fup-title{
        color: #ffffff;
    }
</style>