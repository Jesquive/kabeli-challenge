import { useState } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { editStatusToDoItem } from '../services/ToDoItemsService';

export const useEditStatusToDoItem = ({onEditCallback}) => {
    const [loading, setLoading] =  useState(false)

    const editItemStatus = async (newStatus, id) => {
        setLoading(true)
        try {
            await editStatusToDoItem(newStatus, id)
            if(onEditCallback) onEditCallback()
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: 'Ha ocurrido un error, intentalo de nuevo.',
              })
              console.log(error)
        } finally {
            setLoading(false)
        }
    }

    
    return { loading, editItemStatus }
}