<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">Películas</a>
            <router-link class="nav-link" to="/actors">Actores</router-link>
            <a class="nav-link" href="#">Géneros</a>
            </div>
        </div>
        </div>
    </nav>

</template>

<script setup>
import router from '@/router';


</script>


<style scoped>


</style>