<template>
    <h2 class="text-center my-5">Actores</h2>
    <!-- Aqui irá despues el formulario para crear y editar actores -->

    <ActorForm 
        :actor="actorSeleccionado"
        @guardar="guardarActor"
    />

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
                    <button class="btn btn-primary btn-sm me-2" @click="editActor(actor)">Editar</button>
                    <button class="btn btn-danger btn-sm" @click="removeActor(actor.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import ActorForm from '@/components/ActorForm.vue'
    //aqui deberiamos importar despues el formulario para crear y editar actores
    import {
        getActores,
        createActor,
        updateActor,
        deleteActor
    } from '../services/actorService'

    const actores = ref([])
    const actorSeleccionado = ref(null)
    const isEditing = ref(false)

    const loadActores = async () => {
        try {
            actores.value = await getActores()
        } catch (error) {
            console.error('Error al cargar Actores: ', error)
        }
    }

    onMounted(loadActores)

    const guardarActor = async (actor) => {
        if (isEditing.value) {
            await updateActor(actorSeleccionado.value.id, actor)
        } else {
            await createActor(actor)
        }

        actorSeleccionado.value = null
        isEditing.value = false

        await loadActores()
    }

    const editActor = (actor) => {
        actorSeleccionado.value = actor
        isEditing.value = true
    }

    const removeActor = async (id) => {
        if (!confirm('Seguro/a quieres eliminar este actor?')) return
        await deleteActor(id)
        await loadActores()
    }
</script>

<style scoped></style>