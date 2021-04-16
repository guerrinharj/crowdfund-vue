<template>
    <main>
        
            <div class="the-modal" :class="{smallmodal: confirmPledge}">

                  <div v-if="confirmPledge"> 
                        <the-confirm isModal="true"> </the-confirm>
                   </div>

                <div v-else>
                    <div  class="title-and-close">
                        <h2> Back this project </h2>
                        <router-link to="/"> <span @click="closeTheModal"> <img src="../assets/icon-close-modal.svg"> </span> </router-link>
                    </div>
                    <p> Want to support us in bring {{ titles }} out in the world? </p>

                    <div class="rewards-modal" v-for="reward in rewards" :key="reward.name" :class="{'invisible': reward.left === 0}">
                        <reward-card
                        :name="reward.name"
                        :pledge="reward.pledge"
                        :description="reward.desc"
                        :numberLeft="reward.left"
                        :noReward="reward.isNoReward"
                        :modal="true"> 
                        </reward-card> 
                    </div>
                </div>
                

            </div>
       
    </main>
</template>

<script>

import RewardCard from './RewardCard.vue'
import TheConfirm from './TheConfirm.vue'

export default {
components: {
    RewardCard,
    TheConfirm
},
data() {
    return {
        confirmPledge: false
    }
},
provide() {
    return {
        confirmedThePledge: this.confirmedThePledge
    }
},
inject: ['rewards', 'titles', 'openTheModal', 'changeBgColor'], 
methods: {
    closeTheModal() {
        const res = false 
            
            this.openTheModal(res)
            this.changeBgColor(res)
    },
    confirmedThePledge(v) {
        const value = v

        this.confirmPledge = value
    },
}

    
}
</script>

<style scoped>

    main {
        position: absolute;
        width: 100vw;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

    .the-modal {
        margin: 5vh auto;
        background-color: white;
        opacity: 1;
        width: 50%;
        padding: 20px 50px;
        border-radius: 10px;
        position: fixed;
        top: 5px
    }

    .smallmodal {
        margin: 25vh auto;
    }

        /* width */
    ::-webkit-scrollbar {
    width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: hsl(176, 50%, 47%); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: hsl(176, 50%, 47%); 
    }

    .title-and-close {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: auto;
    }

    .title-and-close span {
        cursor: pointer;
    }

    p {
    opacity: 0.5
    }

    .rewards-modal {
        margin: 30px 0;
    }
    
    .invisible {
    opacity: 0.4
}
    

</style>