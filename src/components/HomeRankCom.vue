<template>
    <div class="home-rank">
        <div class="category-rank">
            <div class="top">
                <span class="title">分类排行</span>
                <span class="see-all">查看全部></span>
            </div>
            <van-swipe class="my-swipe" :height="110" :width="90" :loop="false" :show-indicators="false">
                <van-swipe-item v-for="(item ,i) in categorys" :key="i" @click="$router.push({path: '/bookDetails', query: {id: i}})">
                <van-image width="80" height="80" :radius="5" :src="item.pic_url" />
                <span class="type">{{item.name}}</span>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { Swipe, Image as VanImage, SwipeItem } from 'vant';

import '@/assets/common/init.css'
import  '@/type/type.ts'
export default {
    props: ['categorys'],
    components: {
        'vanSwipe' :Swipe, 'vanSwipeItem': SwipeItem, VanImage
    }
}
</script>
<style lang="less" scoped>
.category-rank {
    margin-top: 0.57rem;
    padding: 0 0.45rem 0.58rem;
    border-bottom: 0.02rem #2f343c solid;
    .top {
      width: 100%;
      height: 0.34rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
      .title {
        font-family: PingFang-SC-Medium;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #ffffff;

      }
      .see-all {
        font-family: PingFang-SC-Medium;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #a2a8ba;
      }
    }
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      position: relative;
      .type {
        position: absolute;
        left: 0.2rem;
        bottom: 0;
        font-family: PingFang-SC-Bold;
        font-size: 0.28rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #ffffff;
      }
    } 
  }
</style>