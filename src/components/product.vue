<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/info">购物车</router-link>
    <table>
      <tr>
        <td>商品名称</td>
        <td>数量</td>
        <td></td>
        <td>单价</td>
        <td>总价</td>
        <td>操作</td>
      </tr>
      <tr v-for="(shop,index) in shoplist" :key="index">
        <td>{{shop.name}}</td>
        <td>{{shop.count}}</td>
        <td><button @click="$store.commit('add',{id: shop.id})">+</button><button @click="$store.commit('reduce',{id: shop.id})">-</button></td>
        <td>{{shop.price}}</td>
        <td></td>
        <td><button @click="$store.commit('shop',{id:shop.id})">加入购物车</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '商品详情页'
    }
  },
  computed: mapState({
    shoplist: state => state.shoplist,
    cartlist: state => state.cartlist
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{width: 1000px;margin: 0 auto;text-align: center;border: 1px solid red;}
</style>
