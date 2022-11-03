import organization from './organization'
// import attendance from './attendance'

const routes = {
  path: '/hrm',
  name: 'hrm',
  redirect: '/hrm/organization/employees',
  // component: () => import('@/layout/hrm/HrmLayout.vue'),
  children: []
}

routes.children.push(organization)
// routes.children.push(attendance)

export default routes