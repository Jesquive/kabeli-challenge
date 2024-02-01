import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function EditItemScreen({route}) {
  const { text } = route.params;
  return (
    <SafeAreaView className="flex-1 items-center justify-center py-2">
      <StatusBar style="auto" />
      <View className="w-full">
        <Text className="text-red-200 "> {text || 'NONE'} </Text>
      </View>
    </SafeAreaView>
  );
}

