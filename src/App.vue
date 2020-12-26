<template>
  <router-view></router-view>
  <!-- <canvas id="dweb-live2d"></canvas> -->
  <div id="GameDiv">
    <canvas id="GameCanvas" width="100%" height="auto"></canvas>
    <div id="splash">
      <div class="progress-bar stripes">
        <span style="width: 0%"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        // if (window.initLive2D) {
        //   var resourcesPath = '/model/'; // 指定资源文件（模型）保存的路径
        //   var backImageName = ''; // 指定背景图片
        //   var modelDir = ['live2d']; // 指定需要加载的模型
        //   window.initLive2D(resourcesPath, backImageName, modelDir); // 初始化模型
        // }
        if (window.boot) {
          window.boot();
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
    z-index: 9999
  }
  #GameDiv {
    width: 100vw;
    height: 40vh;
    position: fixed;
    bottom: 0;
    z-index: 1001;
  }
</style>