import { useState } from 'react';
import { getToDoItemsPaginated } from '../services/ToDoItemsService';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useToDoItemsCache } from './useToDoItemsCache';

export const useToDoItems = () => {
    const [itemsPerLoad] = useState(12)
    const {loading:cacheLoading, data:cachedItems, lastVisible} = useToDoItemsCache({itemsPerLoad })

    const [loading, setLoading] =  useState(false)

    const [items, setItems] =  useState(cachedItems ? [...cachedItems] : [])

    const [hasError, setHasError] = useState(false)
    const [startAfter, setStartAfter] = useState(lastVisible)
    const [isLastItem, setIsLastItem] = useState(false)
    
    const getMoreItems = async () => {
        setLoading(true)
        try {
            if(!isLastItem){
                const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad, startAfter)
                setItems([...items,...data])
                setStartAfter(lastVisible)
                if(data.length < itemsPerLoad || data.length==0) {
                    setIsLastItem(true) 
                } else {
                    setIsLastItem(false)
                }
            }
        } catch (error) {
            console.log(error)

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
        setIsLastItem(false)
        setHasError(false)
        try {
            const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad)
            setItems([...data])
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


    return {items, getMoreItems, isLastItem, loading: loading || cacheLoading, refresh, hasError}
}