<template>
    <div class="about">
        <smallbanner></smallbanner>
        <position :positionList="positionList"></position>
        <div class="about-box">
            <div class="about-left">
                <navleft :navleftlist="navleftList"></navleft>
            </div>
            <div class="about-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import Navleft from "../../components/navleft/navleft.vue"
import Position from "../../components/position/position.vue"
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
                {title:'关于我们',url:'/about'}
            ],
            navleftList:{
                homeUrl:'/about',
                iconurl:require("@/assets/image/smalllogo.png"),
                title:"关于我们",
                list:[
                    {txt:"公司简介",path:"/about",id:"intro"},
                    {txt:"发展历程",path:"/about",id:"course"},
                    {txt:"荣誉资质",path:"/about",id:"aptitude"}
                ],
                },
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
    .about{
        .about-box{
            padding-bottom: 120px;
            padding-top: 50px;
            width: 1280px;
            margin: 0 auto;
            display: flex;
            .about-left{
                margin-right: 60px;
            }
            .about-right{
                width: 940px;
            }
        }
    }
</style>