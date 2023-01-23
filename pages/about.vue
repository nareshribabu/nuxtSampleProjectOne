<!-- Mine -->
<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus optio amet a? Iusto nihil ratione similique eaque, assumenda ab?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus optio amet a? Iusto nihil ratione similique eaque, assumenda ab?</p>
        
        <!-- <h3>Data Retrieved from CurrencyAPI:</h3> -->
        <div>{{ data }}</div>
    </div>
</template>

<script setup>

    const { data } = await useFetch('/api/currency/CAD')
    
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    h3 {
        margin-bottom: 20px;
        font-size: 25px;
    }
    p {
        margin: 20px 0;
    }
</style>