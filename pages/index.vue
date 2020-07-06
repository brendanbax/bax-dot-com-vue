<template>
  <div>
    <IndexHero />
    <div class="container">
      <h2 class="txt-section">Hey I'm Brendan</h2>
      <p class="txt-body buffer">Welcome to my site!  Here you can learn more about me, my process, and the impact of my work at various companies.  I post my WIPs and POCs on <a class="link-body" href="https://dribbble.com/brendanbax" target="_blank" rel="noopener noreferrer">Dribbble</a> and <a class="link-body" href="https://codepen.io/brendanbax" target="_blank" rel="noopener noreferrer">Codepen</a> so be sure to follow me there.</p>
      <!-- Occasionally I blog on <a class="link-body" href="" alt="" no-referrer no-opener>Medium</a>, as well. -->
      <p class="txt-body">Thanks for stopping by!</p>
      <p>-Brendan</p>
    </div>
    <IndexProcess />    
    <IndexCase :post="lastPost" />
    <IndexPromo />
  </div>
</template>

<script>
import IndexHero from '@/components/IndexHero'
import IndexProcess from '@/components/IndexProcess'
import IndexCase from '@/components/IndexCase'
import IndexPromo from '@/components/IndexPromo'

export default {
  components: {
    IndexHero,
    IndexProcess,
    IndexCase,
    IndexPromo,
  },
  async asyncData ({ $content }) {
    const post = await $content('projects').sortBy('date', 'desc').limit(1).fetch();
    return { post };
  },
  computed: {
    lastPost() {
      return this.post[0];
    }
  }
}
</script>

<style scoped>
.container {
  margin: 6rem auto;
  padding: 0 3rem;
  max-width: 64ch;
}
@media screen and (max-width: 420px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
