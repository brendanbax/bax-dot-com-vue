<template>
  <div id="hero" class="f-dk">
    <Logo className="logo" />
    <div class="zip-row">
      <span class="hero-txt txt-primary t-brand">Brendan</span>
      <span class="hero-txt txt-primary t-brand">Bax</span>
    </div>
    <div class="zip-row">
      <span class="hero-txt txt-secondary buffer t-lt">Digital</span>
      <span class="hero-txt txt-secondary t-lt">Product</span>
      <span class="hero-txt txt-secondary t-lt">Design</span>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'IndexHero',
  components: {
    Logo,
  }
}
</script>

<style scoped>
.zip-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
#hero {
  box-sizing: border-box;
  min-height: calc(4.5rem * 10);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: var(--hero), radial-gradient(ellipse at top, var(--t-brand), var(--t-dk));
  background-blend-mode: luminosity;
  background-repeat: repeat;
}
.txt-primary {
  font-size: 8rem;
  line-height: 8rem;
}
.txt-primary:first-child {
  margin-right: 2rem;
}
.txt-secondary {
  font-size: 4rem;
  line-height: 5rem;
}
:not(.txt-secondary:first-child) .txt-secondary{
  margin-left: 2rem;
}
.hero-txt {
  font-family: var(--font);
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: -.25rem;
  transform: translateX(-4px);
  text-shadow: 0 1.1rem 2rem var(--t-dk),
              0 .25rem .75rem rgba(0,0,0,0.2);
}
.hero-txt::after {
  content: inherit;
  display: block;
}
.logo {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  height: 50%;
  z-index: 0;
  fill: none;
  stroke: var(--t-brand);
  stroke-width: 3px;
  opacity: 0.75;
}
.buffer {
  margin-top: 2rem;
}
</style>