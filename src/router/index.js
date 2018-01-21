import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/product'
import Info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    }, {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
