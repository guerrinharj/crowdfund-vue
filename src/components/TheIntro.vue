<template>

<div class='the-intro'>

    <the-header> </the-header>

</div>
    
</template>

<script>

import TheHeader from './TheHeader.vue'

export default {

components: { TheHeader }
    
}
</script>


<style scoped>

.the-intro {
    width: 100%;
    background-image: url('../assets/image-hero-desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -10px;
    position: relative;
    height: 40vh;
}

</style>