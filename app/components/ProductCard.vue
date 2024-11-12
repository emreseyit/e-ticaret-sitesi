<template>
    <div class="product-card">
        <div class="product-image">
            <router-link :to="`/products/${product.Id}`">
                <img :src="product.img" :alt="product.Title">
            </router-link>
        </div>
        <div class="product-info">
            <h3 class="product-title">
                <router-link :to="`/products/${product.Id}`">
                    {{ product.Title }}
                </router-link>
            </h3>
            <div v-if="product.Ratings" class="product-rating">
                <span class="rating-stars">
                    ★★★★★
                </span>
                <span class="rating-score">
                    {{ (product.Ratings.reduce((a, b) => a + b) / product.Ratings.length).toFixed(1) }}
                </span>
                <span class="rating-count">({{ product.Ratings.length }})</span>
            </div>
            <div class="product-price">
                {{ product.price.amount.toFixed(2) }} {{ product.price.currency }}
            </div>
            <button-add-to-cart @click="addToCart(product.Id)" class="add-to-cart-btn" />
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
        product: {
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
.product-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
    position: relative;
    padding-top: 75%;
    overflow: hidden;
}

.product-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-image:hover img {
    transform: scale(1.05);
}

.product-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.product-title {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    font-weight: 600;
}

.product-title a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;
}

.product-title a:hover {
    color: #0056b3;
}

.product-rating {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.rating-stars {
    color: #ffc107;
    margin-right: 0.25rem;
}

.rating-score {
    font-weight: 600;
    margin-right: 0.25rem;
}

.rating-count {
    color: #6c757d;
}

.product-price {
    font-size: 1.125rem;
    font-weight: 700;
    color: #28a745;
    margin-bottom: 0.75rem;
}

.add-to-cart-btn {
    margin-top: auto;
}

@media (max-width: 768px) {
    .product-title {
        font-size: 0.875rem;
    }

    .product-rating, .product-price {
        font-size: 0.8125rem;
    }
}
</style>