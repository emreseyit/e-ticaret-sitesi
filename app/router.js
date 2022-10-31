import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomePage from './views/HomePage.vue'
import CartPage from './views/CartPage.vue'
import ProductPage from './views/ProductPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            // alias: ['/:home']
        },
        {
            path: '/cart',
            component: CartPage,
        },
        {
            path: '/products/:id',
            component: ProductPage,
        },
    ],
})