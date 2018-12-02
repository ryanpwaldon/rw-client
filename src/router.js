import Vue from 'vue'
import Router from 'vue-router'
import main from '@/main'
import store from '@/store'
import projectRoutes from '@/views/Projects/routes/routes'

import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import Projects from '@/views/Projects/Projects'
import Contact from '@/views/Contact/Contact'
import Register from '@/views/Register/Register'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    ...projectRoutes,
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        layout: 'User',
        accessLevel: 1
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
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
