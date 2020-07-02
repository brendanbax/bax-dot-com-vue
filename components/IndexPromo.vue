<template>
  <div id="about">
    <h2 class="txt-center txt-section">A Bit About Me</h2>
    <div class="container">
      <div v-for="(promo, index) in promotions" :key="'p' + index" class="promo-item" :id="'c-' + index">
        <p class="txt-body">{{ promo.content }}</p>
        <div v-if="promo.attr" class="attr-row">
          <img v-if="promo.img" :src="promo.img" class="pic" />
          <div>
            <p v-if="promo.attr" class="txt-micro txt-name">{{ promo.attr }}</p>
            <p v-if="promo.company" class="txt-micro">{{ promo.company }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="txt-body">I am a designer and developer with a passion for productization.  My obsessive dedication to detail has helped me create transformational software experiences for agencies, startups, and major corporations.  Before pursuing a career in tech I was a licensed realtor and a college instructor.  When not pushing pixels or writing code I like to go on outdoor adventures with my wife and kids.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPromo',
    data() {
      return {
        promotions: [
          {
            content: 'Brendan has an infectious attitude that leaves you feeling excited to execute on the designs and concepts that he creates. He has also been a great mentor to the design team and has helped to bring them up to speed quickly.',
            attr: 'Nicholas Kajok',
            company: 'Coolfire Solutions',
            img: '/media/nick.png'
          },
          {
            content: `Working with Brendan in Mercy Virtual's R&D group was a pleasure. His programming skills were top notch and his personality, drive, and ability to understand the mission was unparalleled. Brendan's eye for design and desire to build usable, yet beautiful interfaces really stood out while we worked together. He was always eager to teach and learn and his leadership kept us on track in our agile environment. Great guy, great developer, great designer, and a pleasure to work with.`,
            attr: 'Jordan Woerndle',
            company: 'Mercy Virtual',
            img: '/media/jordan.png'
          },
          {
            content: 'His designs clearly articulate the value a user will get out of each interaction with the page. Working with Brendan was a treat. In three days of pairing, we were able to redesign the entire application and put forward a working prototype.',
            attr: 'Johnny Steenbergen',
            company: 'WWT Asynchrony Labs',
            img: '/media/johnny.png'
          },
          {
            content: 'Brendan is a talented, thoughtful UX and interaction designer. I am convinced he can learn and master any skill or practice to make himself a UX thought and practice lead.',
            attr: 'Kate Chadha',
            company: 'WWT Asynchrony Labs',
            img: '/media/kate.png'
          },
          {
            content: `Brendan works well as a team player. His ability to change designs and tasks to help the overall team is unparalleled. He not only will support his developers but also steps in as a developer when he can. It's amazing to have him around.`,
            attr: 'Calvin Cox',
            company: 'WWT Asynchrony Labs',
            img: '/media/calvin.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>
#about {
  margin-top: 3rem;
  min-height: 50vh;
}
.container {
  margin: 3rem auto 0;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, .5fr);
  grid-gap: 1rem;
}
.promo-item {
  align-self: start;
  box-sizing: border-box;
  background-color: var(--acc);
  border-radius: 1rem;
  margin-bottom: 2%;
  padding: 1rem;
  box-shadow: var(--shadow);
}
#c-0 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}
#c-1 {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
#c-2 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 4;
}
#c-3 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
}
#c-4 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;
}
.attr-row {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.txt-name {
  font-weight: 600;
}
.pic {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
}
@media screen and (max-width: 960px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, .5fr);
  }
  #c-0 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  #c-1 {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  #c-3 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  #c-2 {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    margin-top: -3.5rem;
  }
  #c-4 {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }
}
@media screen and (max-width: 760px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  #c-0, #c-1, #c-2, #c-3, #c-4 {
    grid-area: auto / auto / auto / auto;
    margin: auto;
  }
}
@media screen and (max-width: 420px) {
  .container {
    padding: 0 1rem;
  }
}
</style>