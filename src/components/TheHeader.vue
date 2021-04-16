<template>

    <mobile-menu v-if="isMobileMenu"> </mobile-menu>




    <main>
        <section> 
            <div>
                 <img src="../assets/logo.svg" >
            </div>

            <div>

                <img class="menu-burger" src="../assets/icon-hamburger.svg" @click="openMobileMenu(true)" v-if="!isMobileMenu">


                <ul class="header-menu">
                    <li v-for="item in headermenu" :key="item"> 
                        {{ item }} 
                    </li>
                </ul>
            </div>

        </section> 
    </main>
</template>

<script>

import MobileMenu from './MobileMenu.vue'


    export default {
        components: {
            MobileMenu
        },
        data() {
            return {
                headermenu: ['About', 'Discover', 'Get Started'],
                isMobileMenu: false
            }
        },
        provide() {
            return {
                headermenu: this.headermenu,
                openMobileMenu: this.openMobileMenu
            }
        },
        methods: {
            openMobileMenu(value) {
                this.isMobileMenu = value


            }
        }
    }

</script>


<style scoped>

    main {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section {
        width: 80%;
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 7vh auto;
    }

    div ul  {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div ul li {
        padding: 0;
        margin-right: 30px;
        font-weight: 500;
        color: white;
        cursor: pointer;
    }

    li:after {
        display:block;
        content: '';
        border-bottom: solid 1px #fff;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;

    }

    li:hover:after {
        transform: scaleX(1);
    }

    .menu-burger {
        display: none;
    }


@media (max-width: 600px) {


        .menu-burger {
            display: block;
            cursor: pointer;
        }

        .header-menu {
            display: none;
        }

    
}


</style>