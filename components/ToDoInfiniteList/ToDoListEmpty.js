import { Text, View } from 'react-native';
import PressableWithOpacity from '../PressableWithOpacity';
import { useNavigation } from '@react-navigation/native';


export default function ToDoListEmpty() {
  return (
    <View>
        <Text>Crea tu primer tarea con el boton en la zona inferior</Text>
    </View>
  );
}

