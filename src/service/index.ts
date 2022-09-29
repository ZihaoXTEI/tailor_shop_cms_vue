import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import { _sessionStorage } from '@/utils/storge'
import StorageKey from '../constants/storageKey'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      const token = _sessionStorage.getItem(
        `${StorageKey.STORE_PREFIX}-login`,
      )?.token
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
  },
})

export default myRequest
