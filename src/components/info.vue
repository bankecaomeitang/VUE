<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/product">去商品列表</router-link>
    <table>
      <tr>
        <td>商品名称</td>
        <td>数量</td>
        <td></td>
        <td>单价</td>
        <td>总价</td>
        <td>操作</td>
      </tr>
      <tr v-for="(cart,index) in cartlist" :key="index">
        <td>{{cart.name}}</td>
        <td>{{cart.count}}</td>
        <td><button @click="$store.commit('add',{id: cart.id})">+</button><button @click="$store.commit('reduce',{id: cart.id})">-</button></td>
        <td>{{cart.price}}</td>
        <td></td>
        <td><button @click="$store.commit('delshop',{id: cart.id})">移出购物车</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'info',
  data () {
    return {
      msg: '购物车'
    }
  },
  computed: mapState({
    cartlist: state => state.cartlist
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{width: 1000px;margin: 0 auto;text-align: center;}
</style>
