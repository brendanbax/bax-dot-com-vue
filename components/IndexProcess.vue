<template>
  <div>
    <h2 class="txt-center txt-section">My Process</h2>
    <div class="grid">
      <div
        v-for="step in process"
        :key="step"
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
            title: 'Seek to understand',
            desc: 'Bar'
          },
          {
            title: 'Gather objective metrics',
            desc: 'Bar'
          },
          {
            title: 'Hypothesize a solution',
            desc: 'Bar'
          },
          {
            title: 'Validate with testing',
            desc: 'Bar'
          },
          ]
      }
    }
  }
</script>

<style scoped>
.grid {
  max-width: 1200px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.card {
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.15),
              0 .375rem .5rem -.25rem rgba(0,0,0,0.2);
  border-radius: 1rem;
  padding: 1rem;
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
</style>