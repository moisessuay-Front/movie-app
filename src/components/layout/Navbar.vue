<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">Películas!</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto ">
                    <router-link class="nav-link active" aria-current="page" to="/peliculas">Películas</router-link>
                    <router-link class="nav-link" to="/actors">Actores</router-link>
                    <router-link class="nav-link" to="/generos">Generos</router-link>
                </div>
                <div class="navbar-nav ms-auto">
                    <router-link to="/login" class="nav-link">Login</router-link>
                    <router-link to="/register" class="nav-link">Register</router-link>
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