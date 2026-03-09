<template>
    <h2 class="text-center my-5">Actores</h2>
    <!-- Aquí ira el formulario para crear y editar actores -->
    
    <table class="table table-striped mb-5">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="actor in actores" :key="actor.id">
                <td>{{ actor.nombre }}</td>
                <td>
                    <button class="btn btn-primary btn-sm me-2">Editar</button>
                    <button class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    //aqui deberiamos importar despues el formulario para crear y editar actores
    import {
        getActores
    } from '../services/actorService'

    const actores = ref([])

    const loadActores = async () => {
        actores.value = await getActores()
    }

    onMounted(loadActores)

</script>


<style scoped>


</style>