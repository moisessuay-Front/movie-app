<template>
    <h1 class="text-center my-5 fw-bold display-5">Películas</h1>

    <PeliculaForm 
        :pelicula="peliculaSeleccionada"
        :actores="actores"
        :generos="generos"
        @guardar="guardarPelicula"
    />



    <div class="row">
        <div class="col-md-3 mb-5" v-for="pelicula in peliculas" :key="pelicula.id">
            <PeliculaCard 
                :pelicula = "pelicula"
                @edit = "editPelicula"
                @delete = "removePelicula"
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

    import { getActores } from '@/services/actorService'
    import { getGeneros } from '@/services/generoService'
    import PeliculaCard from '@/components/peliculaCard.vue'
    import PeliculaForm from '@/components/peliculaForm.vue'

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

    const guardarPelicula = async (pelicula) => {
        if(isEditing.value) {
            await updatePelicula(peliculaSeleccionada.value.id, pelicula)
        } else {
            await createPelicula(pelicula)
        }

        peliculaSeleccionada.value = null
        isEditing.value =  false

        await loadData()
    }

    const editPelicula = (pelicula) => {
        peliculaSeleccionada.value = pelicula
        isEditing.value = true
    }

    const removePelicula = async (id) => {        
        if (!confirm('Seguro/a que quieres eliminar esta Película?')) return
        await deletePelicula(id)
        await loadData()
    }




</script>

<style scoped>
</style>