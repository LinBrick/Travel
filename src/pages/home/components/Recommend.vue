<template>
    <div class="recommend">
        <div class="recommend-title">
            <img class="recommend-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span class="recommend-title-text">猜你喜欢</span>
        </div>
        <ul>
            <li class="item">
                <img class="item-img" src="http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_200x200_f3ad8918.jpg" />
                <div class="item-info">
                    <p class="item-title">长隆国际大马戏剧院</p>
                    <p class="item-desc">30206条评论</p>
                    <p class="item-price">￥299起</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
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
        height:rem(137.6px);
        overflow:hidden;
        .item-img{
            width:rem(100px);
            height:rem(100px);
            padding:rem(10px);
        }
        .item-info{
            flex:1;
            padding:rem(10px) 0;
        }
    }
}

</style>

