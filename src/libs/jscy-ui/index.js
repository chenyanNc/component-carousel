import Vue from 'vue';
import Carousel from './Carousel/index.vue';
import CarIterm from './Carousel/Item.vue';


let JscyUI = {}


// 全局注册组件
JscyUI.install = ((Vue) => {

  // Carousel.name 是 script中 的 name
  Vue.component(Carousel.name, Carousel);

  Vue.component(CarIterm.name, CarIterm)

})



// 将组件暴露
export default JscyUI;