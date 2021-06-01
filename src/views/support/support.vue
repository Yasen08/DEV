<template>
    <div class="support">
        <smallbanner></smallbanner>
        <position :positionList="positionList"></position>
        <div class="support-box">
            <div class="support-left">
                <navleft :navleftlist="navleftList"></navleft>
            </div>
            <div class="support-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import Navleft from "../../components/navleft/navleft.vue"
import Position from "@/components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"

export default {
    components:{
        Navleft,
        Position,
        Smallbanner
    },
    data(){
        return{
            positionList:[
                {title:'服务支持',url:'/support'}
            ],
            activeNames: ['1'],
            navleftList:{
                homeUrl:'/support',
                iconurl:require("@/assets/image/fuwuzhichi.png"),
                title:"服务支持",
                list:[
                    {txt:"常见FAQ",path:"/support",id:"faq"},
                    {txt:"售后服务",path:"/support",id:"sales"},
                    {txt:"保修承诺",path:"/support",id:"warranty"},
                    {txt:"在线保修",path:"/support",id:"online"}
                ],
                },
        }
    },
}
</script>

<style lang="scss" scoped>
    .support{
        width: 100%;
        .support-box{
            padding-top: 50px;
            width: 1280px;
            margin: 0 auto;
            display: flex;
            .support-right{
                width: 940px;
                margin-left: 60px;
            }
        }
    }
</style>