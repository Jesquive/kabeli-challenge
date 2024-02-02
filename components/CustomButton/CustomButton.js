import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PressableWithOpacity from '../PressableWithOpacity/PressableWithOpacity';

export default function CustomButton({text ,onPress, iconName, className="bg-orange-600"}) {
  
  const customClassName = `rounded-xl px-4 py-3 flex-1 flex items-center justify-center ${className ? className : ''}`
  
  return (
      <PressableWithOpacity onPress={onPress} className={customClassName} >
          <Text> {text} </Text>
          {!iconName ? null :  <Ionicons name="add" size={32} color="white" />  }
      </PressableWithOpacity>
  );
}

