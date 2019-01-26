<template>
    <ul class="list">
        <li class="item" v-for="(item,key) in cities" :key="item.id">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right:0;
    top:rem(75px);
    bottom:0;
    width:rem(20px);
    .item{
        line-height:rem(20px);
        text-align: center;
        color:$bgColor;
    }
}
</style>

