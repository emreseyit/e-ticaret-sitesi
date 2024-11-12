<template>
    <header class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <h1>T-STORE</h1>
        </router-link>
        <nav class="navbar-menu">
          <router-link to="/" class="navbar-link">Home</router-link>
          <router-link to="/cart" class="navbar-link">Cart</router-link>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.navbar {
    background-color: #1a1a1a;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.navbar-logo {
    text-decoration: none;
}

.navbar-logo h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
}

.navbar-menu {
    display: flex;
    gap: 1.5rem;
}

.navbar-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #b0b0b0;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-link:hover {
    color: #ffffff;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      padding: 1rem;
    }

    .navbar-menu {
      margin-top: 1rem;
    }
}
</style>