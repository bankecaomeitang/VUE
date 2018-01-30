import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/product'
import Info from '@/components/info'
import Select from '@/components/select'
import My01 from '@/components/my01'
import Loading from '@/components/loading'
import testButton from '@/view/testButton'
import MyButton from '@component/myButton'

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
    }, {
      path: '/Select',
      name: 'Select',
      component: Select
    }, {
      path: '/My01',
      name: 'My01',
      component: My01
    }, {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }, {
      path: '/testButton',
      name: 'testButton',
      component: testButton
    }, {
      path: '/MyButton',
      name: 'MyButton',
      component: MyButton
    }
  ]
})
