import user from './user'

const admin = {
  namespaced: true,
  state: () => ({ 
    count: 0
   }),
  getters: {
    isAdmin () { 

     }
  },
  actions: {
    login () { 

     }
  },
  mutations: {
    login () { 

     }
  },

  modules: {
    user
  }
}

export default admin