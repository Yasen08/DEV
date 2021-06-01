<template>
        <div class="amap-container">
            <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
                <el-amap-circle
                v-for="circle in firstWcircles"
                :key="circle.index" 
                :center="circle.center" 
                :radius="circle.radius" 
                :strokeWeight="circle.strokeWeight" 
                :fill-opacity="circle.fillOpacity" 
                :strokeOpacity="circle.strokeOpacity" 
                :strokeColor="circle.strokeColor" 
                :fillColor="circle.fillColor">
                </el-amap-circle>
            </el-amap>
        </div>
</template>

<script>
export default {
        data(){
            return{
                zoom: 16,
                center: [121.614905,31.253101],
                firstWcircles: [
                    {
                    index:1,
                    center: [121.614905,31.253101],
                    radius: 10,
                    fillOpacity: 1,
                    fillColor:"#1692FF",
                    strokeOpacity:0
                    },
                    {
                    index:2,
                    center: [121.614905,31.253101],
                    radius: 30,
                    fillOpacity: 0.3,
                    fillColor:"#1692FF",
                    strokeColor:"#1692FF",
                    strokeOpacity:1,
                    strokeWeight:1
                    }
                ]
            }
      }
}
</script>

<style>
    .amap-container{
        height: 250px;
        width: 410px;
    }
    .amap-logo{
        display: none!important;
    }
    .amap-copyright{
        display: none!important;
    }
</style>