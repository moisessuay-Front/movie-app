<template>
    <h1 class="text-center my-5 fw-bold display-5">Películas</h1>

    <div class="row">
        <div class="col-md-3 mb-5" v-for="pelicula in peliculas" :key="pelicula.id">
            <PeliculaCard 
                :pelicula="pelicula"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    import {
        getPeliculas,
        createPelicula,
        updatePelicula,
        deletePelicula
    } from '@/services/peliculaService'

    import { getActores } from '@/services/actorService';
    import { getGeneros } from '@/services/generoService';
    import PeliculaCard from '@/components/PeliculaCard.vue';

    const peliculas = ref([])
    const actores = ref([])
    const generos = ref([])

    const peliculaSeleccionada = ref(null)
    const isEditing = ref(false)

    const loadData = async () => {
        peliculas.value = await getPeliculas()
        actores.value = await getActores()
        generos.value = await getGeneros()
        console.log(peliculas.value)
    }

    onMounted(loadData)

</script>

<style scoped>
</style>