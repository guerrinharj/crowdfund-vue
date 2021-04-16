<template>

    <main>

        <div class="stats">

            <div class="money numbox"> 
                    <h2 class="num">  $ {{ currentmoney }} </h2>
                    <p> of $ {{ totalmoney }} backed </p>
            </div>

            <div class="backers numbox"> 
                    <h2 class="num"> {{ backers }} </h2>
                    <p> {{totalBackers }} </p>
            </div>

            <div class="days numbox"> 
                    <h2 class="num"> {{ daysleft }}</h2>
                    <p> {{ daysLeft }} </p>
            </div>

        </div>

        <div class="bar">
            <div class="full-bar">
                <div class="current-bar" :style="{width: percentage}"> 

                </div>
            </div>
        </div>

    </main>

</template>

<script>
export default {
    props: ['currentmoney', 'totalmoney', 'backers', 'daysleft', 'percentage'],
    data() {
        return {
            totalBackers: 'total backers',
            daysLeft: 'days left'
        }
    }
}
</script>

<style scoped>

main {
    width: 100%;
    margin: auto;
    padding: 30px;
}

.stats {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    
}

.stats div {
    border-left: solid 0.5px rgb(235, 233, 233);
    padding: 1px 40px;
    text-align: left;
}

.stats div:first-child {
    border-left: none;
    padding: 10px 20px;
}

.stats div h2 {
    margin-bottom: 2px;
    font-size: 2.4rem;
}

.stats div p {
    opacity: 0.6;
    font-size: 15px;
}

.bar {
    width: 90%;
    margin: 3vh auto;
}

.full-bar {
    width: 100%;
    margin: auto;
    height: 1.2vh;
    border-radius: 30px;
    background-color: rgb(231, 230, 230);
    position: relative;
}

.current-bar {
    position: absolute;
    background-color: hsl(176, 50%, 47%);
    height: 100%;
    animation: barwidth 4s ease forwards
}

.numbox {
    position: relative
}

.num {
    animation: appear 5s ease-in forwards;
}


@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}



@keyframes barwidth {
    from {
        width: 0%
    }

    to {
        width: 87%
    }
}


@media (max-width: 600px) {
    

    .stats {
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin: auto;
    }

    .stats div {
        border-left: none;
    }


}

</style>