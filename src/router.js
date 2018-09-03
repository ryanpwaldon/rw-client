import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import store from '@/store'

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
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.authenticated && to.name !== 'login') router.push('/login')
  next()
})

export default router
