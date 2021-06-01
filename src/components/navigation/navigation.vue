<template>
    <div class="navigation-box">
        <div class="logo">
            <img src="@/assets/image/logo.png" alt="">
        </div>
        <div class="nav-box">
            <div class="nav-list">
                 <div v-for = "(item,index) in navList" :key="index" class="list-item">
                   <router-link
                   :to="{path: `${item.route}`}"
                    active-class="actives"
                    class="list-title"
                   >{{item.title}}
                   </router-link>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'navigation',
    data(){
        return{
            navList:[
                { title: " 首页 ", route: "/index"},
                { title: "产品中心", route: "/product"},
                { title: "解决方案", route: "/solution"},
                { title: "服务支持", route: "/support"},
                { title: "新闻动态", route: "/news"},
                { title: "关于我们", route: "/about"},
                { title: "联系我们", route: "/contact"}
            ]
        }
    }
}
</script>
<style lang="scss">
    a{
        color: #999999;
    }
    .navigation-box{
        margin: 0 auto;
        width: 1280px; 
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        height: 120px;
        line-height: 120px;
        justify-content: flex-start;
        .logo{
            width: 472px;
            padding-top: 30px;
            vertical-align: middle;
            text-align: center;
            img{
                width: 120px;
                height: 48px;
                align-items: center;
                padding: 0 50px;
            }
        }
        .nav-list{
            width: 1060px;
            height: 110px;
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            .list-item{
                font-size: 20px;
                position: relative;
                text-align: center;
                width: 144px;
                .list-title{
                    color: #999999;
                }
            }
            .list-item:nth-child(1){
                width: 80px;
            }
        }
    }
    .actives::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 26px;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 4px;
        background: #000000;
    }
    .actives{
        font-size: 24px;
        color: #000000!important;
        font-weight: bolder;
    }
</style>