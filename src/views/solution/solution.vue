<template>
    <div class="solution">
        <smallbanner></smallbanner>
        <position :positionList="positionList"></position>
        <div class="solution-box">
            <div class="solution-item"
                v-for="item in iconList" :key="item.title"
                @click="changePage(item)"
            >
            <div class="item-img">
                <img :src="item.path" alt="">
            </div>
            <div class="item-title">
                {{item.title}}
            </div>
            <div class="item-text">
                {{item.text}}
            </div>
            <div class="item-but">
                查看详情
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import Position from "@/components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"

export default {
    components:{
        Position,
        Smallbanner
    },
    data(){
        return{
            positionList:[
                {title:'解决方案',url:'/solution'}
            ],
            iconList:[
                { title: "移动政务", path: require("@/assets/image/zhengwu.png"),text:"警务通/交警执法/城管执法工商、卫生监督/烟草稽查现场勘察/酒精检测",type:"move"},
                { title: "快递物流", path: require("@/assets/image/wuliu.png"),text:"企业快递/运输行业/货物标签邮寄/包裹",type:"expressage"},
                { title: "金融保险", path: require("@/assets/image/baoxian.png"),text:"车辆快速定损/车险现场定损信用卡现场办理/保单确认",type:"financial"},
                { title: "水电抄表", path: require("@/assets/image/zu.png"),text:"水费缴费通知单/电费缴费通知单燃气（煤气）缴费通知单",type:"water"},
                { title: "资产盘点", path: require("@/assets/image/zichanpandian.png"),text:"固定资产盘点/资产条形码资产标签/资产备注分散地点资产管理",type:"property"},
                { title: "仓库管理", path: require("@/assets/image/cangku.png"),text:"仓库库存/出入库管理仓库盘点/仓库调拨",type:"warehouse"},
                { title: "零售超市", path: require("@/assets/image/chaoshi.png"),text:"相关应用/流动售货/超市更改价签/专卖店/商品配送单",type:"retail"},
                { title: "mpos", path: require("@/assets/image/shuaqia.png"),text:"运行客户端/核验签单输入交易信息/刷卡付款",type:"mpos"},
                { title: "其他", path: require("@/assets/image/qita.png"),text:"移动售票/停车收费票据仪表数据打印/银行交割单工程监控和验收",type:"else"}
            ]
        }
    },
    methods:{
        changePage(data){
            this.$router.push({
                path: '/solution/soldetail',
                query: {
                    type: data.type
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .solution{
        width: 100%;
        background: #ffffff;
        .solution-box{
        width:1280px;
        margin: 0 auto;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding-top: 50px;
        .solution-item{
            width:310px;
            padding-top: 15px;
            height:446px;
            background:rgb(243, 243, 243);
            text-align: center;
            margin-bottom: 20px;
            position: relative;
            .item-img{
                width: 128px;
                height: 128px;
                border-radius:128px;
                background: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                margin-bottom: 12px;
            }
            .item-title{
                font-size: 20px;
                font-weight: bold;
                line-height: 33px;
                margin-bottom: 51px;
                position: relative;
            }
            .item-title::after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -19px;
                    left: 50%;
                    width:283px;
                    height: 1px;
                    margin-left: -141px;
                    background: #999999;
            }
            .item-text{
                line-height: 40px;
                font-size: 18px;
                width: 247px;
                margin: 0 auto;
                margin-bottom: 22px;
            }
            .item-but{
                width: 189px;
                height: 52px;
                text-align: center;
                line-height: 52px;
                font-size: 18px;
                border-radius:30px;
                border:1px solid rgba(0,0,0,1);
                margin: 0 auto;
                position: absolute;
                bottom: 30px;
                left: 50%;
                margin-left: -94px;
            }
            .item-but:hover{
                background: #000000;
                color: #ffffff;
            }
        }
    }
    }
</style>