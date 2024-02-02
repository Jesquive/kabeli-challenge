import React, { useEffect, useState } from 'react';
import { getAllToDoItems } from '../services/ToDoItemsService';

export const useToDoItems = () => {
    const [items, setItems] =  useState([])

    const getItemsOnLoad = async () => {
       const data = await getAllToDoItems()
       setItems(data)
       console.log(data)
    }

    useEffect(()=>{
        getItemsOnLoad()
    },[])

    
    return items
}