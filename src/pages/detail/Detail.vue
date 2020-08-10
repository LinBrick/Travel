<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(result => {
          result = result.data
          if (result.ret && result.data) {
            const data = result.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        })
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
// .content{
//     height:rem(2000px);
// }
</style>

