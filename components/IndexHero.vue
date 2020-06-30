<template>
  <div id="hero" class="f-dk">
    <div class="hero-txt txt-primary t-brand">Brendan Bax</div>
    <div class="hero-txt txt-secondary t-lt">Digital</div>
    <div class="hero-txt txt-secondary t-lt">Product</div>
    <div class="hero-txt txt-secondary t-lt">Design</div>
  </div>
</template>

<script>
export default {
  name: 'IndexHero',
}
</script>

<style scoped>
#hero {
  box-sizing: border-box;
  min-height: 90vh;
  padding: var(--nav-height) 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: var(--hero),
                    linear-gradient(to bottom right, var(--t-brand), var(--t-dk));
  background-blend-mode: unset;
  background-repeat: repeat;
}
.txt-primary {
  font-size: 4.5rem;
  line-height: 4.5rem;
}
.txt-secondary {
  font-size: 3rem;
  line-height: 3rem;
}
.hero-txt {
  font-family: var(--font);
  text-transform: uppercase;
  font-weight: bolder;
  transform: translateX(-4px);
  text-shadow: .75rem .75rem 1.5rem var(--t-dk),
              .5rem .5rem .75rem rgba(0,0,0,0.2),
              -1px -1px 1px var(--t-lt);
}
.hero-txt::after {
  content: inherit;
  display: block;
}
.logo {
  width: 200px;
  height: 200px;
  fill: none;
  stroke: var(--t-brand);
  stroke-width: 3px;
  opacity: 0.75;
}
.buffer {
  margin-top: 2rem;
}
</style>