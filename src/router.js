import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./components/Posts.vue')
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('./components/Post.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./components/Categories.vue')
    },
    {
      path: '/categories/:id',
      name: 'category',
      component: () => import('./components/Category.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
  ]
})