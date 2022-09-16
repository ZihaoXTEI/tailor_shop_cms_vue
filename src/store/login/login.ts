import { defineStore } from 'pinia'
import Menu from '../../entities/Menu'
import router from '../../router'
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId,
  tokenLoginRequest,
} from '../../service/login/login'
import { IAccount } from '../../service/login/type'
import { mapMenuToRoutes } from '../../utils/mapMenu'
import { _sessionStorage } from '../../utils/storge'

export const LoginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenu: [] as Menu[],
      permission: [],
    }
  },
  actions: {
    async accountLoginAction(payload: IAccount) {
      try {
        // 用户登录验证
        const loginResult = await accountLoginRequest(payload)
        const { userId, token } = loginResult.data
        this.token = token

        // 获取用户信息
        const userInfoResult = await getUserInfoById(userId)
        this.userInfo = userInfoResult.data

        // 获取用户菜单
        const userMenuResult = await getUserMenuByRoleId()
        this.userMenu = userMenuResult.data.list

        const routes = mapMenuToRoutes(this.userMenu)
        console.log(routes)
        // 将生成的 routes 加入至路由表 main-page 页面的children下
        routes.forEach((route) => {
          router.addRoute('main-page', route)
        })
      } catch (err) {
        _sessionStorage.clear()
        console.log(err)
        return Promise.reject(err)
      }
    },

    async tokenLoginAction(localToken: string) {
      console.log('localToken：', localToken)
      try {
        const loginResult = await tokenLoginRequest(localToken)
        const { userId, token } = loginResult.data
        this.token = token

        // 获取用户信息
        const userInfoResult = await getUserInfoById(userId)
        this.userInfo = userInfoResult.data

        // 获取用户菜单
        const userMenuResult = await getUserMenuByRoleId()
        this.userMenu = userMenuResult.data.list

        const routes = mapMenuToRoutes(this.userMenu)
        console.log(routes)
        // 将生成的 routes 加入至路由表 main-page 页面的children下
        routes.forEach((route) => {
          router.addRoute('main-page', route)
        })
      } catch (err) {
        _sessionStorage.clear()
        console.log(err)
        return Promise.reject(err)
      }
    },
  },
})
