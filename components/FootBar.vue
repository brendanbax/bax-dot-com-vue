<template>
  <footer class="f-bg">
    <p class="txt-body t-fg">{{ time }}</p>
  </footer>
</template>

<script>
  export default {
    name: 'FootBar',
    computed: {
      time() {
        return 'now'
      }
    }
  }
</script>

<style scoped>

</style>