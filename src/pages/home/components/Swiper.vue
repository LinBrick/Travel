<template>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length >= 1
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff;
}
.wrapper{
    overflow: hidden;
    width:100%;
    height:0;
    padding-bottom: 30%;
    .swiper-img{
        width:100%;
    }
}   
</style>