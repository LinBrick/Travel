<template>
    <div class="weekend">
        <h2 class="weekend-title">周末去哪儿</h2>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
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
  props: {
    list: Array
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

