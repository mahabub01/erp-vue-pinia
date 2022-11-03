const routes = {
  path: '/auth',
  name: 'auth',
  redirect: '/auth/login',
  // component: () => import('@/layout/auth/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('@/views/auth/Login.vue')
    }
  ]
}

export default routes