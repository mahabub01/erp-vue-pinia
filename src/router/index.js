import {createRouter, createWebHashHistory} from 'vue-router';
import admin from './admin/index'
import hrm from './hrm/index'
import auth from './auth/index'
import {isAuthenticated} from '../core/services/tokenService'

const routes = [
  {
      path: '/',
      name: 'home',
      exact: true,
      component: () => import('../components/Dashboard.vue'),
      meta: {
          breadcrumb: [{ label: 'Dashboard' }],
      },
  },
  {
      path: '/favorites/dashboardanalytics',
      name: 'dashboardanalytics',
      exact: true,
      component: () => import('../components/DashboardAnalytics.vue'),
      meta: {
          breadcrumb: [{ label: 'Dashboard Analytics' }],
      },
  },
  {
      path: '/formlayout',
      name: 'formlayout',
      component: () => import('../components/FormLayoutDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Form Layout' }],
      },
  },
  {
      path: '/invalidstate',
      name: 'invalidstate',
      component: () => import('../components/InvalidStateDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Invalid State' }],
      },
  },
  {
      path: '/input',
      name: 'input',
      component: () => import('../components/InputDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Input' }],
      },
  },
  {
      path: '/floatlabel',
      name: 'floatlabel',
      component: () => import('../components/FloatLabelDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Float Label' }],
      },
  },
  {
      path: '/button',
      name: 'button',
      component: () => import('../components/ButtonDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Button' }],
      },
  },
  {
      path: '/table',
      name: 'table',
      component: () => import('../components/TableDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Table' }],
      },
  },
  {
      path: '/list',
      name: 'list',
      component: () => import('../components/ListDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'List' }],
      },
  },
  {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../pages/TimelineDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Timeline' }],
      },
  },
  {
      path: '/tree',
      name: 'tree',
      component: () => import('../components/TreeDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Tree' }],
      },
  },
  {
      path: '/panel',
      name: 'panel',
      component: () => import('../components/PanelsDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Panel' }],
      },
  },
  {
      path: '/overlay',
      name: 'overlay',
      component: () => import('../components/OverlaysDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Overlay' }],
      },
  },
  {
      path: '/media',
      name: 'media',
      component: () => import('../components/MediaDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Media' }],
      },
  },
  {
      path: '/menus',
      component: () => import('../components/MenusDemo.vue'),
      children: [
          {
              path: '',
              component: () => import('../components/menu/PersonalDemo.vue'),
              meta: {
                  breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
              },
          },
          {
              path: '/menus/seat',
              component: () => import('../components/menu/SeatDemo.vue'),
              meta: {
                  breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
              },
          },
          {
              path: '/menus/payment',
              component: () => import('../components/menu/PaymentDemo.vue'),
              meta: {
                  breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
              },
          },
          {
              path: '/menus/confirmation',
              component: () => import('../components/menu/ConfirmationDemo.vue'),
              meta: {
                  breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
              },
          },
      ],
  },
  {
      path: '/messages',
      name: 'messages',
      component: () => import('../components/MessagesDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Messages' }],
      },
  },
  {
      path: '/file',
      name: 'file',
      component: () => import('../components/FileDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'File' }],
      },
  },
  {
      path: '/chart',
      name: 'chart',
      component: () => import('../components/ChartsDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Charts' }],
      },
  },
  {
      path: '/misc',
      name: 'misc',
      component: () => import('../components/MiscDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'UI Kit', label: 'Misc' }],
      },
  },
  {
      path: '/icons',
      name: 'icons',
      component: () => import('../utilities/Icons.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Icons' }],
      },
  },
  {
      path: '/widgets',
      name: 'widgets',
      component: () => import('../utilities/Widgets.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Widgets' }],
      },
  },
  {
      path: '/grid',
      name: 'grid',
      component: () => import('../utilities/GridDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Grid System' }],
      },
  },
  {
      path: '/spacing',
      name: 'spacing',
      component: () => import('../utilities/SpacingDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Spacing' }],
      },
  },
  {
      path: '/elevation',
      name: 'elevation',
      component: () => import('../utilities/ElevationDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Elevation' }],
      },
  },
  {
      path: '/typography',
      name: 'typography',
      component: () => import('../utilities/Typography.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Typography' }],
      },
  },
  {
      path: '/display',
      name: 'display',
      component: () => import('../utilities/DisplayDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Display' }],
      },
  },
  {
      path: '/flexbox',
      name: 'flexbox',
      component: () => import('../utilities/FlexBoxDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Flexbox' }],
      },
  },
  {
      path: '/text',
      name: 'text',
      component: () => import('../utilities/TextDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Utilities', label: 'Text' }],
      },
  },
  {
      path: '/crud',
      name: 'crud',
      component: () => import('../pages/CrudDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Crud' }],
      },
  },
  {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../pages/CalendarDemo.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Calendar' }],
      },
  },
  {
      path: '/invoice',
      name: 'invoice',
      component: () => import('../pages/Invoice.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Invoice' }],
      },
  },
  {
      path: '/help',
      name: 'help',
      component: () => import('../pages/Help.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Help' }],
      },
  },
  {
      path: '/empty',
      name: 'empty',
      component: () => import('../components/EmptyPage.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Empty Page' }],
      },
  },
  {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../components/Documentation.vue'),
      meta: {
          breadcrumb: [{ parent: 'Pages', label: 'Documentation' }],
      },
  },
  {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
  },
  {
      path: '/error',
      name: 'error',
      component: () => import('../pages/Error.vue')
  },
  {
      path: '/notfound',
      name: 'notfound',
      component: () => import('../pages/NotFound.vue')
  },
  {
      path: '/access',
      name: 'access',
      component: () => import('../pages/Access.vue')
  },
  {
      path: '/landing',
      name: 'landing',
      component: () => import('../pages/Landing.vue')
  },
  {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../pages/ContactUs.vue')
  },
  {
      path: '/blocks',
      name: 'blocks',
      component: () => import('../components/BlocksDemo.vue')
  }
];

routes.push(admin)
routes.push(auth)
routes.push(hrm)

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior () {
        return { left: 0, top: 0 };
    }
})

router.beforeEach(async (to) => {
    if ( !isAuthenticated() && !to.path.includes('/auth/')) {
      // redirect the user to the login page
      return { path: '/auth/login' }
    }
});

export default router;