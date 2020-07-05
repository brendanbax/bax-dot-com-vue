<template>
  <div class="section-container">
    <div class="body-container">
      <h2 class="txt-section">{{ post.title }}</h2>
      <p class="txt-body buffer">{{ post.teaser }}</p>
      <div>
        <nuxt-link :to="`/projects/${post.slug}`" class="btn btn-primary">Read More</nuxt-link>
      </div>
    </div>
    <div class="cover-container">
      <div class="cover" :style="`background-image: url(${this.coverImg})`" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostPreview',
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
    },
  }
</script>

<style scoped>
.section-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.body-container {
  width: 50%;
  margin-right: 3rem;
}
.cover-container {
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
@media screen and (max-width: 960px) {
  .section-container {
    flex-direction: column-reverse;
  }
  .body-container {
    margin-right: 0;
    margin-top: 3rem;
    width: 100%;
  }
  .cover-container {
    width: 100%;
  }
}
</style>