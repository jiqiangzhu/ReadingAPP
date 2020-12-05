<template>
    <div class="new-pub-com">
        <div class="new-publish">
            <div class="top">
                <span class="title">新发布</span>
                <span class="see-all">查看全部></span>
            </div>
            <van-grid :column-num="3"  :clickable="true" :border="false">
                <van-grid-item v-for="(item, i) in newRanks" :key="i"  :text="item.name">
                    <van-image :width="90" :height="148" :radius="5" :src="item.pic_url" />
                    <div class="brief">
                        <span class="name">{{item.name}}</span>
                        <span class="author">{{item.author}}</span>
                    </div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>
<script>
import { Grid, GridItem, Image as VanImage } from 'vant';

export default {
    props: ['newRanks'],
    components: {
        'van-grid': Grid, 'van-grid-item': GridItem, VanImage
    }
}
</script>
<style lang="less" scoped>
.new-publish {
    width: 7.5rem;
    margin-top: 0.57rem;
    padding: 0 0.24rem 0.58rem;
    border-bottom: 0.02rem #2f343c solid;
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
      .see-all {
        font-family: PingFang-SC-Medium;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #a2a8ba;
      }
    }
    .brief {
      margin-top: 0.35rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        	font-family: PingFang-SC-Bold;
          font-size: 0.28rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0rem;
          color: #ffffff;
          padding-bottom: 0.14rem;
      }
      .author {
        font-family: PingFang-SC-Medium;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #5d637c;
      }
    }
  }
</style>