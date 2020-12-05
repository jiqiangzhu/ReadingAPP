<template>
    <div class="explore">
        <div class="top-nav">
            <span class="title">探索</span>
            <div class="icon">
                <span class="iconfont icon-heziguanligenduoshangpinkeji"></span>
                <span class="iconfont"></span>
            </div>
            
        </div>
        <div class="ex-content">
            <div class="ex-top">
                <van-image width="195" height="290" :src="topData.pic_url" />
                <span class="name">{{topData.name}}</span>
                <span class="author">{{topData.author}}</span>
            </div>
            <div class="line"></div>
            <div class="avator-list">
                <van-image width="34" :round="true" v-for="(item, i) in avators" :key="i" :src="item.pic_url" />
            </div>
            <div class="recomm">
                <van-image width="36" :round="true" :src="recomm_pic" />
                <div class="right">
                    <span class="author">陈一龙</span>
                    <span class="r-recom">推荐</span>
                </div>
                
            </div>
        </div>
        <BottomTab />
        <HomeBtn :isShow="true" @click="$router.go(-1)"/>

    </div>
</template>
<script>
import HomeBtn from '@/components/HomeBtn.vue'
import BottomTab from '@/components/BottomTab.vue'
import {Image as VanImage} from 'vant'
import {getExploreData} from '@/api/index'
export default {
    data() {
        return {
            topData: {},
            avators: [],
            recomm_pic: ''
        }
    },
    components: {
        HomeBtn, VanImage, BottomTab
    },
    async created() {
        let res = await getExploreData()
        this.topData = res.data.bg
        this.avators = res.data.avators
        this.recomm_pic = res.data.recomm_pic
    }
}
</script>
<style lang="less" scoped>
.explore {
    width: 7.5rem;
    height: 16rem;
    background: #21272E;
    padding-top: 1.08rem;
    display: flex;
    flex-direction: column;
    .top-nav {
        width: 6.54rem;
        height: 0.51rem;
        padding-left: 2.7rem;
        position: fixed;
        left: 0.48rem;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-family: PingFang-SC-Medium;
            font-size: 0.44rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0rem;
            color: #ffffff;
        }
        .icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1rem;
            height: 100%;
            .iconfont:nth-child(1) {
                color: #71768c;
            }
            .iconfont:nth-child(2) {
                width: 0.32rem;
                height: 0.32rem;
                background-color: #ffffff;
            }
        }
        
    }
    .ex-content {
        padding-top: 1.5rem;
        width: 7.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        // height: 18rem;
        .ex-top {
            width: 5.13rem;
            height: 7.7rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .name {
                padding-top: 0.4rem;
                font-family: PingFang-SC-Heavy;
                font-size: 0.44rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rem;
                color: #ffffff;
            }
            .author {
                padding-top: 0.3rem;
            	font-family: PingFang-SC-Medium;
                font-size: 0.36rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rem;
                color: #656a7b;    
            }
        }
        .line {
            width: 4rem;
            height: 0.02rem;
            margin: 0.73rem auto 0;
            background-color: #2e3640;
        }
        .avator-list {
            width: 3.08rem;
            display: flex;
            justify-content: space-between;
            padding-top: 0.5rem;
        }
    }
    .recomm {
        width: 2.38rem;
        height: 0.84rem;
        position: fixed;
        right: 0;
        bottom: 2.28rem;
        background-color: #15191d;
        box-shadow: 0.2rem 0.1rem 0.4rem 0rem 
        #22282d;
        display: flex;
        justify-content: flex-start;
        .right {
            padding-left: 0.1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        .author {
            font-family: PingFang-SC-Medium;
            font-size: 0.24rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0rem;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .r-recom {
            font-family: PingFang-SC-Medium;
            font-size: 0.22rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0rem;
            color: #707483;
        }
    }
}
</style>