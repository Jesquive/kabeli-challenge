import { Text, View } from 'react-native';
import PressableWithOpacity from '../PressableWithOpacity/PressableWithOpacity';
import { useNavigation } from '@react-navigation/native';


export default function ToDoItem({id, text, status}) {

  const {navigate} = useNavigation()

  const navigateToEdit=() => {
    navigate('EditItem', {id, text, status})
  }

  return (
    <PressableWithOpacity onPress={navigateToEdit} className="bg-white rounded-xl shadow p-4">
      <Text className="text-red">{text}</Text>
      
    </PressableWithOpacity>
  );
}

