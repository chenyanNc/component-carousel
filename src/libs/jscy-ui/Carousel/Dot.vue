<template>
  <div class="dot-wrapper">
    <div 
      class="dot-item"
      v-for="item in itemLen"
      :key="item"
    >
      <a 
        class="dot-link"
        href="javascript:;"
        :style="{backgroundColor: (item - 1) === currentIndex ? dotBgColor : '#fff'}"
        @click="chooseCurrent(item - 1)"
        ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    itemLen: Number, // 轮播的张数
    currentIndex: Number, // 当前下标
    // 是否展示 指示器
    hasDot: {
      type: Boolean,
      default: true
    },
    // 指示器背景颜色
    dotBgColor: {
      type: String,
      default: '#ff5000'
    }
  },
  methods: {

    // 指示器点击事件
    chooseCurrent(index) {
      // console.log('点击')
      this.$emit('dotClick', index)
    }


  }



}
</script>

<style scoped>

  .dot-wrapper{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot-item{
    margin: 2px;
  }

  .dot-item .dot-link{
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }

</style>