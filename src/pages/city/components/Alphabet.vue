<template>
    <ul class="list">
        <li class="item" 
        v-for="item in letters"
        :key="item" 
        :ref="item"
        @touchstart="handleToTouchStart"
        @touchmove="handleToTouchMove"
        @touchend="handleToTouchEnd"
        @click="handleLetterClick"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick(e) {
      console.log('click')
      this.$emit('change', e.target.innerText)
    },
    handleToTouchStart() {
      this.touchStatus = true
    },
    handleToTouchMove(e) {
      if (!this.touchStatus) return
      const startY = this.$refs['A'][0].offsetTop
      const touchY = e.touches[0].clientY - 73.6
      const index = Math.floor((touchY - startY) / 20)
      if (index >= 0 && index < this.letters.length) {
        this.$emit('change', this.letters[index])
      }
    },
    handleToTouchEnd() {
      this.touchStatus = false
    }
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

