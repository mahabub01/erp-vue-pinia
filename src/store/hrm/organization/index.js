import employees from '@/store/modules/hrm/organization/employees/index'

const organization = {
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
    employees
  }
}

export default organization