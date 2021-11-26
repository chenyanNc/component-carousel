<template>
  <div id="app">
    <div class="container">

      <!-- 使用轮播组件 -->
      <carousel
        :autoplay="true"
        :duration="3000"
        :instial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item v-for="(item, index) of carData" :key="index">
          <div class="item-img" :style="{backgroundColor: item.color, 'color': '#fff'}">{{item.label}}</div>
        </car-item>
      </carousel>


    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      carData: [
        {color: '#c01ddd', label: '图片1'},
        {color: 'blue', label: '图片2'},
        {color: 'grey', label: '图片3'},
        {color: 'orange', label: '图片4'}
      ]
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

  .container{
    width: 520px;
    height: 280px;
    
    margin: auto;
  }

  .item-img{
    width: 100%;
    height: 100%;
  }

</style>
