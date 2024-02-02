import React, { useEffect, useState } from 'react';
import { getToDoItemsPaginated } from '../services/ToDoItemsService';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export const useToDoItems = () => {
    const [loading, setLoading] =  useState(true)
    const [items, setItems] =  useState([])
    const [itemsPerLoad] = useState(12)
    const [page, setPage] = useState(0)
    const [hasError, setHasError] = useState(false)
    const [startAfter, setStartAfter] = useState()
    const [isLastItem, setIsLastItem] = useState(false)

    const getMoreItems = async () => {
        setLoading(true)
        try {
            if(!isLastItem){
                const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad, startAfter)
                setItems([...items,...data])
                setStartAfter(lastVisible)
                setPage(1)
                if(data.length < itemsPerLoad || data.length==0) {
                    setIsLastItem(true) 
                } else {
                    setIsLastItem(false)
                    setPage((page)=>page++)
                }
            }
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: 'Ha ocurrido un error, intentalo de nuevo.',
            })
        } finally {
            setLoading(false)
        }


     }

     const refresh = async () => {
        setLoading(true)
        setItems([])
        setStartAfter()
        setPage(1)
        try {
            const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad)
            setItems([...items,...data])
            setPage(1)
            setStartAfter(lastVisible)
            setHasError(false)
        } catch (error) {
            setHasError(true)
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: 'Ha ocurrido un actualizando la lista',
            })
        } finally {
            setLoading(false)
        }
     }

    /* use to load items on page load
        const getItemsOnLoad = async () => {
        setLoading(true)
        try {
            const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad)
            setItems([...items,...data])
            setPage(1)
            setStartAfter(lastVisible)
            setHasError(false)
        } catch (error) {
            setHasError(true)
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: 'Ha ocurrido un error, intentalo de nuevo.',
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getItemsOnLoad()
    },[])
    */
    
    return {items, getMoreItems, isLastItem, loading, refresh}
}