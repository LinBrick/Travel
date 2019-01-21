<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
            <img class="swiper-img" src="@/assets/images/banner1.jpg" />
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="@/assets/images/banner2.jpg" />
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="@/assets/images/banner3.jpg" />
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="@/assets/images/banner4.jpg" />
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="@/assets/images/banner5.jpg" />
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
      }
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
    padding-bottom: 31.25%;
    .swiper-img{
        width:100%;
    }
}
    
</style>