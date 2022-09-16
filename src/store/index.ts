import { createPinia } from 'pinia'
import StorageKey from '../constants/storageKey'
import { StorePersistencePlugin } from './plugin'

const store = createPinia()
store.use(
  StorePersistencePlugin({
    prefix: StorageKey.STORE_PREFIX,
    needPersistenceStore: ['login'],
  }),
)

export default store
