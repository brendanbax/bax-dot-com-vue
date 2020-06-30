<template>
  <div id="case">
    <div class="section">
      <div class="left">
        <h2 class="txt-section">{{ post.title }}</h2>
        <p class="txt-body">Teaser</p>
        <div class="btn-grid">
          <button class="btn btn-primary">Read Now</button>
          <button class="btn btn-secondary">View All</button>
        </div>
      </div>
      <div class="right">
        <div>Image Here</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexCase',
    props: [
      'post'
    ]
  }
</script>

<style scoped>
#case {
  background-color: var(--fg);
  color: var(--bg);
  padding: 3rem;
  min-height: 50vh;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
}
.btn-grid {
  display: grid;
  grid-template-columns: repeat(2, 8rem);
  grid-gap: 1rem;
}
</style>