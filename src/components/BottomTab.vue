<template>
    <div class="home-bottom">
        <van-tabbar v-model="active" active-color="#ff0000">
            <van-tabbar-item name="home" @click="$router.push('/home')" icon="home-o"></van-tabbar-item>
            <van-tabbar-item name="search" @click="$router.push('/explore')" icon="browsing-history-o"></van-tabbar-item>
            <van-tabbar-item name="book" icon="bookmark-o"></van-tabbar-item>
            <van-tabbar-item name="me" icon="friends-o"></van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
export default {
    data() {
        return {
            active: true
        }
    },
    components: {
        'vanTabbar': Tabbar, 'vanTabbarItem': TabbarItem
    }
}
</script>