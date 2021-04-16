<template> 
        <main>

            <div class="symbol"> 
                 <img alt="section" :src="require('@/assets/' + logo + '')">
            </div>

            <h2> {{ title }} </h2>

            <p> {{ shortbio }} </p>

            <div class="btns"> 

                <router-link to="/back">
                <the-button
                :btndesc="btndescription"
                @click="triggerModal">
                    </the-button>
                </router-link>

                <div class="bookmark">
                    <img src='../assets/icon-bookmark.svg'> 
                    <button>  
                        {{ bookmark }}
                    </button>
                </div>

            </div>

        </main>

    
</template>

<script>



export default {
    props: ['logo', 'title', 'shortbio'],
    data() {
        return {
            btndescription: "Back this project",
            bookmark: "Bookmark"
        }
    },
    inject: ['openTheModal', 'changeBgColor'],
    methods: {
        triggerModal(){

            const res = true 
            
            this.openTheModal(res)
            this.changeBgColor(res)

            

            

        }
    }

    
}
</script>

<style scoped>


    main {
        width:80%;
        margin: 8vh auto;
        text-align: center;
    }

    .symbol {
        margin: auto;
        position: absolute;
        left: 48%;
        right: 48%;
        top: -30px;
    }

    h2 {
        font-size: 1.8rem;
        color: rgba(0, 31, 31, 0.822)
    }

    p {
        color:  hsl(0, 0%, 48%);
        font-size: 1rem;
        font-weight: 400;
        margin: 5vh 0
    }

    .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: auto;
    }


.bookmark {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease;
}

.bookmark:hover  {
    transform: translateY(-5px);
    transition: 0.2s ease;
}

.bookmark button {
    border: none;
    width: 160px;
    padding: 20px;
    border-radius: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    color: rgba(59, 59, 59, 0.7);
    transition: 0.2s;
    cursor: pointer;
}

.bookmark img {
    position: absolute;
    left:-20px
}


@media (max-width: 600px) {

    .btns {
        justify-content: center;
    }

    .btns .the-button {
        width: 70%;
        margin-right: 20px
    }

    .bookmark img {
        position: relative;
        left: 0;
    }

    .bookmark button {
        display: none;
    }


}


</style>