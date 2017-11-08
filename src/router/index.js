import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => {
        require(['@/components/index.vue'], resolve)
      }
    },
    {
      path: '/page1',
      name: 'page1',
      component: (resolve) => {
        require(['@/components/page1.vue'], resolve)
      }
    },
    {
      path: '/page2',
      name: 'page2',
      component: (resolve) => {
        require(['@/components/page2.vue'], resolve)
      }
    },
    {
      path: '/page3',
      name: 'page3',
      component: (resolve) => {
        require(['@/components/page3.vue'], resolve)
      }
    },
    {
      path: '/page4',
      name: 'page4',
      component: (resolve) => {
        require(['@/components/page4.vue'], resolve)
      }
    },
    {
      path: '/page5',
      name: 'page5',
      component: (resolve) => {
        require(['@/components/page5.vue'], resolve)
      }
    },
    {
      path: '/page6',
      name: 'page6',
      component: (resolve) => {
        require(['@/components/page6.vue'], resolve)
      }
    },
    {
      path: '/page7',
      name: 'page7',
      component: (resolve) => {
        require(['@/components/page7.vue'], resolve)
      }
    },
    {
      path: '/page8',
      name: 'page8',
      component: (resolve) => {
        require(['@/components/page8.vue'], resolve)
      }
    },
    {
      path: '/contact_us',
      name: 'contact_us',
      component: (resolve) => {
        require(['@/components/contact_us.vue'], resolve)
      }
    }
  ]
})

export default router
