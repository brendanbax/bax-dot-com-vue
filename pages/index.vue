<template>
  <div>
    <IndexHero />
    <div class="home-section">
      <div id="intro">
        <h2 class="txt-section">Hey I'm Brendan</h2>
        <p class="txt-body">Welcome to my site!  Here you can learn more about me, my process, and the impact of my work on various projects.  I post my WIPs and POCs on <a class="link-body" href="" alt="" no-referrer no-opener>Dribbble</a> and <a class="link-body" href="" alt="" no-referrer no-opener>Codepen</a> so be sure to follow me there.  Occasionally I blog on <a class="link-body" href="" alt="" no-referrer no-opener>Medium</a>, as well.</p>
        <p class="txt-body">Thanks for stopping by!</p>
        <p>-Brendan</p>
      </div>
    </div>
    <div id="process" class="home-section">
      <h2>Process section</h2>
      <p>Seek to understand</p>
      <p>Gather objective metrics</p>
      <p>Hypothesize a solution</p>
      <p>Validate with testing</p>
    </div>
    <div id="case-study" class="home-section">
      <h2>Latest case study section</h2>
      <p>Teaser</p>
      <button>Read Now</button>
      <button>View All</button>
    </div>
    <div id="testimonials" class="home-section">
      <h2>Testimonial section</h2>
    </div>
    <div id="about" class="home-section">
      <h2>About section</h2>
      <p>Brendan is a designer and developer with a passion for productization.  His obsessive dedication to detail has helped him create transformational software experiences for agencies, startups, and major corporations.</p>
      <p>Before pursuing a career in tech he was a licensed realtor and a college instructor.  When not pushing pixels or writing code he likes to go on adventures with his wife and kids.</p>
    </div>
  </div>
</template>

<script>
import IndexHero from '@/components/IndexHero'
export default {
  component: {
    IndexHero,
  }
}
</script>

<style>
.home-section {
  min-height: 50vh;
  margin: 6rem 3rem 0rem;
}
#intro {
  margin: 0 auto;
  max-width: 64ch;
}
</style>
