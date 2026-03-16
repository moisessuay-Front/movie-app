import { logout } from "@/services/authService";
import { createStore } from "vuex";

export default createStore ({
    state: {
        user: null,
        rol: null,
        useProfile: null
    },
    
    mutations: {
        setUser(state, user){
            state.user = user
        },

        setRol(state, rol){
            state.rol
        },

        setUserProfile (state, profile){
            state.profile
        },
        logout (state) {
            state.user = null
            state.rol = null
            state.profile = null 
        }
        }
    
})