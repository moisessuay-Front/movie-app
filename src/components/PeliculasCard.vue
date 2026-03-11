<template>
    <div class="card shadow-sm">
        <img :src="pelicula.poster" :alt="pelicula.nombre" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                {{ pelicula.nombre }}
            </h5>
            <p class="text-muted">
                {{ pelicula.year }}
            </p>
            <p class="small text-muted">
                <span class="me-3">🎭Actores: {{ pelicula.actors ? pelicula.actors.length : 0 }}</span>
                <span>🎬Generos: {{ pelicula.generos ? pelicula.generos.length : 0 }}</span>
            </p>
        </div>
        <div class="card-footer text-center">
            <button class="btn btn-info btn-sm me-2">Detalles</button>
            <button class="btn btn-primary btn-sm me-2">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        pelicula: Object
    })

</script>

<style scoped>
</style>