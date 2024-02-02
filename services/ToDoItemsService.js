import { firestore } from "../firebaseConfig";
import { serverTimestamp , collection, getDocs, updateDoc, addDoc, doc, deleteDoc, orderBy, limit, startAfter, query } from "firebase/firestore";

const ToDoItemsCollectionName = 'ToDoItems'
const ToDoItemsCollectionRef = collection(firestore,ToDoItemsCollectionName)

export const getAllToDoItems = async () => {
    const collectionSnapshot = await getDocs(ToDoItemsCollectionRef)
    const mappedCollection = collectionSnapshot.docs.map((doc)=> {
        return {id: doc.id, ...doc.data()}
    })
    return mappedCollection
}

export const getToDoItemsPaginated = async (itemsPerLoad=10, startAfterDoc) => {
    let q = null
    if(startAfterDoc){
        q = query(ToDoItemsCollectionRef, orderBy('createdAt', 'desc'), limit(itemsPerLoad), startAfter(startAfterDoc))

    } else {
        q = query(ToDoItemsCollectionRef, orderBy('createdAt', 'desc'), limit(itemsPerLoad))

    }
    const querySnapshot = await getDocs(q)
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
    const mappedCollection = querySnapshot.docs.map((doc)=> {
        return {id: doc.id, ...doc.data()}
    })
    return {data:mappedCollection, lastVisible}
}

export const createToDoItem = async (itemData) => {
    return await addDoc(ToDoItemsCollectionRef, {
        Text: itemData.Title,
        isCompleted: false,
        createdAt:  serverTimestamp(),
    });
}

export const editToDoItem = async (itemData, docId) => {
    const docRef = doc(firestore, ToDoItemsCollectionName, docId)
    return await updateDoc(docRef, {
        Text: itemData.Title,
        isCompleted: itemData.Status,
    });
}


export const editStatusToDoItem = async (status, docId) => {
    const docRef = doc(firestore, ToDoItemsCollectionName, docId)
    return await updateDoc(docRef, {
        isCompleted: status,
    });
}
export const deleteToDoItem = async (docId) => {
    const docRef = doc(firestore, ToDoItemsCollectionName, docId)
    return await deleteDoc(docRef);
}