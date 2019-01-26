<template>
    <div class="city-search">
        <input type="text" class="search-input" placeholder="输入城市或拼音" />
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.city-search{
    padding:rem(5px);
    background: $bgColor;
    .search-input{
        width:100%;
        height:rem(30px);
        line-height:rem(30px);
        text-align: center;
        border-radius: (5px);
        color:#666;
        box-sizing: border-box;
        padding: 0 rem(10px);
    }
}
</style>

