<template>
  <div class="container">
    <PostPreview
      v-for="(post, index) in posts"
      :key="'p_' + index"
      :post="post"
    />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
  name: 'Projects',
  components: {
    PostPreview
  },
  async asyncData ({ $content }) {
    const posts = await $content('projects').sortBy('date', 'desc').fetch()
    return { posts }
  }
}
</script>

<style scoped>
.container {
  padding: 6rem 3rem;
  min-height: 50vh;
  max-width: 1200px;
  margin: 0 auto;
}
@media screen and (max-width: 420px) {
  .container {
    padding: 6rem 1rem;
  }
}
</style>
