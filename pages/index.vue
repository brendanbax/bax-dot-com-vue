<template>
  <div>
    <IndexHero />
    <div id="intro">
      <h2>Short intro section</h2>
      <p>Welcome to Brendan Bax Dot Com, personal site of yours truly.  Here you can learn more about me, my process, and the impact of my work on various projects.  I post my WIPs and POCs on [Dribbble]() and [Codepen]() so be sure to follow me there.  Occasionally I blog on Medium, as well.  Thanks for stopping by!</p>
      <p>-Brendan</p>
    </div>
    <div id="process">
      <h2>Process section</h2>
      <p>Seek to understand</p>
      <p>Gather objective metrics</p>
      <p>Hypothesize a solution</p>
      <p>Validate with testing</p>
    </div>
    <div id="case-study">
      <h2>Latest case study section</h2>
      <p>Teaser</p>
      <button>Read Now</button>
      <button>View All</button>
    </div>
    <div id="testimonials">
      <h2>Testimonial section</h2>
    </div>
    <div id="about">
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
/* TESTING PURPOSES */
.flex-row {
  margin: 2rem auto;
  width: 40%;
  display: flex;
  justify-content: space-around;
}
.pill {
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: .5rem;
  box-shadow: 0 .75rem 1.25rem -.5rem rgba(0,0,0,0.3),
              0 .25rem .75rem rgba(0,0,0,0.3);
}
</style>
