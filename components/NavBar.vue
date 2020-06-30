<template>
  <nav>
    <div class="logo-container" @click="swap" tabindex="0">
      <Logo class="nav-logo"/>
    </div>
    <span>
      <nuxt-link class="nav-link" exact active-class="link-active" to="/">About</nuxt-link>
      <nuxt-link class="nav-link" exact active-class="link-active" to="/projects">Projects</nuxt-link>
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
  padding: 1.5rem 3rem;
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
  text-align: center;
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
  position: relative;
  z-index: 1;
  color: var(--t-lt);
  font-family: var(--font);
  text-decoration: none;
  font-size: 1rem;
  transition: color 200ms;
}
.link-active::after {
  content: '';
  position: absolute;
  z-index: 999;
  bottom: -1rem;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--t-lt);
}
.nav-link:first-child {
  margin-right: 2rem;
}
.nav-link:hover {
  color: var(--t-dk);
  transition: color 200ms;
  border-bottom: none;
}
.nav-link::before {
  content: '';
  position: absolute;
  z-index: -1;
  left: -1rem;
  bottom: -.5rem;
  width: calc(100% + 2rem);
  height: 0;
  background: var(--t-brand-lt);
  border-radius: 0;
  transition: height 200ms, border-radius 200ms;
}
.nav-link:hover::before {
  height: calc(100% + 1rem);
  border-radius: 1rem;
  box-shadow: .5rem .5rem 1rem -.25rem rgba(0,0,0,0.5),
              .125rem .125rem .5rem rgba(0,0,0,0.2);
  transition: height 240ms, border-radius 200ms 300ms, box-shadow 200ms 300ms;
}
@media screen and (max-width: 420px) {
  nav {
    padding: 1.5rem 1rem;
  }
}
@media screen and (max-width: 667px) and (orientation: landscape) {
  nav {
    padding: 1.5rem 3rem;
  }
}
</style>