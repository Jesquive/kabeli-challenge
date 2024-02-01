import { firestore } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ToDoItemsCollectionName = 'ToDoItems'
const ToDoItemsCollectionRef = collection(firestore,ToDoItemsCollectionName)

export const getAllToDoItems = async () => {
    const collectionSnapshot = await getDocs(ToDoItemsCollectionRef)
    const mappedCollection = collectionSnapshot.docs.map((doc)=> {
        return {id: doc.id, ...doc.data()}
    })
    return mappedCollection
}