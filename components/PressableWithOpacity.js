import { Pressable} from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function PressableWithOpacity({children, onPress, onLongPress, style=[], activeOpacity, ...otherProps}) {
    const opacity = useSharedValue(1);

    const handlePressIn = () => {
      opacity.value = withSpring(activeOpacity || 0.5);
    };
  
    const handlePressOut = () => {
      opacity.value = withSpring(1);
      if(onPress){
        onPress()
      } 
    };

  return (
    <AnimatedPressable   
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={onLongPress}
        style={[{opacity: opacity}, ...style]} 
        {...otherProps}>
            {children}
    </AnimatedPressable>
  );
}
