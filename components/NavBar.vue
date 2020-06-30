<template>
  <nav>
    <nuxt-link to="/">About</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style scoped>
  nav {
    height: var(--nav-height);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>