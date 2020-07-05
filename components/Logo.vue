<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1020 800" xmlSpace="preserve">
    <polygon points="262.64 585.28 170 400 370 0 200 0 0 400 85 570 177.64 755.28 262.64 585.28"/>
    <polygon points="370 800 200 800 600 0 770 0 370 800"/>
    <path d="M812.87,3.69,739.72,150H770a100,100,0,0,1,0,200H639.72l-75,150H770c138.07,0,250-111.93,250-250C1020,126.55,930.51,24,812.87,3.69Z"/>
    <path d="M975.06,455.06a289,289,0,0,1-92.17,62.13q-8.14,3.45-16.45,6.36A100,100,0,0,1,770,650H489.72l-75,150H770c138.07,0,250-111.93,250-250a248.87,248.87,0,0,0-27.48-114Q984.24,445.86,975.06,455.06Z"/>
  </svg>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      className: {
        type: String,
        required: false,
      },
    }
  }
</script>

<style scoped>

</style>