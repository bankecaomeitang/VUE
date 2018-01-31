<template>
  <div>
      <p class="myCount"><button @click="add">+</button><span>{{ num }}</span><button @click="reduce">-</button></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add: function () {
      this.num++
    },
    reduce: function () {
      this.num--
    }
  }
}
</script>

<style>
.myCount button, .myCount span{display: inline-block; width: 50px; height: 50px; text-align: center; line-height: 50px; font-size: 24px;}
</style>
