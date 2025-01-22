import { createRouter, createWebHistory } from 'vue-router'
import home from '../page/home.vue'
import login from '../page/login.vue'
import register from '../page/register.vue'
import shoppingcar from '../page/shoppingcar.vue'
import payindex from '../page/payindex.vue'
import goodslist from '../page/goodslist.vue'
import myorderlist from '../page/myorderlist.vue'
import paysucess from '../page/paysucess.vue'
import productdetails from '../page/productdetails.vue'
import sureorder from '../page/sureorder.vue'
import getcoupons from '../page/getcoupons.vue'
import mycouponlist from '../page/mycouponlist.vue'
import personalcenter from '../page/personalcenter.vue'
import facetoface from '../page/facetoface.vue'
import { inject } from 'vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: '/',component: () => import('../page/home.vue'), meta: { requiresAuth: false }},
    {path: '/home',name: 'home',component: () => import('../page/home.vue'), meta: { requiresAuth: false }},
    {path: '/login',name: 'login',component: () => import('../page/login.vue'), meta: { requiresAuth: false }},
    {path: '/register',name: 'register',component: () => import('../page/register.vue'), meta: { requiresAuth: false }},
    {path: '/shoppingcar',name: 'shoppingcar',component: () => import('../page/shoppingcar.vue'), meta: { requiresAuth: true }},
    {path: '/payindex',name: 'payindex',component: () => import('../page/payindex.vue'), meta: { requiresAuth: false }},
    {path: '/goodslist',name: 'goodslist',component: () => import('../page/goodslist.vue')},
    {path: '/mycouponlist',name: 'mycouponlist',component: () => import('../page/mycouponlist.vue'), meta: { requiresAuth: true }},
    {path: '/paysucess',name: 'paysucess',component: () => import('../page/paysucess.vue'), meta: { requiresAuth: true }},
    {path: '/productdetails',name: 'productdetails',component: () => import('../page/productdetails.vue'), meta: { requiresAuth: false }},
    {path: '/sureorder',name: 'sureorder',component: () => import('../page/sureorder.vue'), meta: { requiresAuth: true }},
    {path: '/facetoface',name: 'facetoface',component: () => import('../page/facetoface.vue'), meta: { requiresAuth: true }},
    {path: '/getcoupons',name: 'getcoupons',component: () => import('../page/getcoupons.vue'), meta: { requiresAuth: true }},
    {path: '/myorderlist',name: 'myorderlist',component: () => import('../page/myorderlist.vue'), meta: { requiresAuth: true }},
    {path: '/personalcenter',name: 'personalcenter',component: () => import('../page/personalcenter.vue'), meta: { requiresAuth: true }},
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里添加你的认证逻辑
    if (!isAuthenticated()) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

function isAuthenticated() {
  const store = inject('$store');
  // 你的认证逻辑，返回 true 或 false
  return !!store.state.user.user.token
}
export default router
