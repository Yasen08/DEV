<template>
  <div class="position">
      <div class="position-box">
          <div class="position-icon"></div>
          <div class="position-text">
                当前位置：
                <router-link to="/index" class="position-txt">
                    首页
                </router-link>
                <router-link 
                v-for="(item,index) in positionList" :key="index"
                :to="item.url"
                class="position-txt"
                >
                    > {{item.title}}
                </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        positionList: {
            type: Array
        }
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    .position{
        width: 100%;
        height:60px;
        background:rgba(243,243,243,1);
        .position-box{
            width: 1280px;
            margin: 0 auto;
            line-height: 60px;
            display: flex;
            justify-content: start;
            align-items: center;
            .position-icon{
                width: 30px;
                height: 29px;
                background: url('../..//assets/image/yemian.png');
                margin-right: 10px;
                margin-top: -7px;
            }
            .position-text{
                font-size:24;
                color: #999999;
                .position-txt{
                    font-size:24;
                    color: #999999;
                }
            }
        }
    }

</style>