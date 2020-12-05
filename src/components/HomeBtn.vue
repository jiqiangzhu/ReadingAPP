<template>
    <div id="homeind" v-show="isShow">
        <div class="homeind"></div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
    props: ['isShow']
}
</script>
<style lang="less" scoped>
#homeind {
    width: 7.5rem;
    height: 0.28rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    background: #2D353D;
    cursor: pointer;
    .homeind {
        width: 2.7rem;
        height: 0.08rem;
        position: absolute;
        left: 2.4rem;
        bottom: 0.16rem;
        background-color: #71768c;
        cursor: pointer;
    }
}

</style>