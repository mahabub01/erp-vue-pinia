import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => ({
    isLoading: true,
    error: [],
    // user: null,
    // isAuthenticated: false
  }),
  getters: {
    // isAuthenticated: (state) => state.isAuthenticated,
    // authenticatedUser: (state) => state.isAuthenticated?state.user : null,
  },
  actions: {

  }
})