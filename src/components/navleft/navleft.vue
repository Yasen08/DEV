<template>
  <div class="navleft">
      <div class="navleft-box">
          <div class="navleft-item">
              <router-link :to="navleftlist.homeUrl">
              <div class="item-first">
                        <div class="first-img">
                            <img :src="navleftlist.iconurl" width="34px" height="34px">
                        </div>
                        <p>{{navleftlist.title}}</p>
              </div>
              </router-link>
              <router-link 
              v-for="(item,index) in navleftlist.list" :key="index"
              :to="{path: `${item.path}/` + item.id}"
              class="item-other"
              active-class="active">
              <p>{{item.txt}}</p>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        navleftlist: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
    .navleft{
        width: 280px;
        border-radius:5px;
        border:1px solid rgba(153,153,153,1);
        .item-first{
            font-size: 24px;
            padding-left: 55px;
            display: flex;
            .first-img{
                margin-right: 20px;
                margin-top: 32px;
            }
            p{
                line-height: 100px;
            }
        }
        .item-other{
            border-top:1px solid rgba(153,153,153,1);
            line-height: 69px;
            font-size: 20px;
            position: relative;
            display: block;
            p{
                margin-left: 47px;
            }
        }
        .item-other::after{
            content: "";
            display: block;
            position: absolute;
            bottom: 50%;
            left: 21px;
            width: 10px;
            height: 10px;
            margin-bottom: -5px;
            border-radius:10px;
            background: #000000;
        }
    }
    .active{
        background: #000000;
        color: #ffffff;
    }
    .active::before{
            content: "";
            display: block;
            position: absolute;
            bottom: 50%;
            left: 21px;
            width: 10px;
            height: 10px;
            margin-bottom: -5px;
            border-radius:10px;
            background: #ffffff;
            z-index: 10;
        }
</style>