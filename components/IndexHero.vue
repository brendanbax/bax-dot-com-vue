<template>
  <div id="hero" class="f-dk">
    <div class="hero-txt t-brand">Brendan</div>
    <div class="hero-txt t-brand">Bax</div>
    <br>
    <div class="hero-txt t-lt">Digital</div>
    <div class="hero-txt t-lt">Product</div>
    <div class="hero-txt t-lt">Design</div>
  </div>
</template>

<style scoped>
#hero {
  box-sizing: border-box;
  padding-top: var(--nav-height);
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-image: var(--hero);
  background-repeat: repeat;
}
.hero-txt {
  font-family: var(--font);
  font-size: 6rem;
  line-height: 4.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: -.25rem;
  transform: translateX(-4px);
}
</style>