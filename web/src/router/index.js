import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/login/LoginIndex.vue'
import DashBoard from "@/views/dashboard/DashBoard.vue";
import HomeView from "@/views/first/HomePageView.vue";
import ProductView from "@/views/product/ProManagerView.vue";
// import TestIndex from '@/components/testIndex.vue'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard/home',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    redirect: '/dashboard/home',
    meta: {

    },
    children: [
      {path: 'home', name: 'home', component: HomeView, meta: {label: '主页'},},
      {path: 'product', name: 'product', component: ProductView, meta: {label: '产品信息'},},
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginIndex,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
