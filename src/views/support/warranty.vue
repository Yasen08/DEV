<template>
    <div class="warranty">
        <div class="sales-item">
            <div class="item-title">保修及维修范围</div>
            <div class="item-text">
                <div class="stitle">保修及维修范围</div>
                <p class="txt">
                    1.济强生产的便携打印机（以下简称打印机）及附属的功能性配件属于保修及维修范围。说明书、包装物不是功能性配件，不属于保修及维修范围。
                    <br>
                    2.济强生产的打印机及功能性配件如出现损坏但不是免费保修限制中列举的原因导致的损坏，济强承担保修义务。
                    <br>
                    3.济强生产的打印机及功能性配件如超过保修期限或出现因免费保修限制中列举的原因导致的损坏，济强承担维修义务。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">非保修范围及维修费用</div>
                <p class="txt">
                    1.无我公司认可标志的产品。
                    <br>
                    2.无三包凭证及有效发票的，三包凭证上的型号与商品型号不符或者涂改的；
                    <br>
                    3.不按照产品使用说明中的使用方法使用本机的。
                    <br>
                    4.由于坠毁、挤压、浸水、受潮、运输等其它人为所造成的损坏，或由水灾、火灾等自然灾害所造成的损坏。
                    <br>
                    5.因用户自行或经非我公司指定的维修点拆机造成的故障或损坏以及用户自行更换配件，或使用非原厂装配的配件所造成的故障及损坏。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">保修期内的机器、配件维修收费方法</div>
                <p class="txt">
                    1.保修期内因机器质量问题而返修的机器、配件，公司不收取任何维修费用。
                    <br>
                    2.保修期内属人为原因造成损坏的机器、配件，公司按实际维修情况收取元器件成本费用及机器维修费。
                    <br>
                    3.机器、配件回寄给客户的费用由我公司支付。
                </p>
            </div>
            <div class="item-text">
                <div class="stitle">保修期外的机器、配件维修收费方法</div>
                <p class="txt">
                    1.保修期外的机器维修，公司按实际维修情况收取元器件成本费及维修费。
                    <br>
                    2.济强承担保修后送达客户所产生的费用，不承担产品从客户送至济强过程中产生的费用。
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
    .warranty{
          .sales-item{
        padding-top:9px;
        margin-bottom: 50px;
        .item-title{
            font-size: 20px;
            line-height: 33px;
            margin-bottom: 30px;
            font-weight: bold;
            margin-left: 46px;
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
    }
</style>