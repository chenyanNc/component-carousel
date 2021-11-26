<template>
  <div class="driector">
    <div v-if="dir === 'prev'">
      <a
        href="javascript:;"
        @click="dirClick('prev')"
        class="link-dir iconfont icon-the_next_step"
        :style="{color: dirBgColor}"
      ></a>
    </div>
    <div v-if="dir === 'next'">
      <a
        href="javascript:;"
        @click="dirClick('next')"
        class="link-dir iconfont icon-the_previous_step"
        :style="{color: dirBgColor}"
        ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Driector',
  props: {
    dir: String,
    dirBgColor: {
      type: String,
      default: '#fff'
    }
  },
  methods: {

    dirClick(val) {
      this.$emit('dirClick', val)
    }

  }
}
</script>

<style scoped>
@import url('./iconfont/iconfont.css');

.driector{
  position: absolute;
  top: 0;
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}

.link-dir{
  text-decoration: none;
  font-size: 18px;
}

</style>