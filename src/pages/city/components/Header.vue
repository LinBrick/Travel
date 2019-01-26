<template>
    <div class="header">
        <h1>城市选择</h1>
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.header{
    overflow: hidden;
    height:rem(34px);
    line-height:rem(34px);
    background: $bgColor;
    color:#fff;
    text-align: center;
    position: relative;
    font-size:rem(16px);
    .back-icon{
        width:rem(41px);
        position: absolute;
        left:0;
        top:0;
        font-size:rem(15px);
        text-align: center;
        font-weight: bold;
        color:#fff;
    }
}
</style>

