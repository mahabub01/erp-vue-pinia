import tokenService from '../core/services/tokenService'
import { sendPost} from "../core/services/apiService"
import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: true,
    user: null,
    error: [],
    isAuthenticated: false
  }),
  getters: {
  },
  actions: {
    login(credentials) {
      const appStore = useAppStore()

      this.isLoading = true
      sendPost('auth/login', credentials)
        .then(response => {
          appStore.$patch({toast: { detail: response.message, severity: 'success' }})
          tokenService.saveToken(response.data.token)

          this.user = response.data.user
          this.isAuthenticated = true
        })
        .catch(error => {
          appStore.$patch({toast: { detail: error.message, severity: 'error', visible: true }})
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    logout() {
      const appStore = useAppStore()

      this.isLoading = true
      sendPost('auth/logout')
        .then(response => {
          this.user = null
          this.isAuthenticated = false
          appStore.$patch({ toast: { detail: response.message, severity: 'success'}})
          tokenService.destroy()
        })
        .catch(error => {
          appStore.$patch({toast: { detail: error.message, severity: 'error', visible: true }})
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
})
