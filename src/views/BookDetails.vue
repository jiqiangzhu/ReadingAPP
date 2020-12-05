<template>
    <div class="book-details">
        <div class="top-bar">
            <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            <span class="title">{{state.bookTitle}}</span>
            <span class="iconfont icon-liebiao"></span>
        </div>
        <div class="b-content">
            <div class="b-item" v-for="(item, i) in state.booksList" :key="i">
                <van-image class="item-image" :width="84" :height="125" :src="item.pic_url" />
                <div class="b-brief">
                    <div class="top">
                        <div class="left">
                            <span class="name">{{item.name}}</span>
                            <span class="author">{{item.author}}</span>
                        </div>
                        <span class="iconfont icon-19"></span>
                    </div>
                    <div class="bottom">{{item.brief}}</div>
                </div>
            </div>
        </div>
        <HomeBtn :isShow="true" @click="$router.go(-1)"/>
    </div>
    
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'
import {getBookDetails} from '@/api'
import {Image as VanImage} from 'vant'
import HomeBtn from '@/components/HomeBtn.vue'
export default {
    components: {
        VanImage, HomeBtn
    },
    setup() {
        const route = useRoute();

        const state = reactive({
            bookTitle: '',
            booksList: [{
                pic_url: '',
                name: '',
                author: '',
                brief: ''

            }]
        })
        onMounted(async () => {
            let id = route.query.id
            let result = await getBookDetails(id)
            state.booksList = result.data.books
            state.bookTitle = result.data.bookTitle
            console.log(state);
        })
        return {
            state
        }
    }
}
</script>
<style lang="less" scoped>
.book-details {
    padding-top: 1.08rem;
    display: flex;
    flex-direction: column;
    background: #21272E;
    .top-bar {
        width: 6.54rem;
        height: 0.51rem;
        position: fixed;
        left: 0.48rem;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        .iconfont {
            color: #fff;
            font-size: 0.5rem;
        }
        .title {
            color: #fff;
            font-size: 0.4rem;
        }
    }
    .b-content {
        // height: 20rem;
        width: 7.5rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.65rem;
        background: #21272E;
        .b-item {
            width: 6.54rem;
            height: 3rem;
            margin: 0.56rem auto 0;
            padding-top: 0.56rem;
            position: relative;
            .item-image {
                position: absolute;
                left: 0.32rem;
                top: 0;
                z-index: 100;
            }
            .b-brief {
                width: 6.54rem;
                height: 2.5rem;
                background-color: #2b323b;
                border-radius: 0.2rem;
                .top {
                    width: 6rem;
                    padding-top: 0.3rem;
                    padding-left: 2.29rem;
                    padding-bottom: 0.23rem;
                    display: flex;
                    justify-content: space-between;
                    background: transparent;
                    border-bottom: solid 0.01rem rgba(150,155,175, 0.2);
                    .left {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        .name {
                            font-family: PingFang-SC-Bold;
                            font-size: 0.36rem;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0rem;
                            color: #ffffff;
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
                    .iconfont {
                        color: #fff;
                    }
                }
                .bottom {
                    width: 6rem;
                    height: 0.8rem;
                    margin-top: 0.1rem;
                    padding-left: 2.29rem;
                    margin-bottom: 0.23rem;
                    font-family: PingFang-SC-Medium;
                    font-size: 0.24rem;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 0.36rem;
                    letter-spacing: 0rem;
                    color: #868dab;
                    text-align: left;
                    overflow:hidden; //超出的文本隐藏
                    text-overflow:ellipsis; //溢出用省略号显示
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2; 
                }
            }
        }
    }
    // .b-content {
    //     width: 7.5rem;
    //     display: flex;
    //     flex-direction: column;
    //     .b-item {
    //         width: 7.5rem;
    //         height: 3rem;
    //         position: relative;
    //         margin: 0.6rem 0.48rem 0;
    //         .item-image {
    //             position: absolute;
    //             left: 0.32rem;
    //             top: 0;
    //             z-index: 100;
    //         }
    //         .brief {
    //             width: 6.54rem;
    //             height: 2.5rem;
    //             background-color: #2b323b;
    //             box-shadow: 0rem 0.3rem 0.6rem 0rem 
    //                 rgba(17, 21, 26, 0.1);
    //             border-radius: 0.2rem;
    //             position: absolute;
    //             left: 0;
    //             bottom: 0;
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: space-between;
                
    //             .top {
    //                 width: 6rem;
    //                 padding-top: 0.3rem;
    //                 padding-left: 2.29rem;
    //                 padding-bottom: 0.23rem;
    //                 display: flex;
    //                 justify-content: space-between;
    //                 background: transparent;
    //                 border-bottom: solid 0.01rem rgba(150,155,175, 0.2);
    //                 .left {
    //                     display: flex;
    //                     flex-direction: column;
    //                     align-items: flex-start;
    //                     .name {
    //                         font-family: PingFang-SC-Bold;
    //                         font-size: 0.36rem;
    //                         font-weight: normal;
    //                         font-stretch: normal;
    //                         letter-spacing: 0rem;
    //                         color: #ffffff;
    //                     }
    //                     .author {
    //                         font-family: PingFang-SC-Medium;
    //                         font-size: 0.24rem;
    //                         font-weight: normal;
    //                         font-stretch: normal;
    //                         letter-spacing: 0rem;
    //                         color: #5d637c;
    //                     }
    //                 }
    //                 .iconfont {
    //                     color: #fff;
    //                 }
    //             }
    //             .bottom {
    //                 width: 6rem;
    //                 height: 0.8rem;
    //                 margin-top: 0.1rem;
    //                 padding-left: 2.29rem;
    //                 margin-bottom: 0.23rem;
    //                 font-family: PingFang-SC-Medium;
    //                 font-size: 0.24rem;
    //                 font-weight: normal;
    //                 font-stretch: normal;
    //                 line-height: 0.36rem;
    //                 letter-spacing: 0rem;
    //                 color: #868dab;
    //                 text-align: left;
    //                 overflow:hidden; //超出的文本隐藏
    //                 text-overflow:ellipsis; //溢出用省略号显示
    //                 display:-webkit-box; 
    //                 -webkit-box-orient:vertical;
    //                 -webkit-line-clamp:2; 
    //             }
    //         }
    //     }
    // }
}
</style>
