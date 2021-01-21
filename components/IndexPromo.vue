<template>
  <div id="about">
    <div class="text-container">
      <h2 class="txt-center txt-section">A Bit About Me</h2>
      <p class="txt-body txt-center txt-max-width">I've been truly blessed to work with some crazy talented people.  Genious developers, rockstar designers, inspiring leaders, and patient mentors.  I will be forever grateful for the lessons I was able to learn working alongside such fine people.  These are some of their kind words about me.</p>
    </div>
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
  </div>
</template>

<script>
  export default {
    name: 'IndexPromo',
    data() {
      return {
        promotions: [
          {
            content: 'Brendan is a rare combination - a software engineer plus user-experience designer.  And he is not just adequate at both, he excels.',
            attr: 'Peter Granderson • Developer',
            company: 'Mercy Virtual (2020)',
            img: '/media/peter.png'
          },
          {
            content: 'Brendan is extremely passionate about his work, creating/delivering great products, and has great insights. His experience in design thinking and elements, coding, and understanding business value delivery makes him a huge asset to any team.',
            attr: 'Alex Courtney • Director',
            company: 'Mercy Virtual (2020)',
            img: '/media/alex.png'
          },
          {
            content: 'Brendan has an infectious attitude that leaves you feeling excited to execute on the designs and concepts that he creates. He has also been a great mentor to the design team and has helped to bring them up to speed quickly.',
            attr: 'Nicholas Kajok • Staff Engineer',
            company: 'Coolfire Solutions (2019)',
            img: '/media/nick.png'
          },
          {
            content: `Brendan brought strong design skills to our projects together while at Asynchrony. He was able to manage the client relationship and user feedback to build a complete application. Brendan was also quick to jump into technical discussions and gain knowledge and understanding of every aspect of the user experience.`,
            attr: 'Calvin Cox • Developer',
            company: 'WWT Asynchrony Labs (2018)',
            img: '/media/calvin.png'
          },
          {
            content: 'His designs clearly articulate the value a user will get out of each interaction with the page. Working with Brendan was a treat. In three days of pairing, we were able to redesign the entire application and put forward a working prototype.',
            attr: 'Johnny Steenbergen • Developer',
            company: 'WWT Asynchrony Labs (2017)',
            img: '/media/johnny.png'
          },
          {
            content: `Working with Brendan in Mercy Virtual's R&D group was a pleasure. His programming skills were top notch and his personality, drive, and ability to understand the mission was unparalleled. Brendan's eye for design and desire to build usable, yet beautiful interfaces really stood out while we worked together. He was always eager to teach and learn and his leadership kept us on track in our agile environment. Great guy, great developer, great designer, and a pleasure to work with.`,
            attr: 'Jordan Woerndle • Developer',
            company: 'Mercy Virtual (2020)',
            img: '/media/jordan.png'
          },
          {
            content: 'Brendan is a talented, thoughtful UX and interaction designer. I am convinced he can learn and master any skill or practice to make himself a UX thought and practice lead.',
            attr: 'Kate Chadha • Research Practice Lead',
            company: 'WWT Asynchrony Labs (2017)',
            img: '/media/kate.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>
#about {
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-top: .5rem dotted var(--t-dk);
}
.text-container {
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 64ch;
}
@media (max-width: 420px) {
  .text-container {
    padding: 0 1rem;
  }
}
.container {
  margin: 3rem auto 0;
  padding: 0 3rem;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 420px) {
  .container {
    padding: 0 1rem;
  }
}
.promo-item {
  align-self: flex-start;
  box-sizing: border-box;
  background-color: var(--acc);
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  box-shadow: var(--shadow);
}
@media (min-width: 840px) {
  .promo-item {
    flex-basis: calc(50% - 2rem);
    margin-bottom: -1rem;
  }
  .promo-item:nth-child(even) {
    margin-top: 5rem;
    margin-left: 1rem;
  }
  .promo-item:nth-child(odd) {
    margin-right: 1rem;
  }
  .promo-item:nth-child(odd).promo-item:not(.promo-item:first-child) {
    margin-top: -1rem;
  }
  .promo-item:nth-last-child(1).promo-item:not(.promo-item:first-child) {
    margin-top: -5rem;
  }
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
</style>