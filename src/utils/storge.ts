class MYStorage {
  private storage: Storage

  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key: string): any {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index: number) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

const _localStorage = new MYStorage()
const _sessionStorage = new MYStorage(false)

export { _localStorage, _sessionStorage }
