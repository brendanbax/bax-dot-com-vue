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
  position: relative;
  min-height: 90vh;
  padding: var(--nav-height) 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: var(--hero),
                    radial-gradient(circle at top left, var(--t-brand), var(--t-dk));
  background-repeat: repeat;
}
#hero::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 20vh solid var(--bg);
  border-left: 100vw solid transparent;
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
@media screen and (max-width: 480px) {
  .txt-primary {
    font-size: 3.75rem;
    line-height: 3.75rem;
  }
}
@media screen and (max-width: 420px) {
  #hero {
    padding: var(--nav-height) 1rem 0;
  }
  .txt-primary {
    font-size: 3rem;
    line-height: 3rem;
  }
  .txt-secondary {
    font-size: 2rem;
    line-height: 2rem;
  }
}
@media screen and (max-width: 667px) and (orientation: landscape) {
  #hero {
    padding: 6rem 3rem;
  }
}
</style>