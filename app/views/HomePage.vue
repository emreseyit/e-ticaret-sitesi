<template>
  <div class="home-page">
    <header class="header">
      <h1 class="site-title">Indie Market</h1>
      <form class="search-container">
      <input type="text" id="search-bar" v-model="filter" placeholder="Search for products...">
      <button type="submit" class="search-button">
        <i class="fas fa-search"></i>
      </button>
      </form>
    </header>

    <main class="main-content">
      <div class="product-grid">
        <product-card
          v-for="product in filteredProducts"
          :key="product.Id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </main>
  </div>
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

    const filteredProducts = computed(() => store.state.products.all.filter(item => {
      const query = item.Id + item.Title + item.Maker + item.Description
      return query.toLowerCase().includes(filter.value.toLowerCase())
    }))

    const addToCart = (id) => {
      store.dispatch('products/addToCart', { id })
    }

    return {
      filteredProducts,
      addToCart,
      filter,
    }
  },
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.site-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.search-container {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

#search-bar {
  flex-grow: 1;
  height: 45px;
  padding: 0 1rem;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  border-right: none;
  border-radius: 4px 0 0 4px;
  outline: none;
}

#search-bar:focus {
  border-color: #0056b3;
}

.search-button {
  width: 45px;
  height: 45px;
  background-color: #0056b3;
  border: none;
  border-radius: 0 4px 4px 0;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #003d82;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .home-page {
    padding: 1rem;
  }

  .site-title {
    font-size: 2rem;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>