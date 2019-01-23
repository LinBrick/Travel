<template>
    <div class="weekend">
        <h2 class="weekend-title">周末去哪儿</h2>
        <ul>
            <li class="item" v-for="item in itemList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUlr" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      itemList: [
        {
          id: '000000000000001',
          imgUlr: require('@/assets/images/weekend1.jpg'),
          title: '清远周边逛',
          desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
        },
        {
          id: '000000000000002',
          imgUlr: require('@/assets/images/weekend2.jpg'),
          title: '浮在海上的绿洲',
          desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
        },
        {
          id: '000000000000003',
          imgUlr: require('@/assets/images/weekend3.jpg'),
          title: '粤西温泉',
          desc: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
        },
        {
          id: '000000000000004',
          imgUlr: require('@/assets/images/weekend4.jpg'),
          title: '广州必打卡',
          desc: '感受现代与传统相融合的广州'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.weekend{
    .weekend-title{
        padding:rem(16px) 0;
        text-indent:rem(15px); 
    }
    .item{
        background: #fff;
        margin-bottom:rem(10px);
        .item-img-wrapper{
            overflow:hidden;
            height:0;
            padding-bottom:33.9%;
            .item-img{
                width:100%;
            }
        }
        .item-info{
            padding:rem(7px) rem(10px) rem(10px) rem(10px);
            .item-title{
                @include ellipsis();
                color: #212121;
                font-size:rem(14px);
                line-height:rem(24px);
                padding-right:rem(70px);
            }
            .item-desc{
                @include ellipsis();
                padding-right:rem(70px);
                font-size:rem(12px);
                line-height:rem(21px);
                color: #616161;
            }
        }
    }
}

</style>

