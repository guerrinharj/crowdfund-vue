<template>

        <button class="the-button"> 
                    {{ btndesc }}
         </button>
    
</template>

<script>
export default {
    props: ['btndesc']
    
}
</script>


<style scoped>

    .the-button {
    background-color: hsl(176, 50%, 47%);
    outline: none;
    padding: 20px;
    border: none;
    color: white;
    border-radius: 40px;
    width: 160px;
    font-size: 0.9rem;
    font-weight: 700;
    transition: 0.3s ease;
    cursor: pointer;
}

    .the-button:hover {
        background-color: white;
        border: solid 1px  hsl(176, 50%, 47%);
        color:  hsl(176, 50%, 47%);
        transition: 0.3s ease;
    }

</style>