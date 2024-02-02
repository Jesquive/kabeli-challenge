import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";

const ToDoItemsCollectionName = 'ToDoItems'
const ToDoItemsCollectionRef = collection(firestore,ToDoItemsCollectionName)

export const getAllToDoItems = async () => {
    const collectionSnapshot = await getDocs(ToDoItemsCollectionRef)
    const mappedCollection = collectionSnapshot.docs.map((doc)=> {
        return {id: doc.id, ...doc.data()}
    })
    return mappedCollection
}

export const createToDoItem = async (itemData) => {
    return await addDoc(ToDoItemsCollectionRef, {
        Text: itemData.Title,
        isCompleted: false,
    });
}