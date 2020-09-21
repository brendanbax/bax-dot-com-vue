<template>
  <div class="page">
    <div class="container">
      <nuxt-link class="link-body" to="/projects">View All Projects</nuxt-link>
      <div class="article-hero">
        <div class="img-container">
          <img
            :src="`/${post.slug}/cover.png`"
            :alt="post.title"
            class="cover-photo"
          />
        </div>
        <div>
          <h1 class="article-title">{{ post.title }}</h1>
          <h3 class="article-time">Published: {{ post.date }}</h3>
          <div class="tag-container">
            <span v-for="(tag, index) in post.tags" :key="'k_' + index" class="tag">{{ tag }} </span>
          </div>
        </div>
      </div>
      <div>
        <nuxt-content :document="post" class="content"/>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('projects', params.slug).fetch()
    return { post }
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: calc(var(--nav-height) + 2rem) auto 0;
  padding: 3rem;
}
@media screen and (max-width: 420px) {
  .container {
    padding: 3rem 1rem;
  }
}

/* Hero Section */
.article-hero {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3rem;
}
.article-hero > div:last-child {
  align-self: center;
}
.cover-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: var(--shadow-xl);
}
.article-title {
  font-weight: 900;
  font-size: 2.75rem;
  line-height: 3rem;
  letter-spacing: .125rem;
}
.article-time {
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
}
.tag-container {
  max-width: 320px;
  display: flex;
  flex-wrap: wrap;
}
.tag {
  display: inline-block;
  padding: .5rem 1rem;
  margin: 1rem .5rem 0 0;
  font-size: .75rem;
  line-height: 1rem;
  border-radius: 1.5rem;
  background: var(--t-brand-lt);
  color: var(--t-dk);
  text-transform: uppercase;
}
@media screen and (max-width: 720px) {
  .article-hero {
    grid-template-columns: 1fr;
  }
  .article-title {
    font-size: 2rem;
    line-height: 2rem;
  }
  .article-time {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-top: .5rem;
  }
}
@media screen and (max-width: 640px) {
  .cover-photo {
    height: 200px;
  }
}

/* Content Styling */
.content {
  margin-top: 3rem;
}
.content h3 {
  font-family: var(--font);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
}
.content p {
  font-family: var(--font);
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 2rem;
}
.content p:last-child {
  margin-bottom: 0;
}
.content strong {
  font-weight: 600;
}
.content img {
  max-width: 1200px;
  width: 100%;
}
.content ol {
  margin-top: -1.5rem;
  margin-bottom: 2rem;
}
.content li {
  line-height: 2.5rem;
}
</style>