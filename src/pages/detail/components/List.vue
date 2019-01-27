<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.item-title-icon{
    position: relative;
    left: rem(5px);
    top: rem(3px);
    display: inline-block;
    width: rem(16px);
    height: rem(16px);
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: rem(5px);
    background-size: .4rem 3rem;
}
.item-title{
    line-height: rem(40px);
    font-size: rem(16px);
    padding: 0 rem(10px);
}
.item-children{
    padding: 0 rem(15px);
}
</style>

