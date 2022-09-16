import { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'
import { _sessionStorage } from '../utils/storge'

type Options = {
  // 在缓存时，加一个特殊的前缀，以免造成污染到其他缓存数据
  prefix: string
  // 对于特定store进行持久化，空或者不传，则对所有的 store 进行缓存到本地
  needPersistenceStore?: string[]
}

const StorePersistencePlugin = (options: Options) => {
  const { prefix = 'pinia', needPersistenceStore = [] } = options
  return (context: PiniaPluginContext) => {
    const { store } = context
    const data = _sessionStorage.getItem(`${prefix}-${store.$id}`)
    if (needPersistenceStore.length === 0) {
      store.$subscribe(() => {
        _sessionStorage.setItem(`${prefix}-${store.$id}`, toRaw(store.$state))
      })
    } else {
      needPersistenceStore.includes(store.$id) &&
        store.$subscribe(() => {
          _sessionStorage.setItem(`${prefix}-${store.$id}`, toRaw(store.$state))
        })
    }

    return {
      ...data,
    }
  }
}

export { StorePersistencePlugin }
