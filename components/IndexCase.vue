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
        <!-- TODO: Add images to posts, along with other meta -->
        <div class="cover" :style="`background-image: url(${this.coverImg})`" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexCase',
    props: [
      'post'
    ],
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
  padding: 6rem 3rem;
  min-height: 50vh;
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