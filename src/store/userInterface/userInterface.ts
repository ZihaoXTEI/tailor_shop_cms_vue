import { defineStore } from 'pinia'

export const userInterfaceStore = defineStore('userInterface', {
  state: () => {
    return {
      menu: [],
    }
  },
})
