<template>
  <div class="home">
    <HomePage />
    <HomeBtn :isShow="true"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from '@/components/HomePage.vue'
import HomeBtn from '@/components/HomeBtn.vue'
@Options({
  components: {
    HomePage, HomeBtn
  }
  
})
export default class Home extends Vue {

}
</script>
<style lang="less" scoped>

</style>
