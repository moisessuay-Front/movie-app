import { db } from "@/firebase/firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    Doc,
    doc
} from 'firebase/firestore'



const actoresCollection = collection(db, 'actores')

export const getActores = async () => {
    const snapshot = await getDocs(actoresCollection)

    return snapshot.docs.map (doc => ({
        id: doc.id,
        ...doc.data()
    }))    
}