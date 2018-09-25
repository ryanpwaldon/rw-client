import Vue from 'vue'
import Router from 'vue-router'
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
        layout: 'Main',
        accessLevel: 1
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects/Projects'),
      meta: {
        layout: 'Main',
        accessLevel: 1
      }
    },
    ...projectRoutes,
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/Gallery/Gallery'),
      meta: {
        layout: 'Main',
        accessLevel: 1
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/Contact'),
      meta: {
        layout: 'Main',
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
  ]
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
