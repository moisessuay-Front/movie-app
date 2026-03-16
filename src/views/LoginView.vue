<template>
    


</template>


<script setup>

    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import { login } from '@/services/authService'
    import { getUserProfile } from '@/services/authService'
    import { getUserRol } from '@/services/authService'

    const store = useStore()
    const router = useRouter()

    const email = ref ('')
    const password = ref ('')

    const iniciarSesion = async () => {
        try {
            const user = await login(email.value, password.value)
            store.commit('setUser', user)

            const rol = await getUserRol(user.uid)
            store.commit('setRol', rol)

            const profile = await getUserProfile (user.uid)
            store.commit('setUserProfile', profile)

            router.push('/peliculas')

        }catch (error){
            alert (error.message)
        }
    }


</script>


<style scoped>

</style>