import { useCallback, useEffect, useState } from 'react';
import { useToDoItemsStore } from '../stores/ToDoItemsStore';
import { getToDoItemsPaginated } from '../services/ToDoItemsService';

export const useToDoItemsCache = ({itemsPerLoad}) => {
    const [loading, setLoading] =  useState(false)
    const [hasError, setHaseError] = useState(false);
    const [cachedItems, storeData, lastVisible ] = useToDoItemsStore((state) => [state.cachedItems, state.saveItems, state.lastVisible])
    const compareData = useCallback(
        (newData, lastVisible) => {

    const isEqual = JSON.stringify(newData) === JSON.stringify(cachedItems);
          if (!isEqual) {
            storeData(newData, lastVisible);
          }
        },
        [cachedItems, storeData],
      );

    const retrieveData = useCallback(async () => {
        setLoading(true)
        try {
          const {data, lastVisible} = await getToDoItemsPaginated(itemsPerLoad)
          compareData(data, lastVisible);
        } catch (err) {
          setHasError(true);
        } finally {
          setLoading(false);
        }

      }, [compareData]);
    
      useEffect(() => {
        if (!loading && !cachedItems && !hasError) {
            retrieveData();
          }
      },  [cachedItems, loading, retrieveData]);

    
    return { loading, data: cachedItems, lastVisible: lastVisible }
}