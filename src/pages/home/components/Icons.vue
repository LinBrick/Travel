<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
              <div class="icon-img">
                <img class="icon-img-content" :src="item.url"/>
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
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [
        {
          id: '0000001',
          url: require('@/assets/images/index-icon1.png'),
          desc: '景点门票'
        },
        {
          id: '0000002',
          url: require('@/assets/images/index-icon2.png'),
          desc: '广州必游'
        },
        {
          id: '0000003',
          url: require('@/assets/images/index-icon3.png'),
          desc: '动植物园'
        },
        {
          id: '0000004',
          url: require('@/assets/images/index-icon4.png'),
          desc: '游乐场'
        },
        {
          id: '0000005',
          url: require('@/assets/images/index-icon5.png'),
          desc: '珠江夜游'
        },
        {
          id: '0000006',
          url: require('@/assets/images/index-icon6.png'),
          desc: '泡温泉'
        },
        {
          id: '0000007',
          url: require('@/assets/images/index-icon7.png'),
          desc: '一日游'
        },
        {
          id: '0000008',
          url: require('@/assets/images/index-icon8.png'),
          desc: '展馆展览'
        },
        {
          id: '0000009',
          url: require('@/assets/images/index-icon9.png'),
          desc: '玩转长隆'
        },
        {
          id: '0000010',
          url: require('@/assets/images/index-icon10.png'),
          desc: '农家度假'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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

 .icons{
   overflow:hidden;
   .icon{
     overflow:hidden;
     float:left;
     width:25%;
     height:0;
     padding-bottom:25%;
     position: relative;
     .icon-img{
       position: absolute;
       top:0;
       left:0;
       right:0;
       bottom:rem(20px);
       box-sizing: border-box;
       padding:rem(5px);
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
