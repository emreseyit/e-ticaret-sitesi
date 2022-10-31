<template>
    <div>
        <form class="search-container">
            <input type="text" id="search-bar" v-model="filter" placeholder="Aradığınız ürünü yazınız...">
            <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png">
        </form>
    </div>
    
    <product-card 
        :products="products"
        @addToCart="addToCart"
    />
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
    components: {
        ProductCard,
    },
    setup() {
        const store = useStore()
        const filter = ref("")

        onMounted(async () => {
            await store.dispatch('products/fetchProducts')
        })

        const products = computed(() => store.state.products.all.filter(item => {
            const query = item.Id + item.Title + item.Maker + item.Description
            return query.toLowerCase().includes(filter.value.toLowerCase())
        }))

        const addToCart = (id) => {
            store.dispatch('products/addToCart', { id })
        }

        return {
            products,
            addToCart,
            filter,
        }
    },

}
</script>

<style scoped>
.search-container {
    min-width: 490px;
    max-width: 40%;
    display: block;
    margin: 0 auto;
}

input#search-bar {
    margin: 0 auto;
    width: 100%;
    height: 45px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #D0CFCE;
    outline: none;
}

input#search-bar:focus {
    border: 1px solid black;
    transition: 0.35s ease;
    color: black;
}

input#search-bar:focus::-webkit-input-placeholder {
    transition: opacity 0.45s ease;
    opacity: 0;
}

input#search-bar:focus::-moz-placeholder {
    transition: opacity 0.45s ease;
    opacity: 0;
}

input#search-bar:focus:-ms-placeholder {
    transition: opacity 0.45s ease;
    opacity: 0;
}

.search-icon {
    position: relative;
    float: right;
    width: 75px;
    height: 75px;
    top: -62px;
    right: -10px;
}
</style>