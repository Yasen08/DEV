<template>
    <div class="contact">
    <smallbanner></smallbanner>
     <position :positionList="positionList"></position>
        <div class="contact-box">
            <div class="contact-left">
                <div class="map-box">
                    <amap></amap>
                </div>
                <p class="message">上海市浦东新区新金桥路1299号1号楼601室</p>
                <p class="message">电话：021-61645760</p>
                <p class="message">邮箱：sales@jqtek.com</p>
                <p class="message">时间：周一至周五  09:00-18:00</p>
            </div>
            <div class="contact-right">
                <subfrom></subfrom>
            </div>
        </div>
    </div>
</template>

<script>
import Amap from "../../components/amap/amap.vue"
import Subfrom from "../../components/subfrom/subfrom.vue"
import Position from "../../components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"
export default {
    components:{
        Amap,
        Subfrom,
        Position,
        Smallbanner
    },
    data(){
        return{
             positionList:[
                {title:'联系我们',url:'/contact'}
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact{
        width: 100%;
        .contact-box{
            width: 1280px;
            margin: 0 auto;
            padding-top: 51px;
            display: flex;
                .contact-left{
                    margin-right: 200px;
                    .map-box{
                        margin-bottom:30px;
                    }
                    .message{
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
            }
        }
    }
    .el-button--primary{
        background: #ffffff;;
    }
</style>