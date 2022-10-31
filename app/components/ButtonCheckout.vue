<template>
    <button class="checkout" disabled>Siparişi Tamamla</button>
</template>

<script>
export default {

}
</script>

<style scoped>
.checkout:disabled {
    position: relative;
    display: inline-block;
    background: #c7c7c7;
    color: white;
    border: none;
    border-radius: 0;
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: default;
    letter-spacing: 0.0625rem;
}
</style>