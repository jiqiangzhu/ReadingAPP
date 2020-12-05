<template>
    <div id="top-nav">
        <div class="left">
            {{currentTime}}
        </div>
        <div class="right">
            <span class="iconfont icon-xinhao"></span>
            <span class="iconfont icon-wuxian"></span>
            <span class="iconfont icon-iconset0252"></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTime: ''
        }
    },
    created() {
        setInterval(()=>{
            this.currentTime = new Date().getHours() + ':' + new Date().getMinutes() 
        }, 1000)
        
    }
}
</script>
<style lang="less" scoped>
#top-nav {
    width: 6.56rem;
    height: 0.27rem;
    position: fixed;
    top: 0.34rem;
    left: 0.5rem;
    z-index: 10000;
    color: #fff;
    background: #21272E;
    display: flex;
    justify-content: space-between;
    .right {
        display: flex;
        justify-content: space-around;
        .iconfont {
            margin-left: 0.2rem;
        }
    }
}
</style>