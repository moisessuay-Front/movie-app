<template>
    <h2 class="my-5 text-center">Generos</h2>
    <!-- aqui ira luego el formulario para crear/editar generos -->

    <GeneroForm 
        :genero="generoSeleccionado"
        @guardar="guardarGenero"
    />

    <table class="table table-striped mb-5">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="genero in generos" :key="genero.id">
                <td>{{ genero.nombre }}</td>
                <td>
                    <button class="btn btn-primary btn-sm me-2" @click="editGenero(genero)">Editar</button>
                    <button class="btn btn-danger btn-sm" @click="removeGenero(genero.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import GeneroForm from '@/components/GeneroForm.vue'

    import {
        getGeneros,
        createGenero,
        updateGenero,
        deleteGenero
    } from '../services/generoService'

    const generos = ref([])
    const generoSeleccionado = ref(null)
    const isEditing = ref(false)

    const loadGeneros = async () => {
        try {
            generos.value = await getGeneros()
        } catch (error) {
            console.error('Error al cargar generos: ', error)
        }
    }

    onMounted(loadGeneros)

    const guardarGenero = async (genero) => {
        if (isEditing.value) {
            await updateGenero(generoSeleccionado.value.id, genero)
        } else {
            await createGenero(genero)
        }

        generoSeleccionado.value = null
        isEditing.value = false

        await loadGeneros()
    }

    const editGenero = (genero) => {
        generoSeleccionado.value = genero
        isEditing.value = true
    }

    const removeGenero = async (id) => {
        if (!confirm('Seguro/a quieres eliminar este género?')) return
        await deleteGenero(id)
        await loadGeneros()
    }
</script>

<style scoped>
</style>