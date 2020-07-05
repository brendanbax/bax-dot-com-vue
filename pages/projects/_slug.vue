<template>
  <div>
    <h1>
      {{ post.title }}
    </h1>
    <nuxt-content :document="post" />
    <div>
      <nuxt-link to="/projects">
        View All Posts
      </nuxt-link>
    </div>
  </div>
</template>
    
<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('projects', params.slug).fetch()
    return { post }
  }
}
</script>

<style>
/* The "slug" is the view of each rendered page for your blog */
/* Style your post here */
</style>