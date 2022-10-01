import Vue from 'vue'
import VueRouter from 'vue-router'
import he from '@/components/HelloWorld.vue'
// 调用Vue.use()函数把VueRouter安装为Vue的插件

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: he }
  ]
})

export default router
