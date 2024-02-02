import { ActivityIndicator, Text, View } from 'react-native';
import PressableWithOpacity from '../PressableWithOpacity';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEditStatusToDoItem } from '../../hooks/useEditStatusToDoItem';


export default function ToDoItem({id, text, isCompleted, refresh}) {

  const editLocalStatus = () => {
    setActualCompletedStatus((actualStatus) => !actualStatus)
  }

  const { loading, editItemStatus } = useEditStatusToDoItem({onEditCallback: editLocalStatus})
  const {navigate} = useNavigation()
  const [actualCompletedStatus, setActualCompletedStatus] = useState(isCompleted)

  const navigateToEdit=() => {
    navigate('EditItem', {id, text, isCompleted: actualCompletedStatus, refreshCallback: refresh })
  }

  return (
    <View style={{opacity: actualCompletedStatus ? 0.4 : 1}}  className="flex flex-row items-center w-full pr-4 bg-white rounded-xl shadow ">
      <PressableWithOpacity className="flex-1 pl-4 pr-2 py-4" onLongPress={navigateToEdit}>
        <Text className={actualCompletedStatus ? "text-white line-through ": "text-white"} numberOfLines={1}>{text}</Text>
      </PressableWithOpacity>
      <PressableWithOpacity  onPress={()=>editItemStatus(!actualCompletedStatus, id)} className="py-4">
        {loading ? <ActivityIndicator color="#ea580c" /> :        
         <View className="rounded-full flex items-center justify-center  border border-orange-400 h-5 w-5">
          {actualCompletedStatus  && !loading? <View className="h-2 w-2 bg-orange-400 rounded-full"/> : null}
        </View>}
      </PressableWithOpacity>
    </View>
  );
}

