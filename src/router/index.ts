import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import { _sessionStorage } from '../utils/storge'
import StorageKey from '../constants/storageKey'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main-page',
    component: () => import('../views/main/main-page.vue'),
    children: [],
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../views/login/login-page.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = _sessionStorage.getItem(
      `${StorageKey.STORE_PREFIX}-login`,
    )?.token
    if (!token) {
      return '/login'
    }
  }

  return
})

export default router
