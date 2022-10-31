<template>
    <div id="app">
        <div class="wrapper">
            <card class="card" v-for="product in products" :key="product.id">
                <template v-slot:content>
                    <router-link :to="`/products/${product.Id}`">
                        <img :src="product.img">
                    </router-link>
                </template>

                <template v-slot:title>
                    <router-link :to="`/products/${product.Id}`">
                        {{ product.Title }}
                    </router-link>
                </template>

                <template v-slot:rating>
                    <div v-if="product.Ratings">
                        {{ (product.Ratings.reduce((a, b) => a + b) / product.Ratings.length).toFixed(2) }} puan
                        <small>({{ product.Ratings.length }} değerlendirme)</small>
                    </div>
                </template>

                <template v-slot:price>
                    {{ product.price.amount.toFixed(2) }} {{ product.price.currency }}
                </template>

                <template v-slot:button>
                    <button-add-to-cart @click="addToCart(product.Id)" />
                </template>
            </card>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import ButtonAddToCart from '../components/ButtonAddToCart.vue'
export default {
    components: {
        Card,
        ButtonAddToCart,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },

    },
    methods: {
        addToCart(id) {
            this.$emit('addToCart', id)
        }
    },
    setup() {

    }
}
</script>

<style scoped>
* {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;
}

#app {
    display: flex;
    flex-direction: row;
}

#app .wrapper {
    display: flex;
    max-width: 19%;
    flex-wrap: wrap;
    padding-top: 12px;
}

#app .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin: 12px;
    transition: .15s all ease-in-out;
    border-radius: 7px;
    background-color: rgb(236, 236, 236);
}

#app .card:hover {
    transform: scale(1.1);
}

#app .card a {
    text-decoration: none;
    padding: .5em;
    color: #03A9F4;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app .card a img {
    height: 100%;
    width: 100%;
    margin: 0;
}

#app .card a small {
    padding: .1em;
}
</style>