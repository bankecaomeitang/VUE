<template>
  <div>
    <div id="counter-event-example">
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal">0</button-counter>
      <button-counter v-on:increment="incrementTotal">0</button-counter>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my01',
  data () {
    return {
      total: 0
    }
  },
  component: ('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }),
  methods: {
    incrementTotal () {
      this.total += 1
    }
  }
}
</script>
