<template>
  <div>
      <p class="myCount"><button @click="add(); incrementCounter()">+</button><span>{{ num }}</span><button @click="reduce(); incrementCounter()">-</button></p>
  </div>
</template>

<script>
export default {
  props: [ 'uNum' ],
  data () {
    return {
      num: this.uNum
    }
  },
  methods: {
    add: function () {
      this.num++
    },
    reduce: function () {
      this.num--
    },
    incrementCounter: function () {
      this.$emit('increment', this.num)
    }
  }
}
</script>

<style>
.myCount button, .myCount span{display: inline-block; width: 50px; height: 50px; text-align: center; line-height: 50px; font-size: 24px;}
</style>
