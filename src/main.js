import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import dweb from 'dweb-toolbox/index'
// import "dweb-toolbox/assets/css/dwebstyle.css"
import "../src/assets/css/mystyle.css"
import "./assets/css/icon/iconfont.css"
createApp(App).use(store).use(router).mount('#app')
