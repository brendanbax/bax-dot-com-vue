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
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin: 0 auto;
  padding-bottom: 6rem;
}
.section-container:last-child {
  padding-bottom: 0;
}
.section-container:nth-child(even) {
  flex-direction: row-reverse;
}
.section-container:nth-child(odd) {
  flex-direction: row;
}
.section-container:nth-child(even) > .body-container {
  margin-left: 3rem;
}
.section-container:nth-child(odd) > .body-container {
  margin-right: 3rem;
}
.body-container, .cover-container {
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
  .section-container:nth-child(even),
  .section-container:nth-child(odd) {
    flex-direction: column-reverse;
  }
  .section-container:nth-child(even) > .body-container,
  .section-container:nth-child(odd) > .body-container {
    margin-left: 0;
    margin-right: 0;
  }
  .body-container {
    margin-top: 3rem;
    width: 100%;
  }
  .cover-container {
    width: 100%;
  }
}
@media screen and (max-width: 420px) {
  .cover {
    height: 240px;
  }
}
</style>