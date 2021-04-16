<template>


  <the-modal v-if="openModal"></the-modal>


<article :class="{faded: bgColor}">

    <the-intro> </the-intro>

    <div class="container"> 
      <the-section> </the-section>
    </div>

</article>

</template>





<script>


  import TheIntro from './components/TheIntro.vue'
  import TheModal from './components/TheModal.vue'
  import TheSection from './components/TheSection.vue'



export default {
  components: {
    TheIntro,
    TheModal,
    TheSection
  },
  data() {
    return {
      bgColor: false,
      openModal: false,
      logos: 'logo-mastercraft.svg',
      titles: 'Mastercraft Bamboo Monitor Riser',
      shortbios: 'A beautiful and handcrafted monitor stand to reduce neck and eye strain.',
      money: [89.914, 100000],
      backers: 5007,
      daysLeft: 58,
      biog: ['The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.', 'Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.'],
      rewards: [
         {
              name: 'Pledge with no reward',
              pledge: 0,
              desc: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
              left: -1,
              isModal: true,
              isNoReward: true
          },
          {
              name: 'Bamboo Stand',
              pledge: 25,
              desc: 'You get an ergonomic stand made of natural bamboo. Youve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
              left: 101,
              isModal: false,
              isNoReward: false
          },
          {
              name: 'Black Edition Stand',
              pledge: 75,
              desc: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
              left: 64,
              isModal: false,
              isNoReward: false
          },
          {
              name: 'Mahogany Special Edition',
              pledge: '200',
              desc: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
              left: 0,
              isModal: false,
              isNoReward: false
          }
      ]
    }
  },
  provide() {
   return {
     logos: this.logos,
     titles: this.titles,
     shortbios:this.shortbios,
     money: this.money,
     backers: this.backers,
     daysLeft: this.daysLeft,
     biog: this.biog,
     rewards: this.rewards,
     openTheModal: this.openTheModal,
     changeBgColor: this.changeBgColor
   }
  },
  methods: {
    openTheModal(v) {
     const value = v

     this.openModal = value
    },
    changeBgColor(value) {
      this.bgColor = value
    }
  }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap');


  body {
    font-family: 'Commissioner', sans-serif;
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background-color:rgb(245, 244, 244)
  }

  article {
    height: 100vh;
  }

  .container {
    width: 50%;
    margin: auto;
    padding: 20px;
    z-index: 2;
    transform: translateY(-10%);
}

.faded {
  filter: brightness(50%);
  background-color: rgba(0, 0, 0, 0.5)
}

@media (max-width: 600px) {

  .container {
    width: 95%;
    transform: translateY(-7%);
  }

}



</style>
