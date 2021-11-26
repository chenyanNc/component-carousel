<template>
  <div
    class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <slot></slot>
    </div>

    <!-- 指示器 -->
    <DotCar
      :currentIndex="currentIndex"
      :itemLen="itemLen"
      :hasDot="hasDot"
      :dotBgColor="dotBgColor"
      @dotClick="dotClick"
    />

    <!-- 两个方向指示器 -->
    <DriCar 
      v-if="hasDirector"
      dir="next"
      @dirClick="dirClick"
      class="dri-next"
      :dirBgColor="dirBgColor"
    />
    <DriCar 
      v-if="hasDirector"
      dir="prev"
      @dirClick="dirClick"
      class="dri-prev"
      :dirBgColor="dirBgColor"
    />

  </div>
</template>

<script>

import DotCar from './Dot.vue'
import DriCar from './Driector.vue'

export default {
  name: 'Carousel',
  components: {
    DotCar,
    DriCar
  },

  props: {

    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true
    },
    // 切换时长
    duration: {
      type: Number,
      default: 6000
    },
    // 默认显示哪一项
    instial: {
      type: Number,
      default: 0
    },
    // 是否展示指示器
    hasDot: {
      type: Boolean,
      default: true
    },
    // 是否展示方向按钮
    hasDirector: {
      type: Boolean,
      default: true
    },
    // 指示器背景色
    dotBgColor: String,

    // 方向指示器的颜色
    dirBgColor: String

  },

  data() {
    return{
      currentIndex: this.instial,
      time: null, // 定义一个计时器
      itemLen: 0, // 轮播的数组长度
    }
  },
  methods: {

    // 自动轮播的方法
    autoPlayFn() {
      if(this.autoplay) {
        this.time = setInterval(() => {
          this.setIndexFn('next')
        }, this.duration)

      }
    },

    // 处理轮播的方向 和 
    // dir 表示轮播的方向
    setIndexFn(dir) {
      switch(dir) {
        case 'next':
          this.currentIndex +=1;
          if(this.currentIndex === this.itemLen) {
            this.currentIndex = 0
          }
          break;
        case 'prev':
          this.currentIndex -=1;
          if(this.currentIndex === -1) {
            this.currentIndex = this.itemLen - 1
          }
          break;
      }

    },

    // 选中指示器, 修改展示下标为当前下标
    dotClick(index) {
      this.currentIndex = index
    },

    // 鼠标移入事件
    mouseEnter() {
      this.clearInter()
    },

    // 鼠标移出事件
    mouseLeave() {
      this.autoPlayFn()
    },


    // 左右指示器点击事件
    dirClick(val) {
      this.setIndexFn(val)
    },  

    //清除定时器
    clearInter() {
      clearInterval(this.time);
      this.time = null
    } 
  },

  // 执行自动播放
  mounted() {

    // 通过 this.$slots 获取到子组件的长度( 也就是遍历了多少项(轮播有多少项))
    this.itemLen = this.$slots.default.length

    this.autoPlayFn()
  },

  // 清除定时器, 并置空 time
  beforeDestroy() {
    this.clearInter()
  }

}
</script>

<style scoped>

  .carousel{
    position: relative;
    width: 100%;
    height: 100%;
  }

  .inner{
    width: 100%;
    height: 100%;
    overflow: hidden;
    } 

  .dri-next{
    left: 0;
  }

  .dri-prev{
    right: 0;
  }
</style>