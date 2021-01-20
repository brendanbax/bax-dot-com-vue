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
          <div class="social-action">
            <a class="social-link" href="https://dribbble.com/brendanbax" target="_blank" rel="noopener noreferrer">
              <IconDribbble class="social-glyph" />
              <p class="txt-center">Dribbble</p>
            </a>
          </div>
          <div class="social-action">
            <a class="social-link" href="https://codepen.io/brendanbax" target="_blank" rel="noopener noreferrer">
              <IconCodepen class="social-glyph" />
              <p class="txt-center">Codepen</p>
            </a>
          </div>
          <div class="social-action">
            <a class="social-link" href="https://www.linkedin.com/in/brendan-bax-81613a100/" target="_blank" rel="noopener noreferrer">
              <IconLinkedin class="social-glyph" />
              <p class="txt-center">LinkedIn</p>
            </a>
          </div>
          <!-- <p>Medium</p> -->
        </div>
      </div>
      <p class="txt-micro t-fg">&copy; {{ time }} Brendan Bax.  Designed and built by me.</p>
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
  padding: 3rem 3rem 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 3rem;
}
.social-container {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-gap: 1rem;
}
.social-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: .5rem;
  border-radius: 1rem;
  border: 1px solid black;
}
.social-link {
  text-decoration: none;
  color: var(--t-fg);
  font-family: var(--font);
}
.social-glyph {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin: .5rem auto;
}
.buffer {
  margin-top: 1rem;
}
@media screen and (max-width: 900px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 420px) {
  .container {
    padding: 3rem 1rem 1rem;
  }
  .social-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .social-link > p{
    font-size: .75rem;
  }
}
</style>

<style>
.theme-earth footer p {
  color: black;
}
</style>