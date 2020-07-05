<template>
  <footer>
    <div class="container">
      <div>
        <p class="txt-body t-fg">I am a designer and developer with a passion for productization.  My obsessive dedication to detail has helped me create transformational software experiences for agencies, startups, and major corporations.</p>
        <p class="txt-body t-fg buffer">Before pursuing a career in tech I was a licensed realtor and a college instructor.  When not pushing pixels or writing code I like to go on outdoor adventures with my wife and kids.</p>
      </div>
      <div>
        <h2 class="txt-section">Connect With Me</h2>
        <div class="social-container">
          <div>
            <IconDribbble />
            <p>Dribbble</p>
          </div>
          <div>
            <IconCodepen />
            <p>Codepen</p>
          </div>
          <div>
            <IconLinkedin />
            <p>LinkedIn</p>
          </div>
          <!-- <p>Medium</p> -->
        </div>
      </div>
      <p class="txt-micro t-fg">&copy; {{ time }} Brendan Bax.  Built with Vue.js, Nuxt.js, and hosted on Netlify.</p>
    </div>
  </footer>
</template>

<script>
  import IconCodepen from '@/components/IconCodepen';
  import IconDribbble from '@/components/IconDribbble';
  import IconLinkedin from '@/components/IconLinkedin';

  export default {
    name: 'FootBar',
    components: {
      IconCodepen,
      IconDribbble,
      IconLinkedin,
    },
    computed: {
      time() {
        let date = new Date();
        let year = date.getFullYear();
        return year;
      }
    }
  }
</script>

<style scoped>
footer {
  background: var(--t-brand-lt);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0 1rem;
  display: grid;
  grid-template-columns: 64ch 1fr;
  grid-column-gap: 3rem;
}
.buffer {
  margin-top: 1rem;
}
.social-container {
  display: flex;
}
</style>