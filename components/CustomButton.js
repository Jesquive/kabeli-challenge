import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PressableWithOpacity from './PressableWithOpacity';

export default function CustomButton({text ,onPress, iconName, style={}, className="bg-orange-600"}) {
  
  const customClassName = `rounded-xl px-4 py-3 flex-1 flex items-center  justify-center ${className ? className : ''}`
  
  return (
      <PressableWithOpacity style={style} onPress={onPress} className={customClassName} >
          <Text className="text-white"> {text} </Text>
          {!iconName ? null :  <Ionicons name="add" size={32} color="white" />  }
      </PressableWithOpacity>
  );
}

