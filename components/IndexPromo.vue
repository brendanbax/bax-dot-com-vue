<template>
  <div id="about">
    <h2 class="txt-center txt-section">About Me</h2>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPromo'
  }
</script>

<style scoped>
#about {
  margin-top: 3rem;
  min-height: 50vh;
}
.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
  height: 600px; 
}
.item {
  width: 32%;
  margin-bottom: 2%; /* Optional */
}
/* Re-order items into 3 rows */
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }
/* Force new columns */
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</style>