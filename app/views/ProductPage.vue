<template>
    <div class="wrapper">
        <div class="grid product">
            <div class="column-xs-12 column-md-7">
                <div class="product-gallery">
                    <img :src="product.img">

                </div>
            </div>
            <div class="column-xs-12 column-md-5 title-info">
                <div class="title">
                    <h1>{{ product.Title }}</h1>
                    <h2>{{ product.price.amount }} {{ product.price.currency }}</h2>
                    <div v-if="product.Ratings">
                        {{ (product.Ratings.reduce((a, b) => a + b) / product.Ratings.length).toFixed(2) }} puan
                        <small>( {{ product.Ratings.length }} değerlendirme )</small>
                    </div>
                </div>
                <div class="description-info">
                    <div class="description">
                        <p>{{ product.Description }}</p>
                    </div>
                    <div class="seller"><small> Üretici: {{ product.Maker }}</small></div>
                </div>
                <button-add-to-cart @click='addToCart' />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ButtonAddToCart from '../components/ButtonAddToCart.vue'

export default {
    components: {
        ButtonAddToCart
    },
    setup() {
        const route = useRoute()
        const store = useStore()
        const id = route.params.id
        onBeforeMount(() => {
            store.dispatch('products/fetchProduct', { id })
        })
        const product = computed(() => store.state.products.specificProduct)

        const addToCart = () => {
            store.dispatch('products/addToCart', { id })
        }


        return {
            product,
            addToCart
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pontano+Sans');

* {
    box-sizing: border-box;
    display: flex;
}

*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: 'Pontano Sans', sans-serif;
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    color: black;
    background: white;
    text-rendering: optimizeLegibility;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
    padding: 0 1rem;
    max-width: 75rem;
    min-width: 100%;
}

.title-info {
    flex-direction: column;
    justify-content: space-between;
}

.title-info .title {
    display: block;

}

.description-info {
    display: block;
}

h1,
h2,
h3,
h4 {
    color: #333;
    font-weight: normal;
    margin: 1.75rem 0 1rem 0;
}

h1 {
    font-size: 2.5rem;
    margin: 0;
}

h2 {
    font-size: 2.125rem;
    margin: 20px 0 0 0;
}

h3 {
    font-size: 2rem;
}

h4 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem 0;
}

section {
    display: block;
}

img {
    width: 1100px;
    height: auto;
}

.description {
    border-top: 0.0625rem solid #e3dddd;
    margin: 2rem 0;
    padding: 1rem 0 0 0;
}

.grid>[class*="column-"] {
    padding: 1rem;
}

.grid.menu,
.grid.product {
    border-bottom: 0.0625rem solid #e3dddd;
}

.grid.menu>[class*="column-"] {
    padding: 0.5rem 1rem 0.5rem 1rem;
}

.grid.product {
    padding: 0 0 1.5rem 0;
}

.grid.second-nav>[class*="column-"] {

    padding: 0.5rem 1rem;
}
</style>