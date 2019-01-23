<template>
    <div class="recommend">
        <div class="recommend-title">
            <span class="iconfont recommend-icon-heart">&#xe703;</span>
            <span class="recommend-title-text">猜你喜欢</span>
        </div>
        <ul>
            <li class="item" v-for="item in itemList" :key="item.id">
                <div class="item-left">
                    <img class="item-img" :src="item.imgUlr" />
                </div>
                <div class="item-tag">{{item.tagName}}</div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <span class="item-score">
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                        </span>
                        <span class="item-comments">{{item.commentNumber}}条评论</span>
                    </p>
                    <p class="item-price">
                        <span class="item-unit-price">￥
                            <em class="item-num">{{item.price}}</em>
                        </span>起
                        <span class="item-address">{{item.address}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      itemList: [
        {
          id: '000000000000001',
          imgUlr: require('@/assets/images/recommend1.jpg'),
          title: '长隆国际大马戏剧院',
          tagName: '随买随用',
          commentNumber: 30206,
          price: 299.9,
          address: '广州长隆...'
        },
        {
          id: '000000000000002',
          imgUlr: require('@/assets/images/recommend2.jpg'),
          title: '长隆野生动物世界',
          tagName: '随买随用',
          commentNumber: 89268,
          price: 209.9,
          address: '广州长隆...'
        },
        {
          id: '000000000000003',
          imgUlr: require('@/assets/images/recommend3.jpg'),
          title: '长隆欢乐世界',
          tagName: '随买随用',
          commentNumber: 48815,
          price: 173.1,
          address: '广州长隆...'
        },
        {
          id: '000000000000004',
          imgUlr: require('@/assets/images/recommend4.jpg'),
          title: '广州长隆旅游度假区',
          tagName: '随买随用',
          commentNumber: 46332,
          price: 69,
          address: '广州长隆...'
        },
        {
          id: '000000000000005',
          imgUlr: require('@/assets/images/recommend5.jpg'),
          title: '碧水湾温泉度假村',
          tagName: '随买随用',
          commentNumber: 1790,
          price: 95,
          address: '从化市'
        },
        {
          id: '000000000000006',
          imgUlr: require('@/assets/images/recommend6.jpg'),
          title: '都喜泰丽温泉度假酒店',
          tagName: '随买随用',
          commentNumber: 578,
          price: 148,
          address: '从化市'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.recommend{
    margin-top:rem(10px);
    background: #fff;
    .recommend-title{
        padding:rem(16px) 0;
        text-indent:rem(15px); 
        .recommend-icon-heart{
            color:rgb(255, 101, 77);
        }
        .recommend-title-img{
            display: inline-block;
            vertical-align: top;
            overflow: hidden; 
            width:rem(15px);
        }
        .recommend-title-text{
            font-size:rem(16px);
            color: #212121;
        }
    }
    .item{
        display: flex;
        height:rem(120px);
        overflow:hidden;
        position: relative;
        border-bottom: 1px solid #e0e0e0;
        .item-left{
            width:rem(100px);
            height:rem(100px);
            padding:rem(10px);
            .item-img{
                width:100%;
                height:100%;
            }
        }
        .item-tag{
            position:absolute;
            top:rem(10px);
            left:rem(10px);
            width:rem(53px);
            height:rem(20px);
            color: #fff;
            font-size:rem(9px);
            line-height:rem(20px);
            background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
            text-indent:rem(3px);
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .item-info{
            flex:1;
            .item-title{
                margin-top:rem(26px);
                height:rem(22px);
                color:#212121;
                font-size:rem(16px);
                @include ellipsis();
            }
            .item-desc{
                height:rem(17px);
                line-height:rem(17px);
                .item-score{
                    width:rem(82.5px);
                    height:rem(17px);
                    line-height:rem(17px);
                    display: inline-block;
                    position: relative;
                    .item-icon-star{
                        font-size:rem(10px);
                        color:#ffb436;
                        margin-right:rem(-3px);
                    }
                    .item-comments{
                        color: #616161;
                        font-size: rem(12px);
                        line-height: rem(17px);
                        vertical-align: text-bottom;
                    }
                }
                
            }
            .item-price{
                color: #616161;
                font-size:rem(12px);
                margin-top:rem(10px);
                position:relative;
                .item-unit-price{
                    line-height:rem(20px);
                    font-size:rem(12px);
                    color: #ff8300;
                }
                .item-num{
                    font-size:rem(20px);
                    margin-left:rem(-6px);
                }
                .item-address{
                    position:absolute;
                    right:rem(12px);
                    bottom:0;
                }
            }
            
        }
    }
}

</style>

