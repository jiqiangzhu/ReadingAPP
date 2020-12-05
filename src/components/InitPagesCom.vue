<template>
    <div class="init-page">
        <van-swipe class="my-swipe" :loop="false" indicator-color="white">
            <van-swipe-item v-for="(item, i) in initPages" :key="i">
                <div class="content">
                    <div class="title">{{ title }}</div>
                    <img :src="item.pic_url" class="swipeImg" alt="">
                    <div class="sname">{{item.name}}</div>
                    <div class="author">{{item.author}}</div>
                </div>
                <Button class="enter-btn" @click="$router.push('/home')" v-show="i==2" size="large" color="#2E363F">进入</Button>
                <p>{{i}}</p>
                <HomeBtn :isShow="false"/>
            </van-swipe-item>
            
        </van-swipe>
        
    </div>
        
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getYDaoImg } from '../api/'
import { Button } from 'vant';
import { mapMutations, mapState } from 'vuex';
import HomeBtn from './HomeBtn.vue'
import { Search, Swipe, Skeleton as vanSkeleton, SwipeItem as VanSwipeItem, Col as vanCol, Row as vanRow, Image as VanImage, Grid as VanGrid, GridItem as VanGridItem } from 'vant'
interface InitPagesTy {
    pic_id: number;
    pic_url: string;
    name: string;
    author:string;
}
@Options({
  components: {
    'van-search': Search,
    'van-swipe': Swipe,
    VanSwipeItem, HomeBtn,
    VanImage, VanGrid, VanGridItem, vanCol, vanRow, vanSkeleton, Button
  },
})
export default class InitPagesCom extends Vue {
  initPages: InitPagesTy[] = []
  title:string = ''
  async created() {
    let res = await getYDaoImg()
    console.log(res);
    this.initPages = res.data.initPages
    console.log(this.initPages);
    this.title = res.data.title
  }
  methods = {
    ...mapMutations(['setHomeShow'])
  }
}
</script>
<style lang="less">
.init-page {
    width: 7.5rem;
    height: 16.24rem;
    
    .my-swipe  {
        width: 7.5rem;
        height: 16.24rem;
        position: relative;
        background: #21272E;
        .content {
            width: 4.82rem;
            height: 11.68rem;
            position: absolute;
            left: calc(50% - 2.41rem);
            top: 1.92rem;
            .title {
                width: 3.6rem;
                height: 1.29rem;
                font-family: PingFang-SC-Heavy;
                font-size: 0.6rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: 0.64rem;
                letter-spacing: 0rem;
                color: #ffffff;
                background: transparent;
                position: absolute;
                left: 0.65rem;
                top: 0rem;
                z-index: 10;
            }
            .swipeImg {
                width: 4rem;
                height: 6rem;
                position: absolute;
                left: 0.4rem;
                top: 2.34rem;
            }
            .sname {
                width: 100%;
                text-align: center;
                height: 0.42rem;
                font-family: PingFang-SC-Heavy;
                font-size: 0.44rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rem;
                color: #ffffff;
                position: absolute;
                top: 8.9rem;
            }
            .author {
                width: 100%;
                text-align: center;
                height: 0.36rem;
                font-family: PingFang-SC-Medium;
                font-size: 0.36rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rem;
                color: #656a7b;
                position: absolute;
                top: 9.62rem;
            }
        }
        .enter-btn {
            position: absolute;
            left: 0;
            bottom: 0.4rem;
        }
        .van-swipe__indicators {
            width: 1.48rem;
            height: 0.12rem;
            position: absolute;
            left: 50%;
            bottom: 2.64rem;
            display: flex;
            justify-content: space-between;
            i {
                width: 0.36rem;
                height: 0.12rem;
                background-color: #d9dade;
            }
        }
    }
}


</style>