import Vue from 'vue'
import Router from 'vue-router'
import main from '@/main'
import store from '@/store'
import projectRoutes from '@/views/Projects/routes/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home'),
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects/Projects'),
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    ...projectRoutes,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/Contact'),
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register/Register'),
      meta: { accessLevel: 0 }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise(resolve => {
      main.$root.$once('triggerScroll', () => {
        resolve(savedPosition || { x: 0, y: 0 })
      })
    })
  }
})

router.beforeEach((to, from, next) => {
  const routeAccessLevel = to.meta.accessLevel
  const userAccessLevel = store.getters.user && store.getters.user.accessLevel
  if (typeof routeAccessLevel === 'number') {
    if (typeof userAccessLevel === 'number' && userAccessLevel <= routeAccessLevel) return next()
    return next('/login')
  } else {
    next()
  }
})

export default router
