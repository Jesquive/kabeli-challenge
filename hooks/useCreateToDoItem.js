import { useState } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { createToDoItem } from '../services/ToDoItemsService';
import { Keyboard } from 'react-native';

export const useCreateToDoItem = ({onCreateCallback}) => {
    const [loading, setLoading] =  useState(false)

    const createItem = async (data) => {
        Keyboard.dismiss()
        setLoading(true)
        try {
            await createToDoItem(data)
            if(onCreateCallback) onCreateCallback()
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Exito',
                textBody: 'Se ha creado un nuevo item.',
              })
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

    
    return { loading, createItem }
}