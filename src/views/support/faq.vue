<template>
    <div class="fold">
        <div class="fold-box">
            <div class="fold-faq">
                常见FAQ
            </div>
            <div class="fold-item"
            v-for="(item,index) in foldList"
            :key="index"
            >
                <div class="fold-title">
                    <div class="fold-tit" @click="change(index)">Q：{{item.title}}</div>
                    <div class="fold-on" v-show="item.show" @click="change(index)">展开</div>
                       <div class="fold-off"  v-show="!item.show" @click="change(index)">收起</div>
                </div>
                <div class="fold-text" v-show="!item.show">A：{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            foldList:[
                {title:"济强能否提供整套的解决方案？",text:"济强是移动打印领域的专业生产厂商，但是移动打印机一般都是在项目中当作一个配属设备，整套解决方案必须要由专业系统集成商来完成，济强会尽力配合其项目开发工作。",show:true},
                {title:"能否在一台打印机上同时实现蓝牙、红外2种模式？",text:"红外和蓝牙都是模拟的串口数据通讯的，现有的打印机一般只留一个数据通道，所以是蓝牙或红外二选一。不过如果确实需要2种模式同时存在的话，可以通过大规模数量的定制来实现。",show:true},
                {title:"济强移动打印机是否支持彩色打印？",text:"目前市面上的移动打印机采用热敏和针打这两种方式，热敏的因为工作机理的问题只能打印黑色，不过可以做预印刷，这样就能保证单据的美观；针打的根据挑选色带的不同可以打印不同的颜色，不过也只能打印单一颜色，如果要多色",show:true},
                {title:"济强便携式打印机能不能打印图形，怎么实现？",text:"可以打印图形，可以采用两种方式来实现。第一种是把灰度图像的数据格式直接发送过去，打印机可以直接打印，第二种是先把图片预存储在打印机里，用标号来代替，每一次需要打印图像的时候直接发送调用打印标号，打印机就可以",show:true},
                {title:"济强生产的打印机字能不能反转打印？",text:"完全可以。可以根据济强打印机的开发手册，随意倾斜90、180、270不同角度。",show:true},
                {title:"济强便携式打印机用的卷纸一卷大约有多长",text:"一卷纸的长度和品牌、克数、纸卷直径都有关系，一般来说，如果纸卷直径是30mm的话那么一卷纸大约10m左右，如果纸卷直径是40mm的话那么一卷纸大约15m左右 。",show:true},
                {title:"济强便携式打印机支持哪些操作系统",text:"打印机对操作系统的要求并不太多，只要操作系统适合开发，能够支持ESC，POS指令集就行。像时下常见的Android、Symbian、Windows Mobile、WINCE等都可以支持。",show:true},
                {title:"济强便携式打印机充一次电能打多长时间？",text:"能打印多长时间和电池毫安数、电力系统、节电技术以及打印密度有关，业内一般以一次充电能打印多长的纸卷来衡量。正常打印密度下，济强的绝大部分型号打印机能打印100米左右。",show:true},
                {title:"便携式打印机实际打印的宽度是多少？",text:"使用58毫米（2寸）宽纸卷的打印机，有效打印宽度是48毫米；一种是是使用80毫米宽（3寸）纸卷的打印机，有效打印宽度是72毫米 。",show:true},
                {title:"采用热敏打印机，热敏纸能保存多长时间？",text:"热敏纸的好坏可谓有三六九等，最好的能保障30年以上有效期，差的则只有1-3个月有效期。济强推荐选择好点的热敏纸，至少能保存2年-5年的时间。",show:true}
            ]
        }
    },
    methods: {
      change(index) {
          this.foldList[index].show = !this.foldList[index].show
      }
    }
}
</script>

<style lang="scss" scoped>
                .fold{
                    margin-bottom: 80px;
                }
                .fold-faq{
                    width: 160px;
                    height: 50px;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 26px;
                    line-height: 50px;
                    text-align: center;
                    background:rgba(243,243,243,1);
                    position: relative;
                }
                .fold-faq:after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left:25px;
                    width: 934px;
                    margin-left: -25px;
                    border:1px solid rgba(243,243,243,1);
                }
            .fold-item{
                font-size: 20px;
                border-bottom: 1px solid rgba(243,243,243,1);
            }
            .fold-title{
                position: relative;
                line-height: 90px;
                font-weight: 400;
                .fold-on{
                    width:150px;
                    height:50px;
                    border-radius:30px;
                    border:1px solid rgba(0,0,0,1);
                    font-size:18px;
                    font-weight:bold;
                    color:rgba(0,0,0,1);
                    line-height:50px;
                    position: absolute;
                    right: 0;
                    top: 20px;
                    text-align: center;
                }
                .fold-off{
                    width:150px;
                    height:50px;
                    border-radius:30px;
                    font-size:18px;
                    font-weight:bold;
                    line-height:50px;
                    position: absolute;
                    right: 0;
                    top: 20px;
                    text-align: center;
                    color:#999999;
                    background: rgba(243,243,243,1);
                }
            }
</style>