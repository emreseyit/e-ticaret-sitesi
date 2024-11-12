<template>
    <div class="product-page">
      <div class="product-container">
        <div class="product-image">
          <img :src="product.img" :alt="product.Title">
        </div>
        <div class="product-details">
          <h1 class="product-title">{{ product.Title }}</h1>
          <h2 class="product-price">{{ product.price.amount }} {{ product.price.currency }}</h2>
          <div v-if="product.Ratings" class="product-rating">
            <span class="rating-score">{{ averageRating }} </span>
            <span class="rating-stars">★★★★★</span>
            <span class="rating-count">({{ product.Ratings.length }} reviews)</span>
          </div>
          <p class="product-description">{{ product.Description }}</p>
          <p class="product-maker">Manufacturer: {{ product.Maker }}</p>
          <button-add-to-cart @click='addToCart' class="add-to-cart-button" />
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
    
      const averageRating = computed(() => {
        if (product.value.Ratings && product.value.Ratings.length > 0) {
          return (product.value.Ratings.reduce((a, b) => a + b) / product.value.Ratings.length).toFixed(1)
        }
        return 'N/A'
      })

      const addToCart = () => {
        store.dispatch('products/addToCart', { id })
      }

      return {
        product,
        addToCart,
        averageRating
      }
    }
}
</script>

<style scoped>
.product-page {
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.product-image {
    flex: 1 1 400px;
}

.product-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-details {
    flex: 1 1 400px;
}

.product-title {
    font-size: 2.5rem;
    margin: 0 0 0.5rem;
    color: #333;
}

.product-price {
    font-size: 2rem;
    color: #e44d26;
    margin: 0 0 1rem;
}

.product-rating {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.rating-score {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 0.5rem;
}

.rating-stars {
    color: #ffd700;
    margin-right: 0.5rem;
}

.rating-count {
    color: #666;
}

.product-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
}

.product-maker {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
}

.add-to-cart-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
    background-color: #45a049;
}

@media (max-width: 768px) {
    .product-page {
      padding: 1rem;
    }
  
    .product-title {
      font-size: 2rem;
    }
  
    .product-price {
      font-size: 1.5rem;
    }
}
</style>