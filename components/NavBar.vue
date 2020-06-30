<template>
  <nav>
    <div class="logo-container" @click="swap" tabindex="0">
      <Logo class="nav-logo"/>
    </div>
    <span>
      <nuxt-link class="nav-link" to="/">About</nuxt-link>
      <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
    </span>
  </nav>
</template>

<script>
  import Logo from '@/components/Logo';

  export default {
    name: 'NavBar',
    components: {
      Logo,
    },
    methods: {
      swap() {
        this.$emit('swap');
      }
    }
  }
</script>

<style scoped>
nav {
  height: var(--nav-height);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container {
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 999;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  background: var(--t-dk);
  border-radius: .25rem;
  box-shadow: .5rem .5rem 1rem -.25rem var(--t-dk),
              .125rem .125rem .5rem rgba(0,0,0,0.2);
  cursor: pointer;
  transition: border-radius 200ms;
  border: 2px solid transparent;
}
.logo-container:hover,
.logo-container:focus {
  border-radius: 50%;
  transition: border-radius 200ms;
}
.logo-container:focus {
  outline: none;
  border: 2px solid var(--t-brand-lt);
}
.logo-container::after {
  content: "Theme";
  position: absolute;
  bottom: 0;
  width: max-content;
  
  color: var(--t-lt);
  font-family: var(--font);
  font-size: .75rem;
  text-transform: uppercase;
  opacity: 0;
}
.logo-container:hover::after {
  bottom: -1.5rem;
  z-index: 0;
  opacity: 1;
  transition: bottom 200ms 500ms, opacity 200ms 500ms;
}
.nav-logo {
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--t-lt);
}
.nav-link {
  color: var(--t-lt);
  font-family: var(--font);
  text-decoration: none;
  font-size: 1rem;
}
.nav-link:first-child {
  margin-right: 2rem;
}
</style>