import { defineStore } from 'pinia'

const SETTINGS_LOCAL_STORAGE_KEY = 'gtagSettings'
const STORE_GTAG = 'true'
const getGtagDefault = true

const getGtag = () => {
  const gtagSettings = localStorage.getItem(STORE_GTAG)
  return gtagSettings ? JSON.parse(gtagSettings) : getGtagDefault
}

export const useMainStore = defineStore('main', {
  state: () => ({
    blue: false,
    visibility: 'hidden',
    gtagSettings: getGtag()
  }),
  actions: {
    setColor(val:boolean) {
      // `this` is the store instance
      this.blue = val
    },
    changeVisibility(val:string) {
      this.visibility = val
    },
    updateSettings(gtag: boolean) {
      this.gtagSettings = gtag
      localStorage.setItem(STORE_GTAG, JSON.stringify(this.gtagSettings))
    }
  },
})