<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="item in hot" 
                        :key="item.id" 
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom" 
                        v-for="innerItem in item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      if (this.letter === '') return
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.border-topbottom{
    &:before{
        border-color: #ccc;
    }
    &:after{
        border-color: #ccc;
    }
}
.border-bottom{
    &:before{
        border-color: #ccc;
    }
}
.city-list{
    overflow: hidden;
    position: absolute;
    top:rem(75px);
    left:0;
    right:0;
    bottom:0;
    .title{
        line-height:rem(30px);
        background: #eee;
        padding-left:rem(10px);
        color:#666;
        font-size:(13px);
    }
    .button-list{
        padding:rem(5px) rem(30px) rem(5px) rem(5px);
        overflow: hidden;
        .button-wrapper{
            float:left;
            width:33.33%;
            .button{
                padding:rem(5px) 0;
                text-align: center;
                margin:rem(5px);
                border:rem(1px) solid #ccc;
                border-radius: rem(3px);
            }
        }
    }
    .item-list{
        .item{
            line-height:rem(15px);
            color:#666;
            padding:rem(10px);
        }
    }
}
</style>

