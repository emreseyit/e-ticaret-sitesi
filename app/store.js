import { createStore } from 'vuex'
import { products } from './products.js'

export const store = createStore({
    modules: {
        products,
    }
})