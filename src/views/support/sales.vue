<template>
    <div class="sales">
        <div class="sales-item">
            <div class="item-title">一、售后服务计划</div>
            <div class="item-text">
                <div class="stitle">技术培训</div>
                <p class="txt">
                    上海济强电子科技有限公司可以为用户提供便携式微型打印机和打印机维护培训。对于所有打印机，在系统运行开始后，可以提供免费的技术支持。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">打印机维护</div>
                <p class="txt">
                    1.保修期内
                    <br>
                    自您购买之日起，整机一年保修。如客户合同对保修范围和保修期限另有约定，以客户合同为准。
                    <br>
                    2.保修期外
                    <br>
                    保修期过后，我们将继续为用户提供优惠的有偿服务。有偿服务分为"临时呼叫"和"承包服务"。
                    <br>
                    A．临时呼叫服务：上海济强电子科技有限公司工程师提供现场服务。
                    <br>
                    B．保修期过后，用户可以通过每年签定维护合同的形式由上海济强电子科技有限公司继续提供保修期内的售后服务，
                    即每年按维护合同支付维护费用后，每次提供现场服务时，用户无需支付服务费及备件费用（耗材除外）。
                    在设备维修后，上海济强电子科技有限公司将给用户提供服务报告。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">维修支持</div>
                <p class="txt">
                    由上海济强电子科技有限公司在上海的维修配件中心直接提供配件和维修。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">软件支持</div>
                <p class="txt">
                    1.建立与用户设备维护有关的技术支持网页，提供与日常维护相关的资料，用户可以在我公司开放的权限内，获取有关设备运行、产品知识、维护经验等方面的资料，我公司负责定期对网上资料进行更新。 
                    <br>
                    2.通过电子邮件或邮寄方式，向用户发放技术资料，技术资料包括我公司技术报告、我公司最新产品技术资料等。 
                    <br>
                    3.用户可通过登陆我公司网站，免费下载相关软件，以及软件的升级版本
                </p>
            </div>
        </div>
        <div class="sales-item">
            <div class="item-title">二、对用户的优惠服务说明</div>
            <div class="item-text">
                <div class="stitle">电话响应（立即响应）</div>
                <p class="txt">
                    上海济强电子科技有限公司可以为用户提供便携式微型打印机和打印机维护培训。对于所有打印机，在系统运行开始后，可以提供免费的技术支持。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">现场响应</div>
                <p class="txt">
                    上海济强电子科技有限公司工程师将在第一时间内抵达维修中心的现场。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .sales-item{
        padding-top:9px;
        margin-bottom: 50px;
        .item-title{
            font-size: 20px;
            line-height: 33px;
            margin-bottom: 30px;
            font-weight: bold;
        }
        .item-text{
            width: 863px;
            margin-left: 40px;
            margin-bottom: 30px;
            .stitle{
                font-size:20px;
                font-weight: bold;
                position: relative;
                line-height: 40px;
            }
            .txt{
                font-size: 20px;
                line-height: 40px;
                text-align:justify
            }
            .stitle::before{
                content: "";
                display: block;
                position: absolute;
                width: 10px;
                height: 10px;
                background: #000;
                border-radius:10px;
                left: -30px;
                bottom: 15px;
            }
        }
    }
</style>