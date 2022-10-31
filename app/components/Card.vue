<template>
    <div class="card">
        <div class="content">
            <slot name="content" />
        </div>
        
        <div class="title">
            <slot name="title" />
        </div>

        <div class="rating">
            <slot name="rating" />
        </div>

        <div class="price">
            <slot name="price" />
        </div>

        <div class="button">
            <slot name="button" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>