<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <my-button></my-button>
    <my-count :uNum = 'nums' v-on:increment='total'></my-count>
  </div>
</template>

<script>
import myButton from './myButton.vue'
import myCount from './myCount.vue'
export default {
  components: {
    myButton,
    myCount
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nums: 10
    }
  },
  methods: {
    total: function (value) {
      console.log(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
