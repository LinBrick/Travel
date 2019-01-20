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
            城市<span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/function.scss';
.header{
    display: flex;
    line-height:rem(86px);
    background: #00bcd4;
    color:#fff;
    .header-left{
        width:rem(64px);
        float:left;
        .back-icon{
            font-size:rem(30px);
            text-align: center;
        }
    }
    .header-input{
        flex:1;
        background: #fff;
        height:rem(64px);
        line-height:rem(64px);
        margin-top:rem(12px);
        margin-left:rem(20px);
        border-radius: rem(5px);
        color:#ccc;
        padding-left:rem(10px);
        font-size:rem(24px);
    }
    .header-right{
        width:rem(124px);
        float:right;
        text-align: center;
        .arrow-icon{
            font-size:rem(24px);
        }
    }
}
</style>

