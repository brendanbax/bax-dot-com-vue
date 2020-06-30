<template>
  <div id="process">
    <h2 class="txt-center txt-section">My Process</h2>
    <p class="txt-body txt-center t-fg">Not always in this order</p>
    <div class="grid">
      <div
        v-for="(step, index) in process"
        :key="index + '-proc'"
        class="card"
      >
        <div class="icn" />
        <p class="card-title">{{ step.title }}</p>
        <p class="txt-body">{{ step.desc }}</p>  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexProcess',
    data() {
      return {
        process: [
          {
            icon: '',
            title: 'Seek to understand',
            desc: 'As a natural skeptic, I push hard into research to investigate a problem.'
          },
          {
            icon: '',
            title: 'Gather objective metrics',
            desc: 'I look for objective data points to help define what "success" means for a project.'
          },
          {
            icon: '',
            title: 'Hypothesize a solution',
            desc: 'Based on what is known, I design potential solutions that might solve this problem.'
          },
          {
            icon: '',
            title: 'Validate with testing',
            desc: 'I get feedback, doing more of the good and re-evaluating the bad to iterate on the product.'
          },
          ]
      }
    }
  }
</script>

<style scoped>
#process {
  padding-bottom: 3rem;
  position: relative;
  z-index: 1;
}
#process::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 20vh solid var(--fg);
  border-right: 100vw solid transparent;
  z-index: -1;
}
.grid {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.card {
  background: var(--bg);
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.175),
              0 .375rem .5rem -.25rem rgba(0,0,0,0.35);
  border-radius: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--acc);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
.icn {
  width: 2rem;
  height: 2rem;
  background: var(--t-brand-lt);
  border-radius: .5rem;
}
.card-title {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: .5rem 0;
}
.card-title::after {
  content: '';
  display: block;
  width: 25%;
  height: 2px;
  background: var(--t-brand);
  margin-top: .5rem;
}
@media screen and (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 420px) {
  .grid {
    padding: 0 1rem;
  }
}
</style>