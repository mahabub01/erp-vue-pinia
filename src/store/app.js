import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      toast: {
        summary: 'Thông báo',
        detail: '',
        severity: 'error', // success, error, warn, info
        life: 5000,
        visible: false
      }
    }
  },
  getters: {
    getToast: (state) => state.toast
  },
  actions: {

  }
})