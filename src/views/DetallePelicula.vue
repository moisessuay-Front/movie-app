<template>
    <div v-if="pelicula">
        <h2 class="text-center my-5 py-5 display-3 fw-bold">🍿{{ pelicula.nombre }}</h2>
        <div class="row justify-content-around">
            <div class="col-4">
            <img :src="pelicula.poster" :alt="pelicula.nombre" class="w-100">
            </div>
            <div class="col-4">
                <p class="fs-1"><strong>Estreno:</strong>{{ pelicula.year }}</p>
                <ul class="list-group list-group-flush">
                <li v-for="actor in getNombreActores" :key="actor" class="list-group-item">An item</li>
                    Actor
                
                </ul>
            </div>
        </div>
    </div>
    <div v-else>
        <h5 class="text-center display-3 my-5">No existe la película</h5>
    </div>

</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    //colecciones de datos
    import { getPeliculas } from '@/services/peliculaService';
    import { getActores } from '@/services/actorService';
    import { getGeneros } from '@/services/generoService';

    const route = useRoute()

    const pelicula = ref(null)
    const actores = ref([])
    const generos = ref([])

    const loadData = async () => {
        const peliculas = await getPeliculas()
        pelicula.value = peliculas.find(p=> p.id ===route.params.id)
        actores.value = await getActores()
        generos.value = await getGeneros()
    }

    onMounted(loadData)

    const getNombreActores = () => {
        if (!pelicula.value.actores) return []

        return actores.value.filter (actor => pelicula.value.actores.include(actor.id).map(actor => actor.nombre))
    }

    const getNombreGeneros = () => {
        if (!pelicula.value.generos) return []

        return generos.value.filter (genero => pelicula.value.generos.include(genero.id).map(genero => genero.nombre))
    }


</script>

<style scoped>


</style>