import myRequest from '../index'

import type { IAccount, ILoginResult } from './type'
import type { IDataType } from '../type'

// 定义请求路径
enum LoginAPI {
  AccountLogin = '/login',
  TokenLogin = '/auth',
  LoginUserInfo = '/user/',
  UserMenu = '/system/menu/list', // 临时
}

// 用户账户登录请求
export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}

export function tokenLoginRequest(token: string) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.TokenLogin,
    data: { token },
  })
}

// 获取登录用户信息请求
export function getUserInfoById(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false,
  })
}

// 获取登录用户菜单请求
export function getUserMenuByRoleId() {
  return myRequest.post<IDataType>({
    url: LoginAPI.UserMenu,
    showLoading: false,
  })
}
