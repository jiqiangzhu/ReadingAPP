<template>
    <div class="home-page">
        <div class="home-top">
            <span class="iconfont icon-jiangbei"></span>
            <span class="iconfont icon-liebiao"></span>
        </div>
        <van-search background="transparent" shape="round" v-model="searchValue" placeholder="搜索..." >

        </van-search>
        <HomeRankCom :categorys="cateRanks"/>
        <HomeRankCom :categorys="authorRanks"/>
        <HomeNewPubCom :newRanks="newRanks" />
        <div class="hot-search">
            <div class="top">
                <span class="title">热门搜索</span>
            </div>
            <div class="hot-content">
                <span class="tag" :class="item.color" v-for="(item, index) in hotSearchs" :key="index">
                {{item.text}}
                </span>
            </div>
        </div>
        <div class="hot-sale">
            <div class="top">
                <span class="title">热销榜</span>
                <span class="see-all">查看全部></span>
            </div>

            <van-swipe class="my-swipe" :height="110" :width="90" :loop="false" :show-indicators="false">
                <van-swipe-item v-for="(item ,i) in authorRanks" :key="i">
                <van-image width="80" height="80" :radius="5" :src="item.pic_url" />
                <span class="type">{{item.name}}</span>
                </van-swipe-item>
            </van-swipe>      
        </div>    
        <BottomTab />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Search, Button, Tabbar, TabbarItem, Grid, GridItem, Swipe, Image as VanImage, SwipeItem } from 'vant';
import {getHomeData} from '@/api'
import HomeBtn from '@/components/HomeBtn.vue'
import HomeRankCom from '@/components/HomeRankCom.vue'
import HomeNewPubCom from '@/components/HomeNewPubCom.vue'
import BottomTab from '@/components/BottomTab.vue'
import '@/assets/common/init.css'
import  '@/type/type.ts'
@Options({
  components: {
    'van-search': Search, 'van-grid': Grid, 'van-grid-item': GridItem, 
    'vanSwipe' :Swipe, 'vanSwipeItem': SwipeItem, VanImage, 'van-button': Button,
    'vanTabbar': Tabbar, 'vanTabbarItem': TabbarItem, HomeBtn, HomeRankCom, HomeNewPubCom,
    BottomTab
  }
  
})
export default class Home extends Vue {
  searchValue:string = ""
  active :boolean = true
  cateRanks :InitPagesTy[] = []
  authorRanks :InitPagesTy[] = []
  newRanks :InitPagesTy1[] = []
  hotSearchs :InitPagesTy2[] = []

  async created() {
    let res = await getHomeData()
    this.cateRanks = res.data.cateRanks
    this.authorRanks = res.data.authorRanks
    this.newRanks = res.data.newRanks
    this.hotSearchs = res.data.hotSearchs
  }
  mounted() {
   
  }
}
</script>
<style lang="less" scoped>
.home-page {
  width: 7.5rem;
  // height: 16.24rem;
  background: #21272E;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  .home-top {
    width: 6.5rem;
    height: 0.33rem;
    margin: 0.2rem 0.5rem 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.33rem;
    color: #fff;

  }

  .hot-search {
    width: 7.5rem;
    margin-top: 0.57rem;
    .top {
      width: 6.6rem;
      height: 0.34rem;
      padding: 0 0.45rem;
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
    }
    .hot-content {
      width: 7.1rem;
      height: 1.33rem;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      .tag {
        height: 0.54rem;
        padding: 0.1rem 0.4rem;
        margin-right: 0.3rem;
        border-radius: 0.27rem;
        font-family: PingFang-SC-Medium;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
      }
    }
  }
  .hot-sale {
    margin-top: 0.57rem;
    
    padding: 0 0.45rem 1.58rem;
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
}
</style>
