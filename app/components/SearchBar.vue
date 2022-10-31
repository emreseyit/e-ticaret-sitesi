<!-- Ne denediysem de input verisini üste aktaramadım. 
    Daha sonra entegre etmek için saklıyorum. -->

<template>
    <div>
        <input 
            type="text" 
            v-model="filter" 
            placeholder="Aradığınız ürünü yazınız..."
        >
    </div>
</template>

<script>
export default{
    props:{
        filter: {
            type: String,
            default: "",
        }
    },
}
</script>
