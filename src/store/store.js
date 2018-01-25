import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  shoplist: [
    {
      id: 1,
      name: '三星S8',
      price: 1000,
      count: 0
    },
    {
      id: 2,
      name: '三星S8plus',
      price: 2000,
      count: 0
    },
    {
      id: 3,
      name: '苹果8',
      price: 3000,
      count: 0
    }
  ],
  cartlist: [ ]
}
const mutations = {
  add (state, data) {
    for (let i = 0; i < state.shoplist.length; i++) {
      if (data.id === state.shoplist[i].id) {
        state.shoplist[i].count++
        break
      }
    }
  },
  reduce (state, data) {
    for (let i = 0; i < state.shoplist.length; i++) {
      if (data.id === state.shoplist[i].id && state.shoplist[i].count > 0) {
        state.shoplist[i].count--
        break
      }
    }
  },
  shop (state, data) {
    for (let i = 0; i < state.shoplist.length; i++) {
      if (data.id === state.shoplist[i].id) {
        for (let j = 0; j < state.cartlist.length; j++) {
          if (data.id === state.cartlist[j].id) {
            alert('已经有该商品了')
            return
          }
        }
        state.cartlist.push(state.shoplist[i])
      }
    }
  },
  delshop (state, data) {
    for (let i = 0; i < state.cartlist.length; i++) {
      if (data.id === state.cartlist[i].id) {
        state.cartlist.splice(i, 1)
      }
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
