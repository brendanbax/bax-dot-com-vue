<template>
  <div id="case">
    <div class="section">
      <div class="left">
        <h2 class="txt-section">{{ post.title }}</h2>
        <p class="txt-body buffer">{{ post.teaser }}</p>
        <div class="btn-grid">
          <nuxt-link :to="`/projects/${post.slug}`" class="btn btn-primary">Read More</nuxt-link>
          <nuxt-link to="/projects" class="btn btn-secondary">All Projects</nuxt-link>
        </div>
      </div>
      <div class="right">
        <div class="cover" :style="`background-image: url(${this.coverImg})`" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexCase',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    computed: {
      coverImg() {
        let postSlug = this.post.slug;
        return `/${postSlug}/cover.png`;
      }
    }
  }
</script>

<style scoped>
#case {
  background-color: var(--fg);
  color: var(--bg);
  padding: 8rem 3rem 6rem;
  min-height: 50vh;
  position: relative;
  z-index: 1;
}
#case::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-top: 20vh solid var(--bg);
  border-right: 100vw solid transparent;
  z-index: -1;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.left {
  width: 50%;
  margin-right: 3rem;
}
.right {
  width: 50%;
}
.cover {
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  box-shadow: var(--shadow-xl);
}
.btn-grid {
  display: flex;
  margin-top: 1rem;
}
.btn-grid > .btn {
  margin-right: 1rem;
}
@media screen and (max-width: 960px) {
  #case {
    padding-top: 2rem;
  }
  .section {
    flex-direction: column-reverse;
  }
  .right {
    width: 100%;
  }
  .left {
    margin-right: 0;
    margin-top: 3rem;
    width: 100%;
  }
}
@media screen and (max-width: 420px) {
  #case {
    padding: 2rem 1rem 4rem;
  }
}
</style>