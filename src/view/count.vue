<template>
  <div>
    <my-count :uNum = 'nums'></my-count>
  </div>
</template>

<script>
import myCount from '../components/myCount.vue'

export default {
  components: {
    myCount
  },
  data () {
    return {
      nums: 15
    }
  }
}
</script>

<style>

</style>
