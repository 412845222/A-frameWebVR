<template>
  <router-view></router-view>
  <canvas id="dweb-live2d"></canvas>
</template>

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        if (window.initLive2D) {
          var resourcesPath = '/model/'; // 指定资源文件（模型）保存的路径
          var backImageName = ''; // 指定背景图片
          var modelDir = ['live2d']; // 指定需要加载的模型
          window.initLive2D(resourcesPath, backImageName, modelDir); // 初始化模型
        }
      })
    },
  }
</script>

<style>
  #dweb-live2d {
    position: fixed;
    width: 500px;
    height: 500px;
    bottom: 0;
    left: 0;
    z-index:9999
  }
</style>