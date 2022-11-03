
const routes = {
  path: 'organization',
  name: 'organization',
  redirect: '/hrm/organization/employees',
  // component: () => import('@/layout/hrm/organization/OrganizationLayout.vue'),
  children: [
    {
      path: 'employees',
      name: 'employees',
      component: () => import('@/views/hrm/organization/EmployeesView.vue')
    }
  ]
}

export default routes