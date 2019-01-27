<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
            <div class="banner-info">
                <div class="banner-title">故宫(AAAAA景区)</div>
                <div class="banner-number"><span class="iconfont arrow-icon">&#xe621;</span> 39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.banner{
    position: relative;
    overflow: hidden;
    height:0;
    padding-bottom:55%;
    .banner-img{
        width:100%;
    }
    .banner-info{
        display:flex;
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        line-height:rem(30px);
        color:#fff;
        background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
        .banner-title{
            flex:1;
            font-size:rem(15px);
            padding: 0 rem(10px);
        }
        .banner-number{
            margin-top:rem(10px);
            padding: 0 rem(10px);
            line-height:rem(15px);
            height:rem(15px);
            border-radius: rem(10px);
            background: rgba(0,0,0,.8);
            font-size:rem(12px);
        }
    }
}
</style>

