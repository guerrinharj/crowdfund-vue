<template>

    <section :class="{borderpledge: isCardClicked}">

      

        <div @click="openPledge"> 
        
            <div class="name-pledge"  >

                <h2> {{ name }} </h2>
                <h4 v-if="pledge > 0"> Pledge ${{ pledge }} or more </h4>


                <div class="number-modal" v-if="modal && numberLeft !== -1">
                    <h3> {{ numberLeft }} </h3>
                <p class="leftname"> {{ left }} </p>
                </div>


            </div>

            <div class="bio-reward">
                <p> {{ description }} </p>
            </div>

            <div class="number-button" v-if="!modal">

                <div class="number" v-if="numberLeft !== -1">
                    <h3> {{ numberLeft }} </h3>
                    <p class="leftname"> {{ left }} </p>
                </div>

                <div class="number" v-else>
                    <h3>   </h3>
                    <p class="leftname">   </p>
                </div>



                <div class="button-reward">
                    <the-button :btndesc="btndescription[0]" @click="confirmedReward"> </the-button>
                </div>

            </div>  

              <div class="number-modal_mobile" v-if="modal && numberLeft !== -1">
                    <h3> {{ numberLeft }} </h3>
                <p class="leftname"> {{ left }} </p>
                </div>

            <div class="input-and-pledge-modal" v-if="modal && isCardClicked && !noReward">
                    <h5> 
                        Enter your pledge 
                    </h5>
                    <div class="input-and-button-modal">
                        <input v-model="inputValue"> 
                        <the-button :btndesc="btndescription[1]" @click="confirmedPledge"> </the-button>
                    </div>
                </div>

                 <div class="input-and-pledge-modal" v-if="modal && isCardClicked && noReward">
                    <h5> 
                        Confirm pledge 
                    </h5>
                    <div class="input-and-button-modal">
                        <div> </div>
                        <the-button :btndesc="btndescription[1]" @click="confirmedPledge"> </the-button>
                    </div>
                </div>
        
        </div>

    </section>
    
</template>

<script>
import TheButton from './TheButton.vue'
export default {
  components: { TheButton },
  props: ['name', 'pledge', 'description', 'numberLeft', 'modal', 'noReward'],
  data() {
      return {
          btndescription: ['Select Reward', 'Continue'],
          left: 'left',
          inputValue: '$',
          isCardClicked: false
      }
  },
  inject: ['rewards', 'confirmedThePledge', 'confirmedTheReward'],
  methods: {
      openPledge() {
          this.isCardClicked = !this.isCardClicked
      },
      confirmedPledge() {

          const res = true 
            
            this.confirmedThePledge(res)

         
      },
      confirmedReward() {
          const res = true
          this.confirmedTheReward(res)
      }
  }
    
}
</script>

<style scoped>

section {
    border: solid 0.5px #ccc;
    padding: 10px 40px;
    border-radius: 20px
}

.borderpledge {
    border-color: hsl(176, 50%, 47%);
}

.name-pledge, .bio-reward, .number-button  {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}



h2 {
    font-size: 1.3rem;
}

h4 {
    color: hsl(176, 50%, 47%);
    font-size: 0.8rem;
    font-weight: 500;
}

p {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.5;
    font-weight: 500;
    margin: 0px 0 10px;
}

.leftname {
    margin: 0;
}

.number {
    display: flex;
    align-items: center;;
}

.number-modal {
    display: flex;
    align-items: center;
}

.number-modal, .number-modal_mobile h3 {
    margin-right: 5px;
}

.number h3 {
    font-size: 1.8rem;
    margin-right: 5px
}

h5 {
    opacity: 0.5;
    font-weight: 400
}

.input-and-pledge-modal {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: solid 1px #ccc;
}

.input-and-pledge-modal .input-and-button-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%
}

.input-and-pledge-modal input {
  
    width: 40%;
    border: solid 0.2px #ccc;
    padding: 15px 25px;
    border-radius: 20px;
    margin-right: 20px;
    outline: none;
    opacity: 0.5;

}

.invisible {
    opacity: 0.4;
    pointer-events: none;
}

.number-modal_mobile {
    display: none;
}


@media (max-width: 600px) {

    section {
        padding: 20px;
    }

    .number-button {
    width: 50%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    }

    .name-pledge {
            flex-wrap: wrap;
    }

    .input-and-pledge-modal {

    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    }

    .input-and-pledge-modal .input-and-button-modal {
        width:95%
    }

    .input-and-pledge-modal input {
        width: 100%;
        height: 90%;
        text-align: center;
        padding: 0
    }

    .number-modal {
        display: none;
    }

    .number-modal_mobile {
    display: flex;
    align-items: center;
}

 


}

</style>