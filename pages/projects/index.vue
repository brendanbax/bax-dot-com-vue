<template>
  <div class="container">

    <PostPreview
      :post="{ title: 'foo', teaser: 'bar', slug: 'redlyst'}"
    />

    <!-- <PostPreview
      v-for="(post, index) in posts"
      :key="'p_' + index"
      :post="elPost"
    /> -->
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
  margin-top: var(--nav-height);
  padding: 6rem 3rem;
  min-height: 50vh;
}
</style>
