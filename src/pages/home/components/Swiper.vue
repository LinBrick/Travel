<template>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.url" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '000000001',
          url: require('@/assets/images/banner1.jpg')
        },
        {
          id: '000000002',
          url: require('@/assets/images/banner2.jpg')
        },
        {
          id: '000000003',
          url: require('@/assets/images/banner3.jpg')
        },
        {
          id: '000000004',
          url: require('@/assets/images/banner4.jpg')
        },
        {
          id: '000000005',
          url: require('@/assets/images/banner5.jpg')
        }
      ]
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
    padding-bottom: 26.25%;
    .swiper-img{
        width:100%;
    }
}   
</style>