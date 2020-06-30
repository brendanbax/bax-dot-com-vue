<template>
  <div>
    <h1>Projects</h1>
    <div v-for="post in posts" :key="post.slug">
      <h3>
        <nuxt-link :to="`projects/${post.slug}`">{{ post.title }}</nuxt-link>
      </h3>
      <div>{{ post.description }}</div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  name: 'Projects',
  components: {
    NavBar
  },
  async asyncData ({ $content }) {
    // content function looks in content/projects folder
    // TODO: look in to sorting content by a frontmatter key, not file data
    const posts = await $content('projects').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>

<style>
/* this is a list of all the projects, style accordingly */
</style>
