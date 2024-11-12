<template>
    <div class="layout-container">
      <navbar />
      <router-view />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: {
      Navbar,
    }
}
</script>

<style scoped>
.layout-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    position: relative;
}

.layout-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23000" fill-opacity=".05"/%3E%3C/svg%3E');
    opacity: 0.5;
    z-index: 0;
}

navbar, router-view {
    position: relative;
    z-index: 1;
}
</style>