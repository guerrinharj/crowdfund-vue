<template>
    <main>


        <div v-if="confirmReward"> 

                      

                        <the-confirm
                        :isModal="false"> 
                        </the-confirm>

        </div>

        
        <div v-else>


            <h3> {{ about }} </h3>

            <p v-for="bios in biog" :key="bios"> {{ bios }} </p>

        

            <ul>

            <li v-for="reward in rewards" :key="reward.name" :class="{'invisible': reward.left === 0}">
                    <reward-card
                    :name="reward.name"
                    :pledge="reward.pledge"
                    :description="reward.desc"
                    :numberLeft="reward.left"
                    :modal="false"
                    :noReward="reward.isNoReward"
                    v-if="reward.isModal === false"
                    > 
                    </reward-card> 
            </li>



            </ul>

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
    props: ['bio'],
    data() {
        return {
            about: 'About this project',
            confirmReward: false,
            openConfirm: false
        }
    },
    inject: ['biog', 'rewards'],
    provide() {
        return {
            confirmedTheReward: this.confirmedTheReward,
            openTheConfirm: this.openTheConfirm

        }
    },
    methods: {
        confirmedTheReward(v) {

            const value = v

            this.confirmReward = value

        },
        openTheConfirm(v) {
            const value = v

            this.confirmReward = value

        }
    }
}
</script>

<style scoped>

main {
    padding: 40px 60px;
}

h3 {
    font-size: 1.5rem;
}

p {
    line-height: 1.8;
    opacity: 0.5;
    font-size: 15px;
    font-weight: 500;
}



ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0;
    padding-inline-start: 0;
    margin-top: 3vh;
}

li {
    margin: 20px 0
}

.invisible {
    opacity: 0.4;
    pointer-events: none;
}

.take-off-card {
    display: none;
}

@media (max-width: 600px) {

    .the-section main {
        padding: 40px;
    }


}

</style>