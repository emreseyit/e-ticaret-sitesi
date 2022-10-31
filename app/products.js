import {products as dbProducts} from '../products.js'

export const products = {
    namespaced: true,

    state() {
        return {
            all: [],
            specificProduct: {},
            cart: [],
        }
    },

    mutations: {
        setProducts(state, { products }) {
            state.all = products
            if(!state.cart[0]){
            state.cart = state.all
            state.cart.map(item => {
                item['quantity'] = 0
            })
                
            }
        },
        setProduct(state, { products, id }) {
            state.specificProduct = products.find(x => {
                return x.Id == id
            })
            if(!state.cart[0]){
            state.cart = products
            state.cart.map(item => {
                item['quantity'] = 0
            })
                
            }
        },
        addToCart(state, { id }) {
            state.cart.map(item => {
                if ( item.Id === id) {
                    item.quantity++
                }
            })
        },
        changeQuantity(state, { id, quantity }){
            state.cart.map(item => {
                if(item.Id === id) {
                    item.quantity = quantity
                }
            })
        }


    },

    actions: {
        async fetchProducts(ctx) {
            // const res = await window.fetch('https://raw.githubusercontent.com/dotnet-presentations/ContosoCrafts/master/src/wwwroot/data/products.json')
            // const json = await res.json()
            const json = dbProducts

            ctx.commit('setProducts', { products: json })
        },
        async fetchProduct(ctx, { id }) { 
            // 'Price' alanına ihtiyaç duyduğum için url'den çekmek yerine dosyaya kopyalayıp modifiye ettim.
            // const res = await window.fetch('https://raw.githubusercontent.com/dotnet-presentations/ContosoCrafts/master/src/wwwroot/data/products.json')
            // const json = await res.json()
            const json = dbProducts

            ctx.commit('setProduct', { products: json, id })
        },
        addToCart(ctx, { id }) {
            ctx.commit('addToCart', { id })
        },
        changeQuantity(ctx, {id, quantity}){
            ctx.commit('changeQuantity', { id, quantity})
        },

    }
}