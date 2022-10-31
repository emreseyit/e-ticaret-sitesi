<template>
    <div class="wrapper">
        <div class="items">
            <h2>Sepetiniz</h2>
            <div v-for="item in cartItems" :key="item.Id">
                <div v-if="item.quantity !== 0" class="item">
                    <div class="image">
                        <router-link :to="`/products/${item.Id}`">
                            <img :src="item.img">
                        </router-link>
                    </div>
                    <div class="title">
                        <router-link :to="`/products/${item.Id}`">
                            {{ item.Title }}
                        </router-link>
                    </div>
                    <div @click="changeQuantity($event, item.Id, item.quantity - 1)" class="change-quantity">-</div>
                    <div class="quantity">Adet: {{ item.quantity }} </div>
                    <div @click="changeQuantity($event, item.Id, item.quantity + 1)" class="change-quantity">+</div>
                    <div class="price">
                        {{ item.price.amount.toFixed(2) }} {{ item.price.currency }}
                    </div>
                    <div @click="changeQuantity($event, item.Id, 0)" class="remove-item">Kaldır</div>
                </div>
            </div>
        </div>
        <div class="checkout">
            <div class="total-price">
                <h4>Toplam Tutar: </h4>
                {{ totalPrice.toFixed(2) }} TRY
            </div>
            <div class="button-checkout">
                <button-checkout />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ButtonCheckout from '../components/ButtonCheckout.vue'

export default {
    components: {
        ButtonCheckout
    },
    setup() {
        const store = useStore()
        const cartItems = computed(() => store.state.products.cart)
        const totalPrice = computed(() => {
            const subTotal = ref(0)
            store.state.products.cart.map(item => {
                if (item.quantity !== 0) {
                    subTotal.value += item.quantity * item.price.amount
                }
            })
            return subTotal.value
        })
        const changeQuantity = (event, id, quantity) => {
            store.dispatch('products/changeQuantity', { id, quantity })

        }
        return {
            cartItems,
            totalPrice,
            changeQuantity,
        }
    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    color:black;
}
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px;
    margin-bottom: 0;
    align-items: flex-start;
}

.items {
    display: flex;
    flex-direction: column;
}

.item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin: 12px;
    border-radius: 7px;
    background-color: rgb(236, 236, 236);
    min-width: 1000px;
    min-height: 100px;
}

img {
    max-width: 90px;
    margin-right: 15px;
}

.title {
    width: 50%;
}

.checkout {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 50px;
}

.button-checkout {
    margin: 0;
}

.total-price {
    display: flex;
    flex-direction: row;
}

.remove-item {
    text-decoration: underline;
}

.remove-item:hover {
    color: red;
    cursor: pointer;
}

.change-quantity:hover {
    cursor: pointer;

}
</style>