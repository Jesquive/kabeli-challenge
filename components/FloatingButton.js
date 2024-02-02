import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PressableWithOpacity from './PressableWithOpacity';

export default function FloatingButton({onPress}) {
  return (
    <View className="absolute bottom-6 right-6">
      <PressableWithOpacity onPress={onPress}  className="rounded-full bg-orange-600 h-16 w-16 flex items-center justify-center">
        <Ionicons name="add" size={32} color="white" />
      </PressableWithOpacity>
    </View>
  );
}

