<template>
  <div id="theme-ys">
    <a-scene>
      <a-sky :src="vrbg_src" rotation="0 0 0"></a-sky>
      <a-entity rotation="12 0 -10" animation="property: rotation;from:12 0 -10; to:12 165 -10 ;easing:easeInOutBack;dur: 120000;dir:alternate;loop: true">
        <a-camera zoom="0.65"></a-camera>
      </a-entity>

    </a-scene>
    
    <div class="modal">
      <div id="left-menu" :class="leftmenu">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <span>.Club</span>
        </div>
        <div id="menu-list">
          <div v-for="(item,index) in menuList" :key="index">
            <div v-if="index == 0" class="menu-item active">
              <a>{{ item.text }}</a>
            </div>
            <div v-else class="menu-item">
              <a>{{ item.text }}</a>
            </div>
          </div>
        </div>
      </div>
      <div id="content" :class="mobile">
        <div id="footer" :class="'dweb '+mobile" style="margin-bottom: 20px;">
          <a href="https://space.bilibili.com/22690066" class="btn btn-blue" style="width: 180px;border-radius: 5px;" target="__blank">
            <i class="iconfont icon-bilibili-fill"></i>
            点个关注吧
          </a>
        </div>
        <div id="body" class="dweb">
          <div @click="showHiddeLeftMenu"
            style="background: #00000060;padding: 10px 20px;width: 40px;text-align: center;;cursor: pointer;font-size: 20px;font-weight: 700;color: rgb(255,200,21);float: right;">
            导航伸缩
          </div>
          <div @click="changeBg"
            style="background: #00000060;padding: 10px 20px;width: 40px;text-align: center;;cursor: pointer;font-size: 20px;font-weight: 700;color: rgb(255,200,21);float: right;margin-right: 2px;">
            切换背景
          </div>
          <div>
            加载 和 换图可能需要多等等···
          </div>
        </div>
        
      </div>
      
    </div>

  </div>
</template>

<script>
  require('aframe');
  import { ref } from 'vue'
  import { useRouter } from "vue-router";
  export default {

    setup() {
      const router = useRouter()
      const windowWidth = document.body.clientWidth
      const leftmenu = ref('')
      const mobile = ref('')
      const routePath = ref('/')
      const menuList = [
        { text: '示例', url: '/' },
        { text: '示例', url: '/1' },
        { text: '示例', url: '/2' },
        { text: '示例', url: '/3' }
      ]
      const vrbg = ref(false)
      const bgimg_list = ['https://cdn.dweb.club/image/default/A96A33C950E64DF483F3616C6E37444E-6-2.jpg','https://cdn.dweb.club/image/default/22609A85458049AD8D5D8B62345C14D6-6-2.jpg','/img/sky.jpg','/img/test2.jpg']
      const vrbg_src = ref(bgimg_list[0])

      //窄屏响应
      if (windowWidth < 960) {
        mobile.value = 'xs'
        leftmenu.value = 'xs'
      }

      //跳转功能
      function routerLinkTo(url) {
        router.push({ path: url })
        routePath.value = url
      }

      //隐藏左侧导航
      function showHiddeLeftMenu() {
        if (windowWidth < 960) {
          if (leftmenu.value == 'xs') {
            leftmenu.value = ''
          } else {
            leftmenu.value = 'xs'
          }
        } else {
          if (leftmenu.value == 'xs') {
            leftmenu.value = ''
            mobile.value = ''
          } else {
            leftmenu.value = 'xs'
            mobile.value = 'xs'
          }
        }

      }

      function changeBg() {
        vrbg.value = !vrbg.value
        if (vrbg.value==true) {
          vrbg_src.value = bgimg_list[1]
        }else{
          vrbg_src.value = bgimg_list[0]
        }
      }

      return {
        menuList: menuList,
        mobile: mobile,
        leftmenu: leftmenu,
        routerLinkTo: routerLinkTo,
        showHiddeLeftMenu: showHiddeLeftMenu,
        routePath: routePath,
        vrbg_src:vrbg_src,
        changeBg:changeBg
      }
    }
  }
</script>

<style scoped>
  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 900;
  }

  #content #body {
    min-height: 80vh;
  }
</style>