<template>
    <div class="city-search">
        <div class="action-search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
    .search-content{
        overflow: hidden;
        position: absolute;
        top:rem(75px);
        left:0;
        right:0;
        bottom:0;
        background: eee;
        z-index:1;
        .search-item{
            line-height:rem(30px);
            padding-left:rem(10px);
            background: #fff;
            color:#666;

        }
    }
}
</style>

