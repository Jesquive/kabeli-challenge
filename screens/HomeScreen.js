import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import ToDoItemInfiniteList from '../components/ToDoInfiniteList/ToDoItemInfiniteList';
import FloatingButton from '../components/FloatingButton/FloatingButton';

export default function HomeScreen({navigation}) {

  const navigateToCreate = () =>{
    navigation.navigate('CreateItem')
  }

  return (
    <SafeAreaView className="flex-1 items-center py-2 ">
      <ToDoItemInfiniteList />
      <FloatingButton onPress={navigateToCreate}/>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

