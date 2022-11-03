const routes = {
  path: "/admin",
  name: "Admin",
  redirect: "/admin/user",
  // component: () => import('@/layout/auth/AuthLayout.vue'),
  children: [
    {
      path: "users",
      name: "UserList",
      component: () => import("@/views/admin/users/UserIndexView.vue"),
    },

    {
      path: "users/create",
      name: "UserCreate",
      component: () => import("@/views/admin/users/UserCreateView.vue"),
    },

    {
      path: "users/:id/edit",
      name: "UserEdit",
      component: () => import("@/views/admin/users/UserEditView.vue"),
    },
    {
      path: "users/details/:id",
      name: "userDetails",
      component: () => import("@/views/admin/users/UserSingleView.vue"),
    },

    {
      path: "roles/roleslist",
      name: "RoleList",
      component: () => import("@/views/admin/roles/RoleIndexView.vue"),
    },
    {
      path: "roles/create",
      name: "RoleCreate",
      component: () => import("@/views/admin/roles/RoleCreateView.vue"),
    },

    {
      path: "roles/:id/edit",
      name: "RoleEdit",
      component: () => import("@/views/admin/roles/RoleEditView.vue"),
    },
    {
      path: "roles/details/:id",
      name: "RoleDetails",
      component: () => import("@/views/admin/roles/RoleSingleView.vue"),
    },

    {
      path: "companies/companieslist",
      name: "CompanyList",
      component: () => import("@/views/admin/companies/CompanyIndexView.vue"),
    },
    {
      path: "companies/create",
      name: "CompanyCreate",
      component: () => import("@/views/admin/companies/CompanyCreateView.vue"),
    },
    {
      path: "companies/:id/edit",
      name: "CompanyEdit",
      component: () => import("@/views/admin/companies/CompanyEditView.vue"),
    },
    {
      path: "companies/details/:id",
      name: "CompanyDetails",
      component: () => import("@/views/admin/companies/CompanySingleView.vue"),
    },
  ],
};

export default routes;
