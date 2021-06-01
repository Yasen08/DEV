<template>
    <div class="product">
        <div class="product-box">
            <div class="product-banner">
                <smallbanner></smallbanner>
            </div>
            <position :positionList="positionList"></position>
            <div class="product-content clearfix">
                <div class="content-left">
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
                                :class="[select === item.id ?'proactive' : '']"
                                >
                                <p>{{item.txt}}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-box">
                    <div class="content-item"
                    v-for="(item,index) in employList" :key="index"
                    >
                        <div class="item-img">
                            <img :src="item.path" width="270px" height="180px">
                        </div>
                        <div class="item-title">
                            {{item.title}}
                            <br>
                            {{item.type}}
                        </div>
                            <div class="item-but" @click="choseDetail(item)">
                            查看详情
                            </div>
                    </div>
                    <div class="product-paging" :class="[select === undefined ?'show' : 'hidden']">
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
        </div>
    </div>
</template>

<script>

import Navleft from "@/components/navleft/navleft.vue"
import Position from "@/components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"

export default {
    data(){
        return{
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 6, // 每页显示数量
            // currentPageData: [], //当前页显示内容
            select:'',
            employList:[],
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
            productList:[
                { title: "便携式标签打印机", path: require("@/assets/image/JLP451.png"),type:"JLP451"},
                { title: "便携式票据打印机", path: require("@/assets/image/VMP02.png"),type:"VMP02"},
                { title: "便携式标签打印机", path: require("@/assets/image/JLP352.png"),type:"JLP352"},
                { title: "便携式标签打印机", path: require("@/assets/image/EXP342.png"),type:"EXP342"},
                { title: "桌面标签打印机", path: require("@/assets/image/JMD451.png"),type:"JMD451"},
                { title: "桌面标签打印机", path: require("@/assets/image/P1.png"),type:"P1"},
                { title: "便携式标签打印机", path: require("@/assets/image/BCP31.png"),type:"CP3"},
            ],
            classifyList:{
                "PJ":[
                    { title: "便携式票据打印机", path: require("@/assets/image/VMP02.png"),type:"VMP02"}
                ],
                "TS":[
                    { title: "桌面标签打印机", path: require("@/assets/image/JMD451.png"),type:"JMD451"},
                    { title: "桌面标签打印机", path: require("@/assets/image/P1.png"),type:"P1"}
                ],
                "BQ":[
                    { title: "便携式标签打印机", path: require("@/assets/image/JLP451.png"),type:"JLP451"},
                    { title: "便携式标签打印机", path: require("@/assets/image/JLP352.png"),type:"JLP352"},
                    { title: "便携式标签打印机", path: require("@/assets/image/EXP342.png"),type:"EXP342"},
                    { title: "便携式标签打印机", path: require("@/assets/image/BCP31.png"),type:"CP3"}
                ]
            }
        }
    },
    components:{
        Position,
        Navleft,
        Smallbanner
    },
    mounted(){
        // 计算一共有几页
        this.totalPage = Math.ceil(this.productList.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    },
    methods:{
        choseDetail(data){
            this.$router.push({
                    path: 'product/detail',
                    query: {
                        type: data.type
                    }
                })
        },
        // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
        setCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.employList = this.productList.slice(
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
        this.select = this.$route.query.type
        switch(this.$route.query.type) {
        case 'TS':
            this.employList = this.classifyList['TS']
            break;
        case 'PJ':
            this.employList = this.classifyList['PJ']
            break;
        case 'BQ':
            this.employList = this.classifyList['BQ']
            break;
        default:
        this.setCurrentPageData(); 
    }
    }
}
</script>

<style lang="scss" scoped>
    .product{
        width: 100%;
        .product-box{
             .product-banner{
                font-size: 0;
                overflow: hidden;
            }
            .product-content{
                padding-top: 50px;
                width: 1280px;
                margin: 0 auto;
                .content-left{
                    float: left;
                }
                .content-box{
                    float: left;
                    margin-left: 45px;
                    display: flex;
                    width: 950px;
                    flex-wrap: wrap;
                    .content-item{
                        padding-top: 16px;
                        width: 300px;
                        height: 360px;
                        background:rgba(243,243,243,1);
                        text-align: center;
                        margin-left: 15px;
                        margin-bottom: 50px;
                        .item-title{
                            margin-top: 19px;
                            margin-bottom: 14px;
                            font-size: 20px;
                            line-height: 33px;
                        }
                        .item-but{
                            width: 170px;
                            height: 48px;
                            border-radius:30px;
                            border:1px solid rgba(0,0,0,1);
                            font-size:16px;
                            font-weight:bold;
                            line-height: 48px;
                            margin: 0 auto;
                        }
                        .item-but:hover{
                            background: rgba(0,0,0,1);
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
    .proactive{
        background: #000000;
        color: #ffffff;
    }
    .proactive::before{
        content: "";
        display: block;
        position: absolute;
        bottom: 50%;
        left: 21px;
        width: 10px;
        height: 10px;
        margin-bottom: -5px;
        border-radius:10px;
        background: #ffffff;
        z-index: 10;
    }
    .show{
        display: block;
    }
    .hidden{
        display: none;
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
</style>