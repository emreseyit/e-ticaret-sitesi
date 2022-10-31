<template>
    <button class="add-to-cart">Sepete Ekle</button>
</template>

<script>
export default {

}
</script>

<style scoped>
.add-to-cart {
    position: relative;
    display: inline-block;
    background: #212121;
    color: white;
    border: none;
    border-radius: 0;
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transform: translateZ(0);
    transition: color 0.3s ease;
    letter-spacing: 0.0625rem;
}
.add-to-cart:hover::before {
    transform: scaleX(1);
}

.add-to-cart::before {
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #565657;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease-out;
}
</style>