import { createApp } from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'

import './style.css'
import 'normalize.css'
import './assets/iconfont/iconfont.js'

import { globalRegister } from './global'
import { _sessionStorage } from './utils/storge'
import StorageKey from './constants/storageKey'
import { mapMenuToRoutes } from './utils/mapMenu'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
setRouter()
app.use(router)

app.mount('#app')

function setRouter() {
  const userMenu = _sessionStorage.getItem(
    `${StorageKey.STORE_PREFIX}-login`,
  )?.userMenu
  if (userMenu) {
    const routes = mapMenuToRoutes(userMenu)
    // 将生成的 routes 加入至路由表 main-page 页面的children下
    routes.forEach((route) => {
      router.addRoute('main-page', route)
    })
  }
}
