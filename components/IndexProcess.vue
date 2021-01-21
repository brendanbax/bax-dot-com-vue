<template>
  <div id="process">
    <h2 class="txt-center txt-section t-bg">My Process</h2>
    <p class="txt-body txt-center txt-shadow t-bg">Not always in this order</p>
    <div class="grid">
      <div
        v-for="(step, index) in process"
        :key="index + '-proc'"
        class="card"
      >
        <div class="icn" v-html="step.icon" />
        <p class="card-title">{{ step.title }}</p>
        <p class="txt-body">{{ step.desc }}</p>
        <ul class="pill-container">
          <li
            v-for="(activity, idx) in step.activities"
            :key="index + '-' + idx + '-'"
            class="pill"
          >{{ activity }}</li>
        </ul>
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
            icon: `<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.4444444,0 C30.4,0 32,1.6 32,3.55555556 L32,3.55555556 L32,28.4444444 C32,30.4 30.4,32 28.4444444,32 L28.4444444,32 L3.55555556,32 C1.6,32 0,30.4 0,28.4444444 L0,28.4444444 L0,3.55555556 C0,1.6 1.6,0 3.55555556,0 L3.55555556,0 Z M12.6666667,4 C7.88,4 4,7.88 4,12.6666667 C4,17.4533333 7.88,21.3333333 12.6666667,21.3333333 C14.8133333,21.3333333 16.7866667,20.5466667 18.3066667,19.24 L18.6666667,19.6133333 L18.6666667,20.6666667 L25.3333333,27.32 L27.32,25.3333333 L20.6666667,18.6666667 L19.6133333,18.6666667 L19.24,18.3066667 C20.5466667,16.7866667 21.3333333,14.8133333 21.3333333,12.6666667 C21.3333333,7.88 17.4533333,4 12.6666667,4 Z M12.6666667,6.66666667 C15.9866667,6.66666667 18.6666667,9.34666667 18.6666667,12.6666667 C18.6666667,15.9866667 15.9866667,18.6666667 12.6666667,18.6666667 C9.34666667,18.6666667 6.66666667,15.9866667 6.66666667,12.6666667 C6.66666667,9.34666667 9.34666667,6.66666667 12.6666667,6.66666667 Z" id="Shape" fill-rule="nonzero"></path></svg>`,
            title: 'Seek to understand',
            desc: 'As a natural skeptic, I push hard into research to investigate a problem.  I have two goals: gain context for myself, and gain unity between stakeholders.',
            activities: [
              'interviews',
              'competitive analysis',
              'usability studies',
              'personas',
            ]
          },
          {
            icon: `<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.4444444,0 L3.55555556,0 C1.6,0 0,1.6 0,3.55555556 L0,28.4444444 C0,30.4 1.6,32 3.55555556,32 L28.4444444,32 C30.4,32 32,30.4 32,28.4444444 L32,3.55555556 C32,1.6 30.4,0 28.4444444,0 Z M10.6666667,24.8888889 L7.11111111,24.8888889 L7.11111111,16 L10.6666667,16 L10.6666667,24.8888889 Z M17.7777778,24.8888889 L14.2222222,24.8888889 L14.2222222,19.5555556 L17.7777778,19.5555556 L17.7777778,24.8888889 Z M17.7777778,16 L14.2222222,16 L14.2222222,12.4444444 L17.7777778,12.4444444 L17.7777778,16 Z M24.8888889,24.8888889 L21.3333333,24.8888889 L21.3333333,7.11111111 L24.8888889,7.11111111 L24.8888889,24.8888889 Z" id="Shape" fill-rule="nonzero"></path></svg>`,
            title: 'Gather objective metrics',
            desc: "I look for objective data points to help define success for a project.  Sometimes it's goals for more engagement, other times it's goals to reduce costs.",
            activities: [
              'KPIs',
              'surveys',
              'data visualization',
              'kickoffs meetings'
            ]
          },
          {
            icon: `<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.4444444,0 C30.4,0 32,1.6 32,3.55555556 L32,3.55555556 L32,28.4444444 C32,30.4 30.4,32 28.4444444,32 L28.4444444,32 L3.55555556,32 C1.6,32 0,30.4 0,28.4444444 L0,28.4444444 L0,3.55555556 C0,1.6 1.6,0 3.55555556,0 L3.55555556,0 Z M16.6666667,5 L10,17.9866667 L14.64,17.9866667 L14.64,26.3333333 L21.1333333,13.3466667 L16.6666667,13.3466667 L16.6666667,5 Z" id="Shape" fill-rule="nonzero"></path></svg>`,
            title: 'Hypothesize a solution',
            desc: 'Based on what is known, I design potential solutions that might solve this problem.  Sometimes I get real freaky and build functional prototypes.',
            activities: [
              'wireframes',
              'code',
              'hifi mockups',
              'pitch decks'
            ]
          },
          {
            icon: `<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.4444444,0 C30.4,0 32,1.6 32,3.55555556 L32,3.55555556 L32,28.4444444 C32,30.4 30.4,32 28.4444444,32 L28.4444444,32 L3.55555556,32 C1.6,32 0,30.4 0,28.4444444 L0,28.4444444 L0,3.55555556 C0,1.6 1.6,0 3.55555556,0 L3.55555556,0 Z M19.612265,5 L11.7189317,5 C11.1589317,5 10.852265,5.64 11.1989317,6.08 L12.9989317,8.33333333 L12.9989317,13.8933333 L5.26559836,24.2 C4.61226502,25.08 5.23893169,26.3333333 6.33226502,26.3333333 L24.9989317,26.3333333 C26.092265,26.3333333 26.7189317,25.08 26.0655984,24.2 L18.332265,13.8933333 L18.332265,8.33333333 L20.132265,6.08 C20.4789317,5.64 20.172265,5 19.612265,5 Z" id="Shape" fill-rule="nonzero"></path></svg>`,
            title: 'Validate with testing',
            desc: 'I get feedback, doing more of the good and re-evaluating the bad to iterate on designs.  User feedback is ideal, but I still run ideas by other designers as well as the stakeholders.',
            activities: [
              'A-B testing',
              'usability labs',
              'net promotor scores',
              'happy hours'
            ]
          },
        ]
      }
    },
    computed: {
      // cardClass() {
      //   if (this.theme === 'theme-earth') {
      //     return 'card-border'
      //   } else {
      //     return ''
      //   }
      // }
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
  top: 0;
  width: 0;
  height: 0;
  border-top: 20vh solid var(--fg);
  border-left: 100vw solid transparent;
  z-index: -1;
}
.grid {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}
.card {
  background-color: var(--acc);
  box-shadow: var(--shadow);
  border-radius: 1rem;
  padding: 1.5rem 1rem 1rem;
  border-top: 1px solid var(--acc);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
.card-border {
  border-top: 1px solid var(--acc);
  border-left: 1px solid var(--acc);
  border-right: 1px solid var(--acc);
  border-bottom: 1px solid var(--acc);
}
.icn {
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--t-brand-lt);
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
.pill-container {
  padding-left: 0;
  list-style: none;
  margin: 0;
}
.pill-container::before {
  content: '';
  display: block;
  width: 75%;
  height: 2px;
  background: var(--t-brand);
  margin-top: .5rem;
  margin-left: auto;
  margin-bottom: 1rem;
}
.pill {
  padding: .25rem .5rem;
  display: inline-block;
  background-color: var(--t-dk);
  color: var(--t-lt);
  border-radius: .25rem;
  margin: .25rem .5rem .25rem 0;
  font-size: .875rem;
}
.pill:last-child {
  margin-right: 0;
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
