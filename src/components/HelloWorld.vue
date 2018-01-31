<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <my-button></my-button>
    <my-count></my-count>
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
      msg: 'Welcome to Your Vue.js App'
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
