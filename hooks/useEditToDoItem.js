import { useState } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { editToDoItem } from '../services/ToDoItemsService';
import { Keyboard } from 'react-native';

export const useEditToDoItem = ({onEditCallback}) => {
    const [loading, setLoading] =  useState(false)

    const editItem = async (data, id) => {
        Keyboard.dismiss()
        setLoading(true)
        try {
            console.log(data)
            await editToDoItem(data, id)
            if(onEditCallback) onEditCallback()
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Exito',
                textBody: 'Se ha editado con exito.',
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

    
    return { loading, editItem }
}