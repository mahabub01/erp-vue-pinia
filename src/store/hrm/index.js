import organization from '@/store/modules/hrm/organization/index'

const hrm = {
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
    organization
  }
}

export default hrm