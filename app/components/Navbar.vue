<template>
    <div class="nav-wrapper">
        <div class="nav-logo">
            <router-link to='/'>
                <h1>T-STORE</h1>
            </router-link>
        </div>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link to='/'>Home</router-link>
                </li>
                <li>
                    <router-link to='/cart'>Cart</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Montserrat, sans-serif;
    background-color: #212121;
    padding: 20px 30px;
    color: white;
    margin-bottom: 1em;
    border-bottom: #424242 solid 1px;
}

.nav-logo {
    font-weight: bold;
    font-size: 1.1em;
    color: white;
    text-decoration: none;
}

.nav-list {
    list-style: none;
}

.nav-list li {
    display: inline-block;
    margin: 0 1.5em;
    margin-left: 1em;
}

.nav-list a {
    color: #9e9e9e;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-list a:hover {
    color: white;
    font-weight: bold;
    font-size: 1.1em;
}

a{
    color:white;
}
</style>