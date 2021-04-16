<template>

    <div class="mobile-menu"> 

        <img class="menu-burger close-burger" src="../assets/icon-close-menu.svg" @click="openMobileMenu(false)">

        <div class="mobile-menu-container">
            <ul>
                <li v-for="mobilemenuitem in headermenu" :key="mobilemenuitem"> {{ mobilemenuitem }} </li>
            </ul> 

        </div>
    </div>
    
</template>


<script>
export default {
    inject: ['headermenu', 'openMobileMenu']   
}
</script>


<style scoped>

.mobile-menu {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 2000;
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(133, 133, 133, 0.5));
    overflow: hidden
}

.mobile-menu-container {
    margin: 12vh auto;
    width: 80%;
    background-color: white;
    border-radius: 20px;
    
}

ul {
    padding: 20px;
    list-style-type: none;
}

li {
    padding: 20px;
    border-bottom: solid 1px #ccc;
    cursor: pointer;
    font-weight: 500
}

.close-burger {
    position: absolute;
    top: 65px;
    right: 65px;
}


</style>