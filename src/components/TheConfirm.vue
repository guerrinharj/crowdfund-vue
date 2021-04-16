<template>
    
    <div class="main-confirm"> 
        <img src="../assets/icon-check.svg">

        <h2> {{ thankyou }} </h2>
        <p class="paragraph_confirmed"> Your pledge brings us one step closer to sharing {{ titles }} worldwide. You will get
  an email once our campaign is completed. </p>

    <the-button :btndesc="btnmsg" @click="closeModal" v-if="isModal"> </the-button>
    <the-button :btndesc="btnmsg" @click="closeAbout" v-else> </the-button>

    </div>

</template>


<script>
export default {
    props: ['isModal'], 
    data() {
        return {
            btnmsg: 'Got It!',
            thankyou: 'Thank for your support'
        }
    },
    inject: ['titles', 'openTheModal', 'openTheConfirm', 'changeBgColor'], 
    methods: {
    closeModal() {
        const res = false 
            
            this.openTheModal(res)
            this.changeBgColor(res)
    },
    closeAbout() {
        const res = false 
            
        this.openTheConfirm(res)
    } 
    }
}
</script>

<style scoped>

.main-confirm {
    width: 70%;
    margin: auto;
    text-align: center;
}

.paragraph_confirmed {
    opacity: 0.5;
    line-height: 1.5;
    width: 70%;
    margin: 0 auto 3vh ;
}





@media (max-width: 600px) {
    .main-confirm {
        width: 90%
    }

    .paragraph_confirmed {
        width: 90%;
    }




}

</style>