<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont header-abs-back">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      const minHeight = 60
      const maxHeight = 140
      if (top > minHeight && top < maxHeight) {
        const opacity = top / maxHeight
        this.opacityStyle = {
          opacity
        }
      }
      this.showAbs = top < minHeight
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.header-abs{
    position: absolute;
    left: rem(10px);
    top: rem(10px);
    width: rem(40px);
    height: rem(40px);
    line-height: rem(40px);
    border-radius: rem(20px);
    background: rgba(0,0,0,.8);
    text-align: center;
    .header-abs-back{
        color: #fff;
        font-size: rem(20px);
    }
}
.header-fixed{
    z-index: 2;
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    height:rem(34px);
    line-height:rem(34px);
    background: $bgColor;
    color:#fff;
    text-align: center;
    font-size:rem(16px);
    .header-fixed-back{
        width:rem(41px);
        position: absolute;
        left:0;
        top:0;
        font-size:rem(15px);
        text-align: center;
        font-weight: bold;
        color:#fff;
    }
}
</style>

