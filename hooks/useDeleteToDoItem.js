import { useState } from 'react';
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';
import { deleteToDoItem, editToDoItem } from '../services/ToDoItemsService';

export const useDeleteToDoItem = ({onDeleteCallback}) => {
    const [loading, setLoading] =  useState(false)

    const deleteItem = async (id) => {
        setLoading(true)
        Dialog.hide();
        try {
            await deleteToDoItem(id)
            if(onDeleteCallback) onDeleteCallback()
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Exito',
                textBody: 'Se ha eliminado con exito.',
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

    const showDeleteDialog = (id) => {
        Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Espera',
            textBody: '¿Estas seguro de que quieres eliminar este item?',
            button: 'Eliminar',
            onPressButton: () => deleteItem(id),
            autoClose: false,
          })
    }

    
    return { loading, showDeleteDialog }
}