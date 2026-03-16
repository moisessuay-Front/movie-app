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
                <span class="me-3">🎭Actores: {{ pelicula.actores ? pelicula.actores.length : 0 }}</span>
                <span>🎬Generos: {{ pelicula.generos ? pelicula.generos.length : 0 }}</span>
            </p>
        </div>
        <div class="card-footer text-center">
            <router-link :to="`/peliculas/${pelicula.id}`" class="btn btn-info btn-sm me-2">Detalles</router-link>
            <button @click="emit('edit', pelicula)" class="btn btn-primary btn-sm me-2">Editar</button>
            <button @click="emit('delete', pelicula.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        pelicula: Object
    })

    const emit = defineEmits ([
        'edit',
        'delete'
    ])

</script>

<style scoped>
</style>