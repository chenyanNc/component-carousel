<template>

  <transition>

    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>

  </transition>

</template>

<script>
export default {
  name: 'CarItem',

  data() {
    return{
      selfIndex: '',
      currentIndex:''
    }
  },

  mounted() {

    // 在 this.$parent 中 可以直接获取到上一级的 props 中所有属性
    // this._self 获取当前实例
    this.selfIndex = this._self.$vnode.key
    this.currentIndex = this.$parent.currentIndex

  },

  // 监听下标的变化 (监听  this.$parent.currentIndex)
  watch: {
    '$parent.currentIndex': function (val, oldVal) {
      this.currentIndex = val
     }

  }

}
</script>

<style scoped>

  .car-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }



.v-enter-active,
.v-leave-active {
  /* 所有样式在 0.3s 的时候, 执行 linear 动画 */
  transition: all .3s linear;
}



/* 进入 */
.v-enter-active {
  transition: translateX(100%);
}

.v-enter-to{
  transition: translateX(0);
}



 /* 离开 */
.v-leave-active{
  transition: translateX(0);
}

.v-leave-to {
  transition: translateX(-100%);
}


</style>