## vue2.0 封装一个轮播组件源码
```
  npm install  下载依赖
  
  npm run serve  运行项目
  
```



## 组件已发布到 npm 库
```
  https://www.npmjs.com/package/component-carousel
```

## 安装
```
npm install 
```

## 使用
* 在 需要使用的文件中引入
```
// 引入组件库
import JscyUI from "component-carousel/src/libs/jscy-ui"

// 挂载
Vue.use(JscyUI)

```

* 页面中使用

```
  // 注意: 使用时包裹改组件的盒子要给宽高
      <!-- 使用轮播组件 -->
      <carousel
        :autoplay="true"
        :duration="3000"
        :instial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item v-for="(item, index) of carData" :key="index">
          <img class="item-img" :src="require(`./assets/image/${item.img_name}`)" />
        </car-item>
      </carousel>
```


## 属性说明
|  Property  |  Deacription  |  type  |  default  |
|  ----  | ----  |  ----  | ----  |
|  autoplay  |  是否开启自动播放  |  Boolean  |  true  |
|  duration  |  滑动间隔时长  |  Number  |  3000  |
|  instial  |  默认显示第几项(下标)  |  Number  |  0  |
|  hasDot  |  是否显示指示器  |  Boolean  |  true  |
|  hasDirector  |  是否显示方向指示器   | Boolean  |  true  |
|  dotBgColor  |  指示器背景色   | String  |  #ff5000  |
|  dirBgColor  |  方向指示器颜色   | String  |  #fff  |
