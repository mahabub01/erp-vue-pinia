import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/hrm/organization/employees',
    name: 'attendances',
    component: () => import('@/views/hrm/organization/EmployeesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router