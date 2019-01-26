<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.header{
    display: flex;
    line-height:rem(44px);
    height:rem(44px);
    background: $bgColor;
    color:#fff;
    .header-left{
        width:rem(41px);
        float:left;
        .back-icon{
            font-size:rem(15px);
            text-align: center;
            font-weight: bold;
        }
    }
    .header-input{
        flex:1;
        background: #fff;
        height:rem(30px);
        line-height:rem(30px);
        margin-top:rem(7px);
        border-radius: rem(3px);
        color:#e4e7ea;
        padding-left:rem(10px);
        font-size:rem(15px);
    }
    .header-right{
        width:rem(66px);
        float:right;
        text-align: center;
        .arrow-icon{
            margin-left:rem(2px);
            font-size:rem(10px);
        }
    }
}
</style>

