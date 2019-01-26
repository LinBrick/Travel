<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showIcons">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
              <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl"/>
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
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
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons() {
      return this.list.length >= 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
  .icons /deep/ .swiper-wrapper{
      height:0;
      padding-bottom:50%;
  }
  .icons /deep/ .swiper-pagination-bullet-active{
    background: $bgColor;
  }

 .icons{
   overflow:hidden;
   background-color: #fff;
   padding-top:rem(10px);
   .icon{
     overflow:hidden;
     float:left;
     width:25%;
     height:0;
     padding-bottom:23%;
     position: relative;
     .icon-img{
       position: absolute;
       top:0;
       left:0;
       right:0;
       bottom:rem(20px);
       box-sizing: border-box;
       padding:rem(10px);
       .icon-img-content{
         display: block;
         margin: 0 auto;
         height:100%;
       }
     }
     .icon-desc{
       position: absolute;
       left:0;
       right:0;
       bottom:0;
       height:rem(30px);
       line-height:rem(30px);
       text-align: center;
       color:$darkTextColor;
       @include ellipsis();
     }
   }
 }
</style>
